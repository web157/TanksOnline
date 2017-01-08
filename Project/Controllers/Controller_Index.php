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
           
}