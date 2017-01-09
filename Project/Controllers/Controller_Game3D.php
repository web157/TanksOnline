<?php

class Controller_Game3D extends Controller {	
	
    private $ClassModels;    
    
        function __construct()
	{
                $this->ClassModels = new Models_Game3D;
            
		parent::__construct();
	}
        
        public function action_index()
        {          
            View::$layouts = "MainGame3D.php";                  
            
            $this->view->render("Game3D.php");           
        }
           
}