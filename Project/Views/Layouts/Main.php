<!DOCTYPE html>
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">

<script type="text/javascript" src="/TanksOnline/JavaScript/jQuery/jquery-1.6.2.js"></script>
<link rel="icon" type="image/png" href="/TanksOnline/Multimedia/Images/TankIcon.png" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="/TanksOnline/Style/StyleMain.css" rel="stylesheet" type="text/css">

<TITLE>Tanks Online</TITLE>
</HEAD>
<BODY>

    <script type="text/javascript"> 
       
       function ClicFormLogin(){
       
            $("#idFormTexErr").hide();
        
       }
        
    </script>
    
    <div id="idDivMain">
        
        <header> 
        
        </header>
        
        <div id="idMenu">
            
            <div id="idHome" onClick="window.location.href='/TanksOnline/index.php'">
                <p5 class="classTextMenu">Главная</p5>
            </div>
            
            <?php
            
            if (!empty($_SESSION['login']))
                {
           
                 echo   "<div id='idCabinet' onClick="."window.location.href="."'/TanksOnline/index.php/cabinetuser'".">"
                        ."<p5 class='classTextMenu'>Кабинет</p5>"
                        ."</div>";
                }
           ?>
            
        </div>
        
        <div id="idLeftMenu">
            
        </div>
        
            <div id="idContent">                    
                <?php
                
                    if(!isset($data["LoginError"])){

                        View::AddViews($template, $data);

                    }
                ?>
            </div>
        
        <div id="idRightMenu">
            
            <div id="idFormAuthorization">

                <?php
          
                if (empty($_SESSION['login']))
                {
                    echo "<form action='/TanksOnline/index.php/inspectionlogin' method='post' name='login_form' >

                            <h3 class='idTextlogin'>Логин</h3>

                            <p5><input id='idFormLogin' onclick='ClicFormLogin()' type='text' name='l_username' required=' ' /></p5>

                            <h3 class='idTextlogin'>Пароль</h3>

                            <p5><input id='idFormPassword' onclick='ClicFormLogin()' type='password' name='l_password' required=' ' /></p5>
                            <br>
                            <p5><input id='idFormButton' type='submit' name='l_send' value='Войти' /></p5>

                         </form>";
                    
                    if(isset($data["LoginError"])){
                        echo "<div id='idFormTexErr'></br><p id='idMainTextErr'>".$data["LoginError"]."</p></br></div>";
                    }
                    
                    echo "<p id='idMainReg'><a href='/TanksOnline/index.php/pageregistration'>Регистрация</a></p>";
                    
                }else{
                    
                    echo "<p5>".$_SESSION['login']."</p5>";
                    
                    echo "<p5 id='idLoginCabinet'><a href='/TanksOnline/index.php/outcabinetuser'>Выход</a></p5>";
                                      
                }
                    
            ?>  
                
                
            </div>
                       
        </div>
        
        <footer>
        
        </footer>
        
    </div>
</BODY>
</HTML>