<?php
class Router
{
	static function run($BaseConfig) 
	{
             Main_3D::$ConnectDB = mysqli_connect(
                     $BaseConfig['DataBase']['host'],
                     $BaseConfig['DataBase']['username'],
                     $BaseConfig['DataBase']['password'],
                     $BaseConfig['DataBase']['dbname']
                     ); 
                    if (!Main_3D::$ConnectDB) { 
                        printf("Невозможно подключиться к базе данных. Код ошибки: %s\n", mysqli_connect_error()); 
                        exit; 
                    } 
                    
            $controllerName = 'Index';	
            $actionName = 'index';
            $einnahmeUrl = explode('/', $_SERVER['REQUEST_URI']);       
              
                if (!empty($einnahmeUrl[2])) 
		{
                    if(strpos($einnahmeUrl[2], '.')){
			$controllerName = substr($einnahmeUrl[2], 0, strrpos($einnahmeUrl[2], '.' ));
                    }else{
                        $controllerName = $einnahmeUrl[2];
                    }
		}
		if (!empty($einnahmeUrl[3]))
		{
                     if(strpos($einnahmeUrl[3], '?')){
			$actionName = substr($einnahmeUrl[3], 0, strrpos($einnahmeUrl[3], '?' ));
                    }else{
			$actionName = $einnahmeUrl[3];
                    }
		}
                
            $modelName = 'Models_' . ucfirst(strtolower($controllerName));
            $controllerName = 'Controller_' . ucfirst(strtolower($controllerName));
            $actionName = 'action_' . strtolower($actionName);    
            
            $fileWithModel = $modelName . '.php';
            $fileWithModelPath	= "Project/Models/" . $fileWithModel;
            
                if (file_exists($fileWithModelPath))
		{
			include $fileWithModelPath;                        
		}
                
            $fileWithController = $controllerName . '.php';
            $fileWithControllerPath = "Project/Controllers/" . $fileWithController;
            
		if (file_exists($fileWithControllerPath))
		{
			include $fileWithControllerPath;
		}
		else
		{
			//Здесь нужно добавить обработку ошибки.
			//Например, перекинуть пользователя на страницу 404
		}
                
            $controller = new $controllerName;
            $action = $actionName;
		if (method_exists($controller, $action))
		{
			$controller->$action();
		}
		else
		{
			//Здесь тоже нужно добавить обработку ошибок
		}
            
                
                
                    mysqli_close(Main_3D::$ConnectDB);
	}	
}