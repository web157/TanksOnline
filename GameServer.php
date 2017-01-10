<?php

ini_set('display_errors', 0);
error_reporting(0);
set_time_limit(0);

require_once 'PHP_Framework/Socket/InitSocket.php';
require_once 'Server_Script/UserData.php';

$m_aUserData = NULL;

$adr_ = "127.0.0.1";
$port_ = 9595;

$sock_ = new Sosket_();

$sock_->Initalize($adr_, $port_);

while(true){
    
    if($sock_->AsserpSocket()){
        
         foreach ($sock_->changed as $sock) {
        
                if($sock === $sock_->m_sock){

                    $TempSock = $sock_->NewSocket();
                    
                   $m_aUserData[$TempSock] = new UserData;
                   
                   foreach ($sock_->cls as $socket) {

                                if($socket != $TempSock){
                                                         
                                    @socket_write($socket,($sock_->encode(json_encode("Hello")))); 
                                    
                                }
                                                          
                        }
                        
                   foreach ($m_aUserData as $key=>$value) {                                            
                       
                       if($key != $TempSock){
                       
                         @socket_write($TempSock,($sock_->encode(json_encode("World"))));
                         
                       }
                         
                   }
                   

                }else{
                         
                    $d = $sock_->ReadSocket($sock);
                    
                    $data_ = $sock_->decode($d);
                    
                    if($data_['type'] === 'close'){               
                        $sock_->DelSocket($sock);                        
                        continue;
                    }   
                    
                    $ArrD = json_decode($data_['payload'], TRUE);
                                                         
                    
                        foreach ($sock_->cls as $socket) {

                                if($socket != $sock_->m_sock && $sock_->val > 0 && $sock != $socket){
                                                         
                                    
                   
                                }
                            
                        }
                        
                        
            
                } 
                
                
            
        }
        
    }
    
}  
