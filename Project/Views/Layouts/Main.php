<!DOCTYPE html>
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">

<link rel="icon" type="image/png" href="/TanksOnline/Multimedia/Images/TankIcon.png" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="/TanksOnline/Style/StyleMain.css" rel="stylesheet" type="text/css">

<TITLE>Tanks Online</TITLE>
</HEAD>
<BODY>

    <div id="idDivMain">
        
        <header> 
        
        </header>
        
        <div id="idMenu">
            
        </div>
        
        <div id="idLeftMenu">
            
        </div>
        
            <div id="idContent">                    
                <?php
                View::AddViews($template, $data);
                ?>
            </div>
        
        <div id="idRightMenu">
            
            <div id="idFormAuthorization">

                <form action="/TanksOnline/index.php/inspectionlogin" method="post" name="login_form" >

                    <h3 class='idTextlogin'>Логин</h3>

                    <p5><input id="idFormLogin" type="text" name="l_username" required=" " /></p5>

                    <h3 class='idTextlogin'>Пароль</h3>

                    <p5><input id="idFormPassword" type="password" name="l_password" required=" " /></p5>
                    <br>
                    <p5><input id="idFormButton" type="submit" name="l_send" value="Войти" /></p5> 

                </form>

                <p id="idMainReg"><a href='/TanksOnline/index.php/pageregistration'>Регистрация</a></p>
            </div>
                       
        </div>
        
        <footer>
        
        </footer>
        
    </div>
</BODY>
</HTML>