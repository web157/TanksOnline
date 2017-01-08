<?php

class Sosket_
{
    public $m_sock;
    public $cls;
    public $changed;
    public $val;
  
   function __construct()
   {
      
   }
   
   public function __destruct()
   {
     socket_close($this->m_sock);
   }
   
   
   
   public function Initalize($adr, $port)
   {
      $this->m_sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
      socket_set_option($this->m_sock, SOL_SOCKET, SO_REUSEADDR, 1);
      $this->cls = array($this->m_sock);

      socket_bind($this->m_sock, $adr, $port);
      socket_listen($this->m_sock);
   }
   
   public function AsserpSocket()
   {
       $this->changed = $this->cls;
       $this->val = @socket_select($this->changed,$write=NULL,$except=NULL,0);
       
       if($this->val > 0) {
           return true;
       }else{
           return false;
       }
   }
 
   public function NewSocket()
   {
            $msgsock = socket_accept($this->m_sock);
                      
            $this->cls[intval($msgsock)] = $msgsock;
           
            $buffer = socket_read($msgsock,2048,PHP_BINARY_READ);
            
            $this->Handshake($msgsock,$buffer);           
                                   
            unset($this->changed[array_search($this->m_sock, $this->changed)]);
            
            return $msgsock;
   }
   
   public function DelSocket($sockdel)
   {
        unset($this->cls[intval($sockdel)]);
        @socket_close($sockdel);
   }
   
   public function ReadSocket($rsock)
   {
        $read = @socket_read($rsock,2048);
        
        return $read;
   }
   
   public function WriteSocket($wsocket, $d_)
   {
       @socket_write($wsocket, $d_);
   }
   
   private function Handshake($client,$buffer) {
    $headers = $this->GetHeaders($buffer);
    $data = NULL;
    
    $hash = $headers['key']."258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    $hash = sha1($hash,true);
    $hash = base64_encode($hash);
    
    $message =
        "HTTP/1.1 101 WebSocket Protocol Handshake\r\n".
        "Upgrade: WebSocket\r\n".
        "Connection: Upgrade\r\n".
        "Sec-WebSocket-Accept: ". $hash ."\r\n".
        "Sec-WebSocket-Origin: ". $headers['origin'] ."\r\n".
        "Sec-WebSocket-Location: ws://". $headers['host'] . $headers['resource'] ."\r\n".
        "\r\n".
        $data;
    
    socket_write($client,$message,mb_strlen($message,"utf-8"));
}

private function GetHeaders($buffer) {
    $r = $h = $o = NULL; # Resource, Host, Origin
    if(preg_match("/GET (.*) HTTP/",$buffer,$match)) { $r = $match[1]; }
    if(preg_match("/Host: (.*)\r\n/",$buffer,$match)) { $h = $match[1]; }
    if(preg_match("/Origin: (.*)\r\n/",$buffer,$match)) { $o = $match[1]; }
    if(preg_match("/Sec-WebSocket-Key: (.*)\r\n/",$buffer,$match)) { $k = $match[1]; }
    if(preg_match("/\r\n(.*)/",$buffer,$match)) { $d = $match[1]; }
    return array(
        "resource" => $r,
        "host" => $h,
        "origin" => $o,
        "key" => $k,
        "data" => $d
    );
}


public function decode($data)
{
    $unmaskedPayload = '';
    $decodedData = array();

    // estimate frame type:
    $firstByteBinary = sprintf('%08b', ord($data[0]));
    $secondByteBinary = sprintf('%08b', ord($data[1]));
    $opcode = bindec(substr($firstByteBinary, 4, 4));
    $isMasked = ($secondByteBinary[0] == '1') ? true : false;
    $payloadLength = ord($data[1]) & 127;

    // unmasked frame is received:
    if (!$isMasked) {
        return array('type' => '', 'payload' => '', 'error' => 'protocol error (1002)');
    }

    switch ($opcode) {
        // text frame:
        case 1:
            $decodedData['type'] = 'text';
            break;

        case 2:
            $decodedData['type'] = 'binary';
            break;

        // connection close frame:
        case 8:
            $decodedData['type'] = 'close';
            break;

        // ping frame:
        case 9:
            $decodedData['type'] = 'ping';
            break;

        // pong frame:
        case 10:
            $decodedData['type'] = 'pong';
            break;

        default:
            return array('type' => '', 'payload' => '', 'error' => 'unknown opcode (1003)');
    }

    if ($payloadLength === 126) {
        $mask = substr($data, 4, 4);
        $payloadOffset = 8;
        $dataLength = bindec(sprintf('%08b', ord($data[2])) . sprintf('%08b', ord($data[3]))) + $payloadOffset;
    } elseif ($payloadLength === 127) {
        $mask = substr($data, 10, 4);
        $payloadOffset = 14;
        $tmp = '';
        for ($i = 0; $i < 8; $i++) {
            $tmp .= sprintf('%08b', ord($data[$i + 2]));
        }
        $dataLength = bindec($tmp) + $payloadOffset;
        unset($tmp);
    } else {
        $mask = substr($data, 2, 4);
        $payloadOffset = 6;
        $dataLength = $payloadLength + $payloadOffset;
    }

    /**
     * We have to check for large frames here. socket_recv cuts at 1024 bytes
     * so if websocket-frame is > 1024 bytes we have to wait until whole
     * data is transferd.
     */
    if (strlen($data) < $dataLength) {
        return false;
    }

    if ($isMasked) {
        for ($i = $payloadOffset; $i < $dataLength; $i++) {
            $j = $i - $payloadOffset;
            if (isset($data[$i])) {
                $unmaskedPayload .= $data[$i] ^ $mask[$j % 4];
            }
        }
        $decodedData['payload'] = $unmaskedPayload;
    } else {
        $payloadOffset = $payloadOffset - 4;
        $decodedData['payload'] = substr($data, $payloadOffset);
    }

    return $decodedData;
}



public function encode($payload, $type = 'text', $masked = false)
{
    $frameHead = array();
    $payloadLength = strlen($payload);

    switch ($type) {
        case 'text':
            // first byte indicates FIN, Text-Frame (10000001):
            $frameHead[0] = 129;
            break;

        case 'close':
            // first byte indicates FIN, Close Frame(10001000):
            $frameHead[0] = 136;
            break;

        case 'ping':
            // first byte indicates FIN, Ping frame (10001001):
            $frameHead[0] = 137;
            break;

        case 'pong':
            // first byte indicates FIN, Pong frame (10001010):
            $frameHead[0] = 138;
            break;
    }

    // set mask and payload length (using 1, 3 or 9 bytes)
    if ($payloadLength > 65535) {
        $payloadLengthBin = str_split(sprintf('%064b', $payloadLength), 8);
        $frameHead[1] = ($masked === true) ? 255 : 127;
        for ($i = 0; $i < 8; $i++) {
            $frameHead[$i + 2] = bindec($payloadLengthBin[$i]);
        }
        // most significant bit MUST be 0
        if ($frameHead[2] > 127) {
            return array('type' => '', 'payload' => '', 'error' => 'frame too large (1004)');
        }
    } elseif ($payloadLength > 125) {
        $payloadLengthBin = str_split(sprintf('%016b', $payloadLength), 8);
        $frameHead[1] = ($masked === true) ? 254 : 126;
        $frameHead[2] = bindec($payloadLengthBin[0]);
        $frameHead[3] = bindec($payloadLengthBin[1]);
    } else {
        $frameHead[1] = ($masked === true) ? $payloadLength + 128 : $payloadLength;
    }

    // convert frame-head to string:
    foreach (array_keys($frameHead) as $i) {
        $frameHead[$i] = chr($frameHead[$i]);
    }
    if ($masked === true) {
        // generate a random mask:
        $mask = array();
        for ($i = 0; $i < 4; $i++) {
            $mask[$i] = chr(rand(0, 255));
        }

        $frameHead = array_merge($frameHead, $mask);
    }
    $frame = implode('', $frameHead);

    // append payload to frame:
    for ($i = 0; $i < $payloadLength; $i++) {
        $frame .= ($masked === true) ? $payload[$i] ^ $mask[$i % 4] : $payload[$i];
    }

    return $frame;
}
   
}

