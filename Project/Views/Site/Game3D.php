<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">       
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script  type="text/javascript" src="/TanksOnline/JavaScript/Math/gl-matrix-min.js"></script>
        <script type="text/javascript" src="/TanksOnline/Game_3D/Game_Main.js"></script>
        <script type="text/javascript" src="/TanksOnline/JavaScript/WebGL/WebGL.js"></script>       
                  
    </head>
    <body>
               
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
       
        gl = new Object();

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
          
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
                        
             var m_pGameMain = new GameMain(gl);
             
             m_pGameMain.Initalize();         
          
            window.onload=function(){

                (function animloop(){
                                    
                    m_pGameMain.RunScene();
                                                       
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
