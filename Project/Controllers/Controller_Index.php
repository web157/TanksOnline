<?php

class Controller_Index extends Controller {	
	
    private $ClassModels;    
    
        function __construct()
	{
                $this->ClassModels = new Models_Index;
            
		parent::__construct();
	}
        
        public function action_index()
        {          
            View::$layouts = "Main.php";                  
            
            $this->view->render("Index.php");           
        }
           
        public function action_pageregistration()
        {          
            View::$layouts = "Main.php";                  
            
            $this->view->render("Registration.php");           
        }
        
        public function action_registration()
        {          
            View::$layouts = "Main.php";                  
            
            if($this->ClassModels->registration()){
                
                $this->view->render("Index.php");
                
            }else{
                
                $this->view->render("Registration.php"); 
                 
            }
                                 
        }
        
        public function action_inspectionlogin()
        {
              View::$layouts = "Main.php";
             
             $l_username;
             $l_password;
             $l_send;
             
             if(isset($_POST["l_username"])){ $l_username = $_POST["l_username"]; }
             if(isset($_POST["l_password"])){ $l_password = md5($_POST["l_password"]); }
             if(isset($_POST["l_send"])){ $l_send = $_POST["l_send"]; }
             
             if(isset($l_send)){
                 
                 $result_set = Main_3D::$ConnectDB->query(" SELECT * FROM usertbl WHERE username = '$l_username' AND password = '$l_password'");
                 
                 if($result_set->fetch_row() < 1){
                   $this->view->render("Registration.php");
                 }else{                    
                     session_start();
                     $_SESSION['login'] = "admin";
                     $this->view->render("Index.php");
                 }
                 
             }
             
        }
        
}