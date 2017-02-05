<?php

$name = NULL;
$File_ = NULL;

if(isset($_POST['fname'])){
$name = $_POST['fname'];
}

if(isset($_POST['ffile'])){
$File_ = $_POST['ffile'];
}
    
   $fp = fopen($File_, 'r');
   
   $vertexX = array();
   $vertexY = array(); 
   $vertexZ = array(); 
   $normalX = array();
   $normalY = array(); 
   $normalZ = array(); 
   $index = array();
   $textureu = array(); 
   $texturev = array(); 
   $indexTex = array();
   $indexNorm = array();
   
   $vertexData = array();
   $indexData = array();
   $textureData = array();
   $normalData = array();
   
  while (!feof($fp)) {
   
            $mytext = fgets($fp, 999);
           
            $pieces = explode(" ", $mytext);

            if($pieces[0] == "v"){
                array_push($vertexX, $pieces[2]);
                array_push($vertexY, $pieces[3]);
                array_push($vertexZ, $pieces[4]);
            
            }
            
            if($pieces[0] == "vn"){
                array_push($normalX, $pieces[1]);
                array_push($normalY, $pieces[2]);
                array_push($normalZ, $pieces[3]);
            
            }


             if($pieces[0] == "vt"){
                 
                 array_push($textureu, $pieces[1]);
                array_push($texturev, $pieces[2]);
           
            }
            
       if($pieces[0] == "f"){
               $Indv = explode("/",$pieces[1]); 
               $Indv1 = explode("/",$pieces[2]); 
               $Indv2 = explode("/",$pieces[3]);
               
                array_push($index, ($Indv[0] - 1));
                array_push($index, ($Indv1[0] - 1));
                array_push($index, ($Indv2[0] - 1));
                
                array_push($indexTex, ($Indv[1] - 1));
                array_push($indexTex, ($Indv1[1] - 1));
                array_push($indexTex, ($Indv2[1] - 1));
               
                array_push($indexNorm, ($Indv[2] - 1));
                array_push($indexNorm, ($Indv1[2] - 1));
                array_push($indexNorm, ($Indv2[2] - 1));
                
            }     
   
   }
   
   if($name == "Text"){
   
   for($i = 0; $i < count($indexTex); $i++){      
      array_push($textureData, $textureu[$indexTex[$i]]);
       array_push($textureData, $texturev[$indexTex[$i]]);
   }
   
   $Data = json_encode($textureData);
   
   echo $Data;
   }
   
   if($name == "Vert"){
   
  for($i = 0; $i < count($index); $i++){
      array_push($vertexData, ($vertexX[$index[$i]] * 0.05));
      array_push($vertexData, ($vertexY[$index[$i]] * 0.05));
      array_push($vertexData, ($vertexZ[$index[$i]] * 0.05));
      
   
   }
   
    $Data = json_encode($vertexData);
   
   echo $Data;
   }
 
      
   if($name == "Ind"){
   
   for($i = 0; $i < count($index); $i++){
       array_push($indexData, $i);
   }
   
   $Data = json_encode($indexData);
   
   echo $Data;
   }
   
   if($name == "Norm"){
       
       for($i = 0; $i < count($indexNorm); $i++){
        array_push($normalData, $normalX[$indexNorm[$i]]);
        array_push($normalData, $normalY[$indexNorm[$i]]);
        array_push($normalData, $normalZ[$indexNorm[$i]]);
      
   
       }
   
       $Data = json_encode($normalData);
   
       echo $Data;
       
   }
   
   fclose($fp);