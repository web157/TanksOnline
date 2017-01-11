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
        <div id="idContent">                    
            <?php
            View::AddViews($template, $data);
            ?>
        </div>
    </div>
</BODY>
</HTML>