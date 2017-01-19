<!DOCTYPE html>

<link href="/TanksOnline/Style/StyleRegistration.css" rel="stylesheet" type="text/css">

<HTML>

    <div id="idFormRegistration">
    
     <form action="/TanksOnline/index.php/registration" method="post" name="registration_form" >
  
            <h1 class='idTextlogin'>Полное имя</h1>
            
            <p><input id="full_name" type="text" name="full_name" size="32" required=" " /></p>
            
            <h1 class='idTextlogin'>E-mail</h1>
            
            <p><input id="email" type="email" name="email" size="32" required=" " /></p>
            
            <h1 class='idTextlogin'>Имя пользователя</h1>
            
            <p><input id="username" type="username" name="username" size="32" required=" " /></p>
            
            <h1 class='idTextlogin'>Пароль</h1>
            
            <p><input id="password" type="password" name="password" size="32" required=" " /></p>
            
            <br>
            <p><input id="idFormButt" type="submit" name="l_send" value="Зарагестрироватся" /></p> 
            
        </form>
  
    </div>
        
</HTML>