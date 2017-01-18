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
        
}