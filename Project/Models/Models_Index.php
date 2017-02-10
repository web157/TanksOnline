<?php

class Models_Index extends Models {	
	function __construct()
	{
		parent::__construct();
	}
            
        function registration()
        {
            $l_fullname = NULL;
            $l_email = NULL;
            $l_username = NULL;
            $l_password = NULL;
            $l_send = NULL;
            $Result = array();
             
            if(filter_has_var(INPUT_POST, 'full_name')){
                 
                $l_fullname = filter_input(INPUT_POST, 'full_name');
                $l_fullname = trim($l_fullname);
                
                if(!preg_match("/^[a-zA-Z0-9]+$/", $l_fullname))

                {
                    $data = "Имя может состоять только из букв английского алфавита и цифр";
                                      
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                if(strlen($l_fullname) < 3 or strlen($l_fullname) > 32)

                {
                    $data = "Имя должно быть не меньше 3-х символов и не больше 32";
         
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                 
             }else{
                 
                    $data = "Пустое поле для имени";
                               
                    $Result["result"] = false;
                    $Result["data"] = $data;

                    return $Result;
                 
             }
            
             
             
             if(filter_has_var(INPUT_POST, 'email')){
                 
                $l_email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
                $l_email = trim($l_email);
                
                if(!preg_match("|^([a-z0-9_.-]{1,20})@([a-z0-9.-]{1,20}).([a-z]{2,4})|is", $l_email))

                {
                    $data = "Неправельный email";
                                      
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }                                
                 
             }else{
                 
                    $data = "Пустой email";
                               
                    $Result["result"] = false;
                    $Result["data"] = $data;

                    return $Result;
                 
             }
             
             
             if(filter_has_var(INPUT_POST, 'username')){
                 
                $l_username = filter_input(INPUT_POST, 'username');
                $l_username = trim($l_username);
                
                if(!preg_match("/^[a-zA-Z0-9]+$/", $l_username))

                {
                    $data = "Логин может состоять только из букв английского алфавита и цифр";
                                      
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                if(strlen($l_username) < 3 or strlen($l_username) > 32)

                {
                    $data = "Логин должен быть не меньше 3-х символов и не больше 32";
         
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                 
             }else{
                 
                    $data = "Пустой логин";
                               
                    $Result["result"] = false;
                    $Result["data"] = $data;

                    return $Result;
                 
             }
             
             
             
             if(filter_has_var(INPUT_POST, 'password')){
                                
                $l_password = filter_input(INPUT_POST, 'password');
                $l_password = trim($l_password);
                
                if(!preg_match("/^[a-zA-Z0-9]+$/", $l_password))

                {
                    $data = "Парроль может состоять только из букв английского алфавита и цифр";
                    
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                if(strlen($l_password) < 3 or strlen($l_password) > 32)

                {
                    $data = "Парроль должен быть не меньше 3-х символов и не больше 32";
                    
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }                
                 
             }else{
                 
                    $data = "Пустой парроль";
                 
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
             }
            
            
             if(isset($_POST["l_send"])){ $l_send = $_POST["l_send"]; }else{ return false;}
             
             if(isset($l_send)){
                 
                    $l_username = Main_3D::$ConnectDB->real_escape_string($l_username);
                 
                    $result_set = Main_3D::$ConnectDB->query(" SELECT * FROM usertbl WHERE username = '$l_username'");

                    if($result_set->fetch_row() == 0){
                     
                    $l_fullname = Main_3D::$ConnectDB->real_escape_string($l_fullname);
                    $l_email = Main_3D::$ConnectDB->real_escape_string($l_email);
                    $l_password = Main_3D::$ConnectDB->real_escape_string($l_password);
                    
                    $l_password = md5($l_password);

                    $sql="INSERT INTO usertbl
                         (full_name, email, username, password)
                          VALUES('$l_fullname','$l_email', '$l_username', '$l_password')";


                    $result_set = Main_3D::$ConnectDB->query($sql);

                    if($result_set){

                        $data = "Вы зарагистрированны";
                    
                        $Result["result"] = true;
                        $Result["data"] = $data;
                    
                        return $Result; 

                    }else{ 

                        $data = "Ошибка при регистрации";
                    
                        $Result["result"] = false;
                        $Result["data"] = $data;
                    
                        return $Result; 

                    }
                 
                }else{
                    
                    $data = "Пользователь с таким логином уже существует";
                    
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result; 
                 
                }
             
             }
             
        }
        
        function inspectionlogin()
        {
             $l_username = NULL;
             $l_password = NULL;
             $l_send = NULL;
             $Result = array();
             
             if(filter_has_var(INPUT_POST, 'l_username')){
                 
                $l_username = filter_input(INPUT_POST, 'l_username');
                $l_username = trim($l_username);
                
                if(!preg_match("/^[a-zA-Z0-9]+$/", $l_username))

                {
                    $data = "Логин может состоять только из букв английского алфавита и цифр";
                                      
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                if(strlen($l_username) < 3 or strlen($l_username) > 32)

                {
                    $data = "Логин должен быть не меньше 3-х символов и не больше 32";
         
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                 
             }else{
                 
                    $data = "Пустой логин";
                               
                    $Result["result"] = false;
                    $Result["data"] = $data;

                    return $Result;
                 
             }
             
             
             
             if(filter_has_var(INPUT_POST, 'l_password')){
                                
                $l_password = filter_input(INPUT_POST, 'l_password');
                $l_password = trim($l_password);
                
                if(!preg_match("/^[a-zA-Z0-9]+$/", $l_password))

                {
                    $data = "Парроль может состоять только из букв английского алфавита и цифр";
                    
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }
                
                if(strlen($l_password) < 3 or strlen($l_password) > 32)

                {
                    $data = "Парроль должен быть не меньше 3-х символов и не больше 32";
                    
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                }                
                 
             }else{
                 
                    $data = "Пустой парроль";
                 
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
             }
                      
             if(isset($_POST["l_send"])){ $l_send = $_POST["l_send"]; }
             
             if(isset($l_send)){
                 
                 $l_username = Main_3D::$ConnectDB->real_escape_string($l_username);
                 $l_password = Main_3D::$ConnectDB->real_escape_string($l_password);
                 
                 $l_password = md5($l_password);
                 
                 $result_set = Main_3D::$ConnectDB->query(" SELECT * FROM usertbl WHERE username = '$l_username' AND password = '$l_password'");
                 
                 if($result_set->fetch_row() < 1){
                    
                    $data = "Неправельный логин или парроль";  
                                       
                    $Result["result"] = false;
                    $Result["data"] = $data;
                    
                    return $Result;
                     
                 }else{        
                     
                     //session_start();
                     $_SESSION['login'] = $l_username;
                    
                     $Result["result"] = true;
                     $Result["data"] = "Ok";
                    
                    return $Result;
                     
                 }
                 
             }
        }
}
