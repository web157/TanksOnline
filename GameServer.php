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

                   $m_aUserData[$sock_->NewSocket()] = new UserData;
                   
                   foreach ($sock_->cls as $socket) {

                                if($socket != $m_sock && $val > 0 && $sock != $socket){
                                                         
                                    @socket_write($socket,(encode(json_encode($ArrTemp)))); 
                                    
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

                                if($socket != $m_sock && $val > 0 && $sock != $socket){
                                                         
                                    
                   
                            }
                            
                        }
                        
                        
            
                } 
                
                
            
        }
        
    }
    
}  
