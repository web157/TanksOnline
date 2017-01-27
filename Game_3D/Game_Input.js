/* global m_pGameMain */
/* global PosMouseX, ResDate */

function NewObjectPosition()
{
     var TempDataCollision = m_pGameMain.CollisionMapaPosition(m_pGameMain.gl_.Obj_["tank"]["x"],
         m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"], m_pGameMain.gl_.Obj_["tank"]["tx"],
         m_pGameMain.gl_.Obj_["tank"]["ty"], m_pGameMain.gl_.Obj_["tank"]["tz"]);
        
        m_pGameMain.gl_.Obj_["tank"]["y"] = TempDataCollision["PosY"];
        m_pGameMain.gl_.Obj_["tank"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["tank"]["tx"] = TempDataCollision["PosTX"];
        
         var TempDataCollision1 = m_pGameMain.CollisionObjectsPosition(m_pGameMain.gl_.Obj_["tank"]["x"],
         m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"], m_pGameMain.gl_.Obj_["tank"]["tx"],
         m_pGameMain.gl_.Obj_["tank"]["ty"], m_pGameMain.gl_.Obj_["tank"]["tz"]);
        
        m_pGameMain.gl_.Obj_["tank"]["x"] = TempDataCollision1["PosX"];
        m_pGameMain.gl_.Obj_["tank"]["z"] = TempDataCollision1["PosZ"];      
        
        m_pGameMain.gl_.Obj_["tower"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"] + m_pGameMain.gl_.Obj_["tower"]["addx"];
        m_pGameMain.gl_.Obj_["tower"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"] + m_pGameMain.gl_.Obj_["tower"]["addy"];
        m_pGameMain.gl_.Obj_["tower"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"] + m_pGameMain.gl_.Obj_["tower"]["addz"];
        //m_pGameMain.gl_.Obj_["tower"]["tx"] = m_pGameMain.gl_.Obj_["tank"]["tx"] + m_pGameMain.gl_.Obj_["tower"]["addtx"];
        m_pGameMain.gl_.Obj_["tower"]["ty"] = m_pGameMain.gl_.Obj_["tank"]["ty"] + m_pGameMain.gl_.Obj_["tower"]["addty"];
        //m_pGameMain.gl_.Obj_["tower"]["tz"] = m_pGameMain.gl_.Obj_["tank"]["tz"] + m_pGameMain.gl_.Obj_["tower"]["addtz"];
        
         TempDataCollision = m_pGameMain.CollisionMapaPosition(m_pGameMain.gl_.Obj_["tower"]["x"],
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
        
         TempDataCollision = m_pGameMain.CollisionMapaPosition(m_pGameMain.gl_.Obj_["trunk"]["x"],
         m_pGameMain.gl_.Obj_["trunk"]["y"], m_pGameMain.gl_.Obj_["trunk"]["z"], m_pGameMain.gl_.Obj_["trunk"]["tx"],
         m_pGameMain.gl_.Obj_["trunk"]["ty"], m_pGameMain.gl_.Obj_["trunk"]["tz"]);
         
        m_pGameMain.gl_.Obj_["trunk"]["y"] = TempDataCollision["PosY"] + m_pGameMain.gl_.Obj_["trunk"]["addy"];
        m_pGameMain.gl_.Obj_["trunk"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["trunk"]["tx"] = TempDataCollision["PosTX"] + m_pGameMain.gl_.Obj_["trunk"]["addtx"];
        
}

function handleKeyDown(e){
    
    if(m_pGameMain.BlocMove){
    //alert(ResDate);
        switch(e.keyCode)
        {
            case 65: 
               m_pGameMain.gl_.Obj_["tank"]["ty"] += 0.05 * (ResDate + 2);
                break;
            case 68:  
             m_pGameMain.gl_.Obj_["tank"]["ty"] -= 0.05 * (ResDate + 2);
                break;
            case 87:  
               m_pGameMain.gl_.Obj_["tank"]["z"] += Math.cos(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.3 * (ResDate + 2);
               m_pGameMain.gl_.Obj_["tank"]["x"] += Math.sin(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.3 * (ResDate + 2);
                break;
            case 83:  
               m_pGameMain.gl_.Obj_["tank"]["z"] -= Math.cos(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.3 * (ResDate + 2);
               m_pGameMain.gl_.Obj_["tank"]["x"] -= Math.sin(m_pGameMain.gl_.Obj_["tank"]["ty"]) * 0.3 * (ResDate + 2);
                break;
            case 81:
                m_pGameMain.gl_.Obj_["tower"]["addty"] += 0.05 * (ResDate + 2);
                m_pGameMain.gl_.Obj_["trunk"]["addty"] = m_pGameMain.gl_.Obj_["tower"]["addty"];
                break;
            case 69:
                m_pGameMain.gl_.Obj_["tower"]["addty"] -= 0.05 * (ResDate + 2);
                m_pGameMain.gl_.Obj_["trunk"]["addty"] = m_pGameMain.gl_.Obj_["tower"]["addty"];
                break;
            case 82:
                if(m_pGameMain.gl_.Obj_["trunk"]["addtx"] > -0.5){
                    m_pGameMain.gl_.Obj_["trunk"]["addtx"] -= 0.02 * (ResDate + 2);
                }
                break;
            case 70:
                if(m_pGameMain.gl_.Obj_["trunk"]["addtx"] < 0){
                    m_pGameMain.gl_.Obj_["trunk"]["addtx"] += 0.02 * (ResDate + 2);
                }
                break;    
        }
        /*
         var TempDataCollision = m_pGameMain.CollisionMapaPosition(m_pGameMain.gl_.Obj_["tank"]["x"],
         m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"], m_pGameMain.gl_.Obj_["tank"]["tx"],
         m_pGameMain.gl_.Obj_["tank"]["ty"], m_pGameMain.gl_.Obj_["tank"]["tz"]);
        
        m_pGameMain.gl_.Obj_["tank"]["y"] = TempDataCollision["PosY"];
        m_pGameMain.gl_.Obj_["tank"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["tank"]["tx"] = TempDataCollision["PosTX"];
        
         var TempDataCollision1 = m_pGameMain.CollisionObjectsPosition(m_pGameMain.gl_.Obj_["tank"]["x"],
         m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"], m_pGameMain.gl_.Obj_["tank"]["tx"],
         m_pGameMain.gl_.Obj_["tank"]["ty"], m_pGameMain.gl_.Obj_["tank"]["tz"]);
        
        m_pGameMain.gl_.Obj_["tank"]["x"] = TempDataCollision1["PosX"];
        m_pGameMain.gl_.Obj_["tank"]["z"] = TempDataCollision1["PosZ"];      
        
        m_pGameMain.gl_.Obj_["tower"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"] + m_pGameMain.gl_.Obj_["tower"]["addx"];
        m_pGameMain.gl_.Obj_["tower"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"] + m_pGameMain.gl_.Obj_["tower"]["addy"];
        m_pGameMain.gl_.Obj_["tower"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"] + m_pGameMain.gl_.Obj_["tower"]["addz"];
        //m_pGameMain.gl_.Obj_["tower"]["tx"] = m_pGameMain.gl_.Obj_["tank"]["tx"] + m_pGameMain.gl_.Obj_["tower"]["addtx"];
        m_pGameMain.gl_.Obj_["tower"]["ty"] = m_pGameMain.gl_.Obj_["tank"]["ty"] + m_pGameMain.gl_.Obj_["tower"]["addty"];
        //m_pGameMain.gl_.Obj_["tower"]["tz"] = m_pGameMain.gl_.Obj_["tank"]["tz"] + m_pGameMain.gl_.Obj_["tower"]["addtz"];
        
         TempDataCollision = m_pGameMain.CollisionMapaPosition(m_pGameMain.gl_.Obj_["tower"]["x"],
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
        
         TempDataCollision = m_pGameMain.CollisionMapaPosition(m_pGameMain.gl_.Obj_["trunk"]["x"],
         m_pGameMain.gl_.Obj_["trunk"]["y"], m_pGameMain.gl_.Obj_["trunk"]["z"], m_pGameMain.gl_.Obj_["trunk"]["tx"],
         m_pGameMain.gl_.Obj_["trunk"]["ty"], m_pGameMain.gl_.Obj_["trunk"]["tz"]);
         
        m_pGameMain.gl_.Obj_["trunk"]["y"] = TempDataCollision["PosY"] + m_pGameMain.gl_.Obj_["trunk"]["addy"];
        m_pGameMain.gl_.Obj_["trunk"]["tz"] = TempDataCollision["PosTZ"];
        m_pGameMain.gl_.Obj_["trunk"]["tx"] = TempDataCollision["PosTX"] + m_pGameMain.gl_.Obj_["trunk"]["addtx"];
        */
       NewObjectPosition();
       
        MoveUser();  
        
        }
    }
       
    var tempX = 0;
    var tempY = 0;
    var MouseRadius = 30;

    var ugol = 3.14 / 2;
    var ugol2 = 0;
    
    function handleMouseDown(e){
        
        //if(m_pGameMain.BlocMove){
        
        /*
            temp = e.clientX;
              if(temp > temp1){ PosMouseX+=0.05; }
              if(temp < temp1){ PosMouseX-=0.05; }
            temp1 = temp;    
        */
      // var TempPosCamX = ResPosCamX;
      // var TempPosCamZ = ResPosCamZ;
       
       if (e.clientY > tempY){
			
                if (ugol >= 0.3){
                        ugol += 0.01 * (ResDate + 2);//e.clientY - tempY;
                        if (ugol < 0.3){ ugol = 0.3; }
                        if (ugol > 3.0){ ugol = 3.0; }
                        ResPosCamZ = (-MouseRadius * Math.sin(ugol) * Math.cos(ugol2));
                        ResPosCamX = (MouseRadius * Math.sin(ugol) * Math.sin(ugol2));
                        ResPosCamY = (MouseRadius * Math.cos(ugol));
                }

	}

             

	if (e.clientY < tempY){
			
                if (ugol <= 3.0){
                            ugol -= 0.01 * (ResDate + 2);// e.clientY - tempY;
                            if (ugol > 3.0){ ugol = 3.0; }
                            if (ugol < 0.3){ ugol = 0.3; }
                            ResPosCamZ = (-MouseRadius * Math.sin(ugol) * Math.cos(ugol2));
                            ResPosCamX = (MouseRadius * Math.sin(ugol) * Math.sin(ugol2));
                            ResPosCamY = (MouseRadius * Math.cos(ugol));
                }

	}       
        
        if (e.clientX > tempX){
			
                ugol2 -= 0.01 * (ResDate + 2);
                ResPosCamZ = (-MouseRadius * Math.sin(ugol) * Math.cos(ugol2));
                ResPosCamX = (MouseRadius * Math.sin(ugol) * Math.sin(ugol2));
                ResPosCamY = (MouseRadius * Math.cos(ugol));

		}

        if (e.clientX < tempX){

                ugol2 += 0.01 * (ResDate + 2);
                ResPosCamZ = (-MouseRadius * Math.sin(ugol) * Math.cos(ugol2));
                ResPosCamX = (MouseRadius * Math.sin(ugol) * Math.sin(ugol2));
                ResPosCamY = (MouseRadius * Math.cos(ugol));

        }
       
        tempY = e.clientY;
        tempX = e.clientX;
        
        var CamRes = m_pGameMain.CollisionPosCamera(m_pGameMain.gl_.Obj_["tank"]["x"] + ResPosCamX, m_pGameMain.gl_.Obj_["tank"]["y"] + ResPosCamY, m_pGameMain.gl_.Obj_["tank"]["z"] + ResPosCamZ);        
        
        if(CamRes > m_pGameMain.gl_.Obj_["tank"]["y"] + ResPosCamY){
            
            ResPosCamY = CamRes;
            
        }
        
        var CamDataRes = m_pGameMain.CollisionPosObjectCamera(ResPosCamX, ResPosCamY, ResPosCamZ, 
        m_pGameMain.gl_.Obj_["tank"]["x"], m_pGameMain.gl_.Obj_["tank"]["y"], m_pGameMain.gl_.Obj_["tank"]["z"]);        
        
        ResPosCamX = CamDataRes["PosX"];
        ResPosCamZ = CamDataRes["PosZ"];
        
        
        //}
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

///////////////////////////////////////
////////////////////////////////////////
                     for (var key in m_pGameMain.NameObjectUser){
                         
                                var XDiff;
				var YDiff;
				var ZDiff;

				var Distance;

				var XCenter1;
				var YCenter1;
				var ZCenter1;

				var XCenter2;
				var YCenter2;
				var ZCenter2;

				var Radius1;




				XCenter1 = m_pGameMain.gl_.Obj_["shar"]["x"];
				YCenter1 = m_pGameMain.gl_.Obj_["shar"]["y"];
				ZCenter1 = m_pGameMain.gl_.Obj_["shar"]["z"];

				XCenter2 = m_pGameMain.gl_.Obj_[key]["x"];
				YCenter2 = m_pGameMain.gl_.Obj_[key]["y"];
				ZCenter2 = m_pGameMain.gl_.Obj_[key]["z"];

				Radius1 = 2;


				XDiff = Math.abs(XCenter2 - XCenter1);
				YDiff = Math.abs(YCenter2 - YCenter1);
				ZDiff = Math.abs(ZCenter2 - ZCenter1);
				Distance = Math.sqrt(XDiff*XDiff + YDiff*YDiff + ZDiff*ZDiff);

				
				if (Distance <= Radius1){
					
                                        //alert(m_pGameMain.NameObjectUser[key]);
					ShotTrue(m_pGameMain.NameObjectUser[key]);
                                        
					return;
					
				}
          
                     }
///////////////////////////////////////////////
////////////////////////////////////////////
                 }else{

                     m_pGameMain.gl_.Obj_["shar"]["y"] -= Math.sin(m_pGameMain.gl_.Obj_["trunk"]["tx"]) * 0.5;
                     
                     if(m_pGameMain.CollisionShot(m_pGameMain.gl_.Obj_["shar"]["x"], m_pGameMain.gl_.Obj_["shar"]["y"], m_pGameMain.gl_.Obj_["shar"]["z"])){ break;}
                     
                     ///////////////////////////////////////
////////////////////////////////////////
                     for (var key in m_pGameMain.NameObjectUser){
                         
                                var XDiff;
				var YDiff;
				var ZDiff;

				var Distance;

				var XCenter1;
				var YCenter1;
				var ZCenter1;

				var XCenter2;
				var YCenter2;
				var ZCenter2;

				var Radius1;




				XCenter1 = m_pGameMain.gl_.Obj_["shar"]["x"];
				YCenter1 = m_pGameMain.gl_.Obj_["shar"]["y"];
				ZCenter1 = m_pGameMain.gl_.Obj_["shar"]["z"];

				XCenter2 = m_pGameMain.gl_.Obj_[key]["x"];
				YCenter2 = m_pGameMain.gl_.Obj_[key]["y"];
				ZCenter2 = m_pGameMain.gl_.Obj_[key]["z"];

				Radius1 = 2;


				XDiff = Math.abs(XCenter2 - XCenter1);
				YDiff = Math.abs(YCenter2 - YCenter1);
				ZDiff = Math.abs(ZCenter2 - ZCenter1);
				Distance = Math.sqrt(XDiff*XDiff + YDiff*YDiff + ZDiff*ZDiff);

				 
				if (Distance <= Radius1){
					
                                        //alert(m_pGameMain.NameObjectUser[key]);
					ShotTrue(m_pGameMain.NameObjectUser[key]);
                                        
					return;
					
				}
          
                     }
///////////////////////////////////////////////
////////////////////////////////////////////

                 }

               }
        
        }   
    
    var tempshot = 0;
    function handleMouseClic(e){
       
       if(e.which == 1){
           
           if(m_pGameMain.BlocMove){
           
                ClicShot();
                
           }
        
       }
       
    }


