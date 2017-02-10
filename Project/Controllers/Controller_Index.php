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
            session_start();
            
            View::$layouts = "Main.php";                  
            
            $this->view->render("Index.php");           
        }
           
        public function action_pageregistration()
        {    
            session_start();
            
            if (!empty($_SESSION['login']))
            {
                View::$layouts = "Main.php";                  
            
                $data = "Вы уже авторизованны";
                
                $this->view->render("PageError.php", $data);
                
                return;
            }
            
            View::$layouts = "Main.php";                  
            
            $this->view->render("Registration.php");           
        }
        
        public function action_registration()
        {          
            session_start();
            
            if (!empty($_SESSION['login']))
            {
                View::$layouts = "Main.php";                  
            
                $data = "Вы уже авторизованны";
                
                $this->view->render("PageError.php", $data);
                
                return;
            }
            
            View::$layouts = "Main.php";                  
            
            $Result = $this->ClassModels->registration();
            
            if($Result["result"]){
                
                $this->view->render("Index.php");
                
            }else{
                
                $this->view->render("Registration.php", $Result["data"]); 
                 
            }
                                 
        }
        
        public function action_inspectionlogin()
        {          
             session_start();
             
            if (!empty($_SESSION['login']))
            {
                View::$layouts = "Main.php";                  
            
                $data = "Вы уже авторизованны";
                
                $this->view->render("PageError.php", $data);
                
                return;
            }
            
             View::$layouts = "Main.php";
             
             $data = array();
             
             $Result = $this->ClassModels->inspectionlogin();
              
             if($Result["result"]){
                
                $this->view->render("InspectionLogin.php");
                
            }else{
                
                $data["LoginError"] = $Result["data"];
                
                $this->view->render("InspectionLogin.php", $data); 
                 
            }
              
              
        }
        
        public function action_outcabinetuser()
        {
             View::$layouts = "Main.php";
             
             session_start();
             
             session_destroy();
                         
             $this->view->render("OutCabinetUser.php");
        }
        
        public function action_cabinetuser()
        {                         
             session_start();
             
             if (empty($_SESSION['login']))
            {
                View::$layouts = "Main.php";                  
            
                $data = "Вы не авторизованны";
                
                $this->view->render("PageError.php", $data);
                
                return;
            }
             View::$layouts = "Main.php";
            
             $this->view->render("CabinetUser.php");
        }
        
}