<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">       
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <link href="/TanksOnline/Style/StyleGame3D.css" rel="stylesheet" type="text/css">
        <script  type="text/javascript" src="/TanksOnline/JavaScript/Math/gl-matrix-min.js"></script>
        <script type="text/javascript" src="/TanksOnline/Game_3D/Game_Main.js"></script>
        <script type="text/javascript" src="/TanksOnline/JavaScript/WebGL/WebGL.js"></script>       
        <script type="text/javascript" src="/TanksOnline/Game_3D/Game_Network.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_Interface.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_ObjectScene.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_TextureScene.js"></script>
        <script  type="text/javascript" src="/TanksOnline/Game_3D/Game_Collision.js"></script>
    </head>
    <body>
        <div id="idGameNumberServer">
            <?php
            
            for($i = 1; $i < 5; $i++){
            
                echo "<div id='$i' class='classNumberServer' onclick='SelectionServer(id)'></div>";
                    
            }
            ?>
        </div>
        
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

        var PosMouseX = 0;

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
          
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
                        
             var m_pGameMain = new GameMain(gl);
             
             m_pGameMain.Initalize();         
          
            window.onload=function(){

                (function animloop(){
                                    
                    m_pGameMain.RunScene(PosMouseX, 0, 0);
                                                       
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
       
       
        function handleKeyDown(e){
        switch(e.keyCode)
        {
            case 65: 
               m_pGameMain.gl_.Obj_["tank"]["ty"] += 0.2;
                break;
            case 68:  
             m_pGameMain.gl_.Obj_["tank"]["ty"] -= 0.2;
                break;
            case 87:  
               m_pGameMain.gl_.Obj_["tank"]["z"] += Math.cos(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.5;
               m_pGameMain.gl_.Obj_["tank"]["x"] += Math.sin(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.5;
                break;
            case 83:  
               m_pGameMain.gl_.Obj_["tank"]["z"] -= Math.cos(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.5;
               m_pGameMain.gl_.Obj_["tank"]["x"] -= Math.sin(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.5;
                break;
            case 81:
                m_pGameMain.gl_.Obj_["tower"]["addty"] += 0.2;
                m_pGameMain.gl_.Obj_["trunk"]["addty"] = m_pGameMain.gl_.Obj_["tower"]["addty"];
                break;
            case 69:
                m_pGameMain.gl_.Obj_["tower"]["addty"] -= 0.2;
                m_pGameMain.gl_.Obj_["trunk"]["addty"] = m_pGameMain.gl_.Obj_["tower"]["addty"];
                break;
            case 82:
                if(m_pGameMain.gl_.Obj_["trunk"]["addtx"] > -0.5){
                    m_pGameMain.gl_.Obj_["trunk"]["addtx"] -= 0.05;
                }
                break;
            case 70:
                if(m_pGameMain.gl_.Obj_["trunk"]["addtx"] < 0){
                    m_pGameMain.gl_.Obj_["trunk"]["addtx"] += 0.05;
                }
                break;    
        }
        
         m_pGameMain.gl_.Obj_["tank"]["y"] = m_pGameMain.CollisionObjectPosition(m_pGameMain.gl_.Obj_["tank"]["x"],
         m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"], m_pGameMain.gl_.Obj_["tank"]["tx"],
         m_pGameMain.gl_.Obj_["tank"]["ty"], m_pGameMain.gl_.Obj_["tank"]["tz"]);
        
        m_pGameMain.gl_.Obj_["tower"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"] + m_pGameMain.gl_.Obj_["tower"]["addx"];
        m_pGameMain.gl_.Obj_["tower"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"] + m_pGameMain.gl_.Obj_["tower"]["addy"];
        m_pGameMain.gl_.Obj_["tower"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"] + m_pGameMain.gl_.Obj_["tower"]["addz"];
        m_pGameMain.gl_.Obj_["tower"]["tx"] = m_pGameMain.gl_.Obj_["tank"]["tx"] + m_pGameMain.gl_.Obj_["tower"]["addtx"];
        m_pGameMain.gl_.Obj_["tower"]["ty"] = m_pGameMain.gl_.Obj_["tank"]["ty"] + m_pGameMain.gl_.Obj_["tower"]["addty"];
        m_pGameMain.gl_.Obj_["tower"]["tz"] = m_pGameMain.gl_.Obj_["tank"]["tz"] + m_pGameMain.gl_.Obj_["tower"]["addtz"];
        
        m_pGameMain.gl_.Obj_["trunk"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"] + m_pGameMain.gl_.Obj_["trunk"]["addx"];
        m_pGameMain.gl_.Obj_["trunk"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"] + m_pGameMain.gl_.Obj_["trunk"]["addy"];
        m_pGameMain.gl_.Obj_["trunk"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"] + m_pGameMain.gl_.Obj_["trunk"]["addz"];
        m_pGameMain.gl_.Obj_["trunk"]["tx"] = m_pGameMain.gl_.Obj_["tank"]["tx"] + m_pGameMain.gl_.Obj_["trunk"]["addtx"];
        m_pGameMain.gl_.Obj_["trunk"]["ty"] = m_pGameMain.gl_.Obj_["tank"]["ty"] + m_pGameMain.gl_.Obj_["trunk"]["addty"];
        m_pGameMain.gl_.Obj_["trunk"]["tz"] = m_pGameMain.gl_.Obj_["tank"]["tz"] + m_pGameMain.gl_.Obj_["trunk"]["addtz"];             
        
        MoveUser();              
    }
       
    var temp = 0;
    var temp1 = 0;
    function handleMouseDown(e){
        temp = e.clientX;
          if(temp > temp1){ PosMouseX+=0.05; }
          if(temp < temp1){ PosMouseX-=0.05; }
        temp1 = temp;    
    }
       
    </script>
   
    </body>
           
    
</html>
