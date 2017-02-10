<!DOCTYPE html>

<link href="/TanksOnline/Style/StyleRegistration.css" rel="stylesheet" type="text/css">

<HTML>

    <script type="text/javascript"> 
       
       function ClicFormReg(){
       
            $("#idFormRegErr").hide();
        
       }
        
    </script>
    
    <div id="idFormRegistration">
    
     <form action="/TanksOnline/index.php/registration" method="post" name="registration_form" >
  
            <h1 class='idTextlogin'>Полное имя</h1>
            
            <p><input id="full_name" onclick="ClicFormReg()" type="text" name="full_name" size="32" required=" " /></p>
            
            <h1 class='idTextlogin'>E-mail</h1>
            
            <p><input id="email" onclick="ClicFormReg()" type="email" name="email" size="32" required=" " /></p>
            
            <h1 class='idTextlogin'>Имя пользователя</h1>
            
            <p><input id="username" onclick="ClicFormReg()" type="username" name="username" size="32" required=" " /></p>
            
            <h1 class='idTextlogin'>Пароль</h1>
            
            <p><input id="password" onclick="ClicFormReg()" type="password" name="password" size="32" required=" " /></p>
            
            <br>
            <p><input id="idFormButt" type="submit" name="l_send" value="Зарагестрироватся" /></p> 
            
        </form>
  
        <?php
        
            echo "<div id='idFormRegErr'></br></br><p id='idTextErr'>$data</p></div>";
        
        ?>
        
    </div>
        
</HTML>