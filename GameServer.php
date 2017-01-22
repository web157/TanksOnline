<?php

ini_set('display_errors', 0);
error_reporting(0);
set_time_limit(0);

require_once 'PHP_Framework/Socket/InitSocket.php';
require_once 'Server_Script/UserData.php';
require_once 'Server_Script/ServerMapaNumber.php';

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

$m_pNumberMapa = array();

for($j = 1; $j < 5; $j++){
    $m_pNumberMapa[$j] = new ServerMapaNumber;
    $m_pNumberMapa[$j]->Number_Mapa = $j - 1;
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
                   
                   $m_aUserData[$TempSock]->ThisSocket = $TempSock; 
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
                    
                   if(isset($ArrD["Authorization"])){
                       
                      $l_username = $ArrD["FormLog"];
                      $l_password = md5($ArrD["FormPass"]); 
                      
                      $TempErrLogData = array();
                      
                      foreach ($m_aUserData as $key=>$value) {                                            
                      
                          if($l_username === $m_aUserData[$key]->UserLogin){
                              
                              $TempErrLogData["ErrorLogin"] = "ErrorLogin";
                                                           
                              $sock_->DelSocket($m_aUserData[$key]->ThisSocket); 
                              
                              unset($m_aUserData[$key]);
                              
                              @socket_write($sock,($sock_->encode(json_encode($TempErrLogData))));
                              
                          }
                          
                      }
                      
                      if(isset($TempErrLogData["ErrorLogin"])){
                          continue;
                      }
                      
                        $result_set = $ConnectDB->query(" SELECT * FROM usertbl WHERE username = '$l_username' AND password = '$l_password'");

                        if($result_set->fetch_row() < 1){
                         
                            $TempData["Authorization"] = false;
                            
                            @socket_write($sock,($sock_->encode(json_encode($TempData))));
                            
                            continue;
                            
                        }else{                    
                           
                            $result_set1 = $ConnectDB->query("SELECT * FROM usertbl WHERE (username='$l_username')");
                            
                            $row = $result_set1->fetch_assoc();
                            
                            $m_aUserData[$sock]->UserLogin = $l_username;
                            
                            $m_aUserData[$sock]->NameUser = $row["full_name"];
                            
                            $m_aUserData[$sock]->Authorization = true;
                            
                            $TempData["Authorization"] = true;
                                                       
                            @socket_write($sock,($sock_->encode(json_encode($TempData))));
                            
                            continue;
                        }
                       
                   } 
                    
                }
                    
                if($m_aUserData[$sock]->NumberServer == NULL){
                    
                    if(isset($ArrD["SelectionServer"])){
                                                                     
                        $m_aUserData[$sock]->NumberServer = $ArrD["SelectionServer"];
                        
                        $TempData1["StatGameServer"] = "StatGameServer";
                        $TempData1["SelectionServer"] = $ArrD["SelectionServer"];
                        $TempData1["ThisNameUser"] = $m_aUserData[$sock]->NameUser;
                        $TempData1["NumberMapa"] = $m_pNumberMapa[$m_aUserData[$sock]->NumberServer]->Number_Mapa;
                        $TempData1["ArrayDataUsers"] = array();
                        
                        foreach ($m_aUserData as $key=>$value) {
                            
                           if($key != $sock){
                       
                               if($m_aUserData[$sock]->NumberServer == $m_aUserData[$key]->NumberServer){
                               
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser] = array();
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser]["PosX"] = $m_aUserData[$key]->PosX;
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser]["PosY"] = $m_aUserData[$key]->PosY;
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser]["PosZ"] = $m_aUserData[$key]->PosZ;
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser]["PosTx"] = $m_aUserData[$key]->PosTx;
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser]["PosTy"] = $m_aUserData[$key]->PosTy;
                                    $TempData1["ArrayDataUsers"][$m_aUserData[$key]->NameUser]["PosTz"] = $m_aUserData[$key]->PosTz;

                               }
                           }                
                            
                        }  
                        
                        @socket_write($sock,($sock_->encode(json_encode($TempData1))));
                        
                        $TempData2["NewConectUser"] = true;
                        $TempData2["NewConectUserData"] = array();                       
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser] = array();
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser]["PosX"] = $m_aUserData[$key]->PosX;
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser]["PosY"] = $m_aUserData[$key]->PosY;
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser]["PosZ"] = $m_aUserData[$key]->PosZ;
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser]["PosTx"] = $m_aUserData[$key]->PosTx;
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser]["PosTy"] = $m_aUserData[$key]->PosTy;
                        $TempData2["NewConectUserData"][$m_aUserData[$sock]->NameUser]["PosTz"] = $m_aUserData[$key]->PosTz;

                        foreach ($m_aUserData as $key=>$value) {                                            
                             
                            if($key != $sock){
                                         
                                if($m_aUserData[$sock]->NumberServer == $m_aUserData[$key]->NumberServer){
                               
                                        @socket_write($sock_->cls[$key],($sock_->encode(json_encode($TempData2))));
                                
                                }
                            
                            }
                         
                        } 
                            
                    }else{
                        continue;
                    }                     
                    
                }
                 
                 if(isset($ArrD["MoveArrDataUser"])){
                     
                     $m_aUserData[$sock]->PosX = $ArrD["PosX"];
                     $m_aUserData[$sock]->PosY = $ArrD["PosY"];
                     $m_aUserData[$sock]->PosZ = $ArrD["PosZ"];
                     $m_aUserData[$sock]->PosTx = $ArrD["PosTx"];
                     $m_aUserData[$sock]->PosTy = $ArrD["PosTy"];
                     $m_aUserData[$sock]->PosTz = $ArrD["PosTz"];
                
                     $TempData3["MoveArrDataUser"] = "MoveArrDataUser";
                     $TempData3["UserName"] = $m_aUserData[$sock]->NameUser;
                     $TempData3["PosX"] = $ArrD["PosX"];
                     $TempData3["PosY"] = $ArrD["PosY"];
                     $TempData3["PosZ"] = $ArrD["PosZ"];
                     $TempData3["PosTx"] = $ArrD["PosTx"];
                     $TempData3["PosTy"] = $ArrD["PosTy"];
                     $TempData3["PosTz"] = $ArrD["PosTz"];
                     
                     foreach ($m_aUserData as $key=>$value) {                                            
                             
                            if($key != $sock){
                                                
                                if($m_aUserData[$sock]->NumberServer == $m_aUserData[$key]->NumberServer){
                               
                                        @socket_write($sock_->cls[$key],($sock_->encode(json_encode($TempData3))));
                                
                                }
                            
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
