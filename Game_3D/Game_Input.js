/* global m_pGameMain */
/* global PosMouseX */

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
        
         var TempDataCollision = m_pGameMain.CollisionObjectPosition(m_pGameMain.gl_.Obj_["tank"]["x"],
         m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"], m_pGameMain.gl_.Obj_["tank"]["tx"],
         m_pGameMain.gl_.Obj_["tank"]["ty"], m_pGameMain.gl_.Obj_["tank"]["tz"]);
        
        m_pGameMain.gl_.Obj_["tank"]["y"] = TempDataCollision["PosY"];
        m_pGameMain.gl_.Obj_["tank"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["tank"]["tx"] = TempDataCollision["PosTX"];
        
        m_pGameMain.gl_.Obj_["tower"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"] + m_pGameMain.gl_.Obj_["tower"]["addx"];
        m_pGameMain.gl_.Obj_["tower"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"] + m_pGameMain.gl_.Obj_["tower"]["addy"];
        m_pGameMain.gl_.Obj_["tower"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"] + m_pGameMain.gl_.Obj_["tower"]["addz"];
        //m_pGameMain.gl_.Obj_["tower"]["tx"] = m_pGameMain.gl_.Obj_["tank"]["tx"] + m_pGameMain.gl_.Obj_["tower"]["addtx"];
        m_pGameMain.gl_.Obj_["tower"]["ty"] = m_pGameMain.gl_.Obj_["tank"]["ty"] + m_pGameMain.gl_.Obj_["tower"]["addty"];
        //m_pGameMain.gl_.Obj_["tower"]["tz"] = m_pGameMain.gl_.Obj_["tank"]["tz"] + m_pGameMain.gl_.Obj_["tower"]["addtz"];
        
         TempDataCollision = m_pGameMain.CollisionObjectPosition(m_pGameMain.gl_.Obj_["tower"]["x"],
         m_pGameMain.gl_.Obj_["tower"]["y"], m_pGameMain.gl_.Obj_["tower"]["z"], m_pGameMain.gl_.Obj_["tower"]["tx"],
         m_pGameMain.gl_.Obj_["tower"]["ty"], m_pGameMain.gl_.Obj_["tower"]["tz"]);
         
        m_pGameMain.gl_.Obj_["tower"]["y"] = TempDataCollision["PosY"] + m_pGameMain.gl_.Obj_["tower"]["addy"];
        m_pGameMain.gl_.Obj_["tower"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["tower"]["tx"] = TempDataCollision["PosTX"] + m_pGameMain.gl_.Obj_["tower"]["addtx"];
        
        m_pGameMain.gl_.Obj_["trunk"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"] + m_pGameMain.gl_.Obj_["trunk"]["addx"];
        m_pGameMain.gl_.Obj_["trunk"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"] + m_pGameMain.gl_.Obj_["trunk"]["addy"];
        m_pGameMain.gl_.Obj_["trunk"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"] + m_pGameMain.gl_.Obj_["trunk"]["addz"];
        //m_pGameMain.gl_.Obj_["trunk"]["tx"] = m_pGameMain.gl_.Obj_["tank"]["tx"] + m_pGameMain.gl_.Obj_["trunk"]["addtx"];
        m_pGameMain.gl_.Obj_["trunk"]["ty"] = m_pGameMain.gl_.Obj_["tank"]["ty"] + m_pGameMain.gl_.Obj_["trunk"]["addty"];
        //m_pGameMain.gl_.Obj_["trunk"]["tz"] = m_pGameMain.gl_.Obj_["tank"]["tz"] + m_pGameMain.gl_.Obj_["trunk"]["addtz"];
        
         TempDataCollision = m_pGameMain.CollisionObjectPosition(m_pGameMain.gl_.Obj_["trunk"]["x"],
         m_pGameMain.gl_.Obj_["trunk"]["y"], m_pGameMain.gl_.Obj_["trunk"]["z"], m_pGameMain.gl_.Obj_["trunk"]["tx"],
         m_pGameMain.gl_.Obj_["trunk"]["ty"], m_pGameMain.gl_.Obj_["trunk"]["tz"]);
         
        m_pGameMain.gl_.Obj_["trunk"]["y"] = TempDataCollision["PosY"] + m_pGameMain.gl_.Obj_["trunk"]["addy"];
        m_pGameMain.gl_.Obj_["trunk"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["trunk"]["tx"] = TempDataCollision["PosTX"] + m_pGameMain.gl_.Obj_["trunk"]["addtx"];
        
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
    
    function ClicShot(){
        
        m_pGameMain.gl_.Obj_["shar"]["z"] = m_pGameMain.gl_.Obj_["tower"]["z"];
        m_pGameMain.gl_.Obj_["shar"]["x"] = m_pGameMain.gl_.Obj_["tower"]["x"];
        m_pGameMain.gl_.Obj_["shar"]["y"] = m_pGameMain.gl_.Obj_["tower"]["y"] + 0.5;
        
        while(m_pGameMain.gl_.Obj_["shar"]["y"] > -10){
        
                m_pGameMain.gl_.Obj_["shar"]["z"] += Math.cos(m_pGameMain.gl_.Obj_["tower"]["ty"]) * 0.5;
                m_pGameMain.gl_.Obj_["shar"]["x"] += Math.sin(m_pGameMain.gl_.Obj_["tower"]["ty"]) * 0.5;

                if(m_pGameMain.gl_.Obj_["tower"]["x"] - m_pGameMain.gl_.Obj_["shar"]["x"] > 50 || m_pGameMain.gl_.Obj_["tower"]["x"] - m_pGameMain.gl_.Obj_["shar"]["x"] < -50 ||
                         m_pGameMain.gl_.Obj_["tower"]["z"] - m_pGameMain.gl_.Obj_["shar"]["z"] > 50 || m_pGameMain.gl_.Obj_["tower"]["z"] - m_pGameMain.gl_.Obj_["shar"]["z"] < -50){

                     m_pGameMain.gl_.Obj_["shar"]["y"] -= 0.2;
                     
                     if(m_pGameMain.CollisionShot(m_pGameMain.gl_.Obj_["shar"]["x"], m_pGameMain.gl_.Obj_["shar"]["y"], m_pGameMain.gl_.Obj_["shar"]["z"])){ break;}

                 }else{

                     m_pGameMain.gl_.Obj_["shar"]["y"] -= Math.sin(m_pGameMain.gl_.Obj_["trunk"]["tx"]) * 0.5;
                     
                     if(m_pGameMain.CollisionShot(m_pGameMain.gl_.Obj_["shar"]["x"], m_pGameMain.gl_.Obj_["shar"]["y"], m_pGameMain.gl_.Obj_["shar"]["z"])){ break;}
                 }

               }
        
        }   
    
    var tempshot = 0;
    function handleMouseClic(e){
       
       if(e.which == 1){
           
         ClicShot();
        
       }
       
    }


