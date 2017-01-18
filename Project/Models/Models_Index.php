<?php

class Models_Index extends Models {	
	function __construct()
	{
		parent::__construct();
	}
            
        function registration()
        {
            $l_fullname;
            $l_email;
            $l_username;
            $l_password;
            $l_send;
             
             if(isset($_POST["full_name"])){ $l_fullname = $_POST["full_name"]; }else{ return false;}
             if(isset($_POST["email"])){ $l_email = $_POST["email"]; }else{ return false;}
             if(isset($_POST["username"])){ $l_username = $_POST["username"]; }else{ return false;}
             if(isset($_POST["password"])){ $l_password = md5($_POST["password"]); }else{ return false;}
             if(isset($_POST["l_send"])){ $l_send = $_POST["l_send"]; }else{ return false;}
             
             if(isset($l_send)){
                 
                 $result_set = Main_3D::$ConnectDB->query(" SELECT * FROM usertbl WHERE username = '$l_username'");
                 
                 if($result_set->fetch_row() == 0){
                  
                 
                 $sql="INSERT INTO usertbl
                      (full_name, email, username, password)
                       VALUES('$l_fullname','$l_email', '$l_username', '$l_password')";
                 
                 
                 $result_set = Main_3D::$ConnectDB->query($sql);
                 
                 if($result_set){
                     
                        return true;
                  
                 }else{ 
                     
                        return false;
                    
                 }
                 
             }else{ return false; }
             
             }
             
        }
}
