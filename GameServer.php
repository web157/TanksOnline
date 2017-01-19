<?php

ini_set('display_errors', 0);
error_reporting(0);
set_time_limit(0);

require_once 'PHP_Framework/Socket/InitSocket.php';
require_once 'Server_Script/UserData.php';

$ConnectDB = mysqli_connect(
                     'localhost',
                     'root',
                     'admin',
                     'tanksonline'
                     ); 
if (!$ConnectDB) { 
    printf("Невозможно подключиться к базе данных. Код ошибки: %s\n", mysqli_connect_error()); 
    exit; 
} 

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////                   
                  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else{
                         
                    $d = $sock_->ReadSocket($sock);
                    
                    $data_ = $sock_->decode($d);
                    
                    if($data_['type'] === 'close'){
                        unset($m_aUserData[$sock]);
                        $sock_->DelSocket($sock);                        
                        continue;
                    }   
                    
                    $ArrD = json_decode($data_['payload'], TRUE);
                                                         
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
                if(!$m_aUserData[$sock]->Authorization){
                    //exit();
                   if(isset($ArrD["Authorization"])){
                       
                      $l_username = $ArrD["FormLog"];
                      $l_password = md5($ArrD["FormPass"]); 
                      
                        $result_set = $ConnectDB->query(" SELECT * FROM usertbl WHERE username = '$l_username' AND password = '$l_password'");

                        if($result_set->fetch_row() < 1){
                         
                            @socket_write($sock,($sock_->encode(json_encode("Неверный"))));
                            
                        }else{                    
                           
                            $m_aUserData[$sock]->Authorization = true;
                            
                            @socket_write($sock,($sock_->encode(json_encode("ok"))));
                            
                        }
                       
                   } 
                    
                }
                    
                    
                    
                    
                //  foreach ($m_aUserData as $key=>$value) {                                            
                                             
                //         @socket_write($sock_->cls[$key],($sock_->encode(json_encode($key))));                                               
                         
                //   }  
                  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
                } 
                
                
            
        }
        
    }
    
}  
