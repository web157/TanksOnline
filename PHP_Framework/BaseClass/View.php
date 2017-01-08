<?php
class View
{
    static public $layouts;
   
	function __construct()
	{
           View::$layouts = "Project/Views/Layouts/Main.php";
	}
        
        public function render($template, $data = null)
	{
            if (!empty(View::$layouts)){
                include 'Project/Views/Layouts/' . View::$layouts;
            }           		          
	}
        
        static public function AddViews($BlogViews, $data)
        {
            include 'Project/Views/Site/' . $BlogViews; 
        }
}