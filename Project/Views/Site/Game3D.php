<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">       
        <script type="text/javascript" src="/TanksOnline/JavaScript/jQuery/jquery-1.6.2.js"></script>
        <link href="/TanksOnline/Style/StyleGame3D.css" rel="stylesheet" type="text/css">
        <script  type="text/javascript" src="/TanksOnline/JavaScript/Math/gl-matrix-min.js"></script>
        <script type="text/javascript" src="/TanksOnline/Game_3D/Game_Main.js"></script>
        <script type="text/javascript" src="/TanksOnline/JavaScript/WebGL/WebGL.js"></script>       
        <script type="text/javascript" src="/TanksOnline/Game_3D/Game_Network.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_Interface.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_ObjectScene.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_TextureScene.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_Collision.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_Input.js"></script>
    </head>
    <body>
        <div id="idGameNumberServer">
            <?php
            
            for($i = 1; $i < 5; $i++){
            
                echo "<div id='$i' class='classNumberServer' onclick='SelectionServer(id)'></div>";
                    
            }
            ?>
        </div>
        
        <div id ="idChat">
            
        </div>
        
        <p><input id="idInputChat" type="text" name="idInputChat" size="32" required=" " /></p>
        
        <canvas id="canvas3D">Ваш браузер не поддерживает элемент canvas</canvas>
  
        <script id="shader-fs" type="x-shader/x-fragment">

            precision highp float;
            uniform sampler2D uSampler;
            varying vec2 vTextureCoords;

            void main(void) {
              gl_FragColor = texture2D(uSampler, vTextureCoords);
            }
        </script>

        <script id="shader-vs" type="x-shader/x-vertex">

            attribute vec3 aVertexPosition;
            attribute vec2 aVertexTextureCoords;
            varying vec2 vTextureCoords;
            uniform mat4 uMVMatrix;
            uniform mat4 uPMatrix;

            void main(void) {
              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
              vTextureCoords = aVertexTextureCoords;

            }
        </script>
    
    <script type="text/javascript"> 
           
       var ResDate;   
     
        var gl = new Object();
        
        var m_pGameMain = new Object();

        var ResPosCamX = 0;
        var ResPosCamY = 10;
	var ResPosCamZ = -30;

        var canvas = document.getElementById("canvas3D");

        canvas.width = $(document).width();
        canvas.height = $(document).height();

        try {
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");       
        }
        catch(e) {}

          if (!gl) {
            alert("Ваш браузер не поддерживает WebGL");
          }
        if(gl){
            
            document.addEventListener('keydown', handleKeyDown, false);
            document.addEventListener('mousemove', handleMouseDown, false);
            document.addEventListener('mousedown', handleMouseClic, false);
          
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
                        
             m_pGameMain = new GameMain(gl);
             
             m_pGameMain.Initalize();         
          
            window.onload=function(){

                (function animloop(){
                                     
                    var start = new Date();
                        
                    m_pGameMain.RunScene(ResPosCamX, ResPosCamY, ResPosCamZ);
                    
                    var end = new Date();
                        
                    ResDate = end.getTime() - start.getTime();    
                                                              
                  requestAnimFrame(animloop, canvas);
                })();

            };
            
        }  
               
            window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       || 
                  window.webkitRequestAnimationFrame || 
                  window.mozRequestAnimationFrame    || 
                  window.oRequestAnimationFrame      || 
                  window.msRequestAnimationFrame     ||
             function(callback, element) {
               return window.setTimeout(callback, 1000/60);
             };
    })();
                     
    </script>
   
    </body>
           
    
</html>
