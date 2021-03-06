/* global m_pGameMain */

var webSocket = new WebSocket('ws://127.0.0.1:9595');
 
webSocket.onopen = function(event) { alert('onopen'); };  
            
webSocket.onerror = function(event) { alert('Произошла ошибка');};
            
webSocket.onclose = function(event){ alert('Соединение закрыто...'); webSocket.close(); };
      
 function ButAuthClick() {
            var formlog_ = document.getElementById('idGameLoginForm').value;
            var formpass_ = document.getElementById('idGamePassForm').value;
            var OutFormArr = new Object();
            OutFormArr["Authorization"] = "Authorization";
            OutFormArr["FormLog"] = formlog_;
            OutFormArr["FormPass"] = formpass_;

            webSocket.send(JSON.stringify(OutFormArr));
}     

function SelectionServer(id){
   
    var ArrData = new Object();
   
    ArrData["SelectionServer"] = id;
    
    webSocket.send(JSON.stringify(ArrData));
}

function MoveUser(){
    
        var MoveArrData = new Object();
        MoveArrData["MoveArrDataUser"] ="MoveArrDataUser";
        MoveArrData["PosX"] = m_pGameMain.gl_.Obj_["tank"]["x"];
        MoveArrData["PosY"] = m_pGameMain.gl_.Obj_["tank"]["y"];
        MoveArrData["PosZ"] = m_pGameMain.gl_.Obj_["tank"]["z"];
        MoveArrData["PosTx"] = m_pGameMain.gl_.Obj_["tank"]["tx"];
        MoveArrData["PosTy"] = m_pGameMain.gl_.Obj_["tank"]["ty"];
        MoveArrData["PosTz"] = m_pGameMain.gl_.Obj_["tank"]["tz"];
        
        MoveArrData["TowerPosX"] = m_pGameMain.gl_.Obj_["tower"]["x"];
        MoveArrData["TowerPosY"] = m_pGameMain.gl_.Obj_["tower"]["y"];
        MoveArrData["TowerPosZ"] = m_pGameMain.gl_.Obj_["tower"]["z"];
        MoveArrData["TowerPosTx"] = m_pGameMain.gl_.Obj_["tower"]["tx"];
        MoveArrData["TowerPosTy"] = m_pGameMain.gl_.Obj_["tower"]["ty"];
        MoveArrData["TowerPosTz"] = m_pGameMain.gl_.Obj_["tower"]["tz"];
        
        MoveArrData["TrunkPosX"] = m_pGameMain.gl_.Obj_["trunk"]["x"];
        MoveArrData["TrunkPosY"] = m_pGameMain.gl_.Obj_["trunk"]["y"];
        MoveArrData["TrunkPosZ"] = m_pGameMain.gl_.Obj_["trunk"]["z"];
        MoveArrData["TrunkPosTx"] = m_pGameMain.gl_.Obj_["trunk"]["tx"];
        MoveArrData["TrunkPosTy"] = m_pGameMain.gl_.Obj_["trunk"]["ty"];
        MoveArrData["TrunkPosTz"] = m_pGameMain.gl_.Obj_["trunk"]["tz"];
        
        webSocket.send(JSON.stringify(MoveArrData));
}

function ShotTrue(IdSock){
    
    var ArrDataShotTrue = new Object();
    
    ArrDataShotTrue["DataShotTrue"] = "DataShotTrue";
    ArrDataShotTrue["IdSock"] = IdSock;
    ArrDataShotTrue["PosX"] = m_pGameMain.gl_.Obj_["tower"]["x"];
    ArrDataShotTrue["PosY"] = m_pGameMain.gl_.Obj_["tower"]["y"];
    ArrDataShotTrue["PosZ"] = m_pGameMain.gl_.Obj_["tower"]["z"];
    ArrDataShotTrue["PosTy"] = m_pGameMain.gl_.Obj_["tower"]["tx"];
    
    webSocket.send(JSON.stringify(ArrDataShotTrue));
}
      
function ClicDataShot(){
    
    var ArrDataClicShot = new Object();
    
    ArrDataClicShot["DataClicShot"] = "DataClicShot";
    
    ArrDataClicShot["BangTx"] = m_pGameMain.gl_.Obj_["Bang"]["tx"];
    ArrDataClicShot["BangTy"] = m_pGameMain.gl_.Obj_["Bang"]["ty"];
    ArrDataClicShot["BangTz"] = m_pGameMain.gl_.Obj_["Bang"]["tz"];
    ArrDataClicShot["BangX"] = m_pGameMain.gl_.Obj_["Bang"]["x"];
    ArrDataClicShot["BangY"] = m_pGameMain.gl_.Obj_["Bang"]["y"];
    ArrDataClicShot["BangZ"] = m_pGameMain.gl_.Obj_["Bang"]["z"];
    
    ArrDataClicShot["BigBangX"] = m_pGameMain.gl_.Obj_["BigBang"]["x"];
    ArrDataClicShot["BigBangY"] = m_pGameMain.gl_.Obj_["BigBang"]["y"];
    ArrDataClicShot["BigBangZ"] = m_pGameMain.gl_.Obj_["BigBang"]["z"];
    
    webSocket.send(JSON.stringify(ArrDataClicShot));
}   

function DataTextChat(){
    
    var DataText = "<span><span id='idTextName'>" + m_pGameMain.ThisUserName + " : </span> ";
    
    DataText += "<span id='idTextFull'>" + $("#idInputChat").val() + "</span></span> ";    

    DataText += "</br>";

    $('#idChat').append(DataText);
    
    var block = document.getElementById("idChat");
    block.scrollTop = block.scrollHeight;

    var ArrTextChat = new Object();

    ArrTextChat["InputTextChat"] = $("#idInputChat").val();
       
    webSocket.send(JSON.stringify(ArrTextChat));
       
    document.getElementById("idInputChat").value='';
    
    $("#idInputChat").hide();
}
      
webSocket.onmessage = function(event){
          
    var ArrData = $.parseJSON(event.data);
    
    if(typeof ArrData["ErrorLogin"] !=="undefined"){
        alert('Вы уже залогинились');
    }
    
    if(typeof ArrData["Authorization"] !=="undefined"){
    
        if(ArrData["Authorization"]){

            m_pGameMain.ThisUserName = ArrData["ThisUserName"];
                
            $("#idGameFormAuthorization").hide();

            $("#idGameNumberServer").show();
        }else{
            alert("Неверный логин или парроль");
        }
        
    }
     if(typeof ArrData["StatGameServer"] !== "undefined"){
        
        $("#idGameNumberServer").hide();
        
        $("#idChat").show();
        
        m_pGameMain.BlocMove = true;
        
        m_pGameMain.InitalizeNumberScene(ArrData["NumberMapa"]);
        
        
        
        m_pGameMain.InitalizeMapaCollision(m_pGameMain.ListMapaObject[ArrData["NumberMapa"]]["mapa"]);
        
        m_pGameMain.InitalizeObjectCollision(m_pGameMain.ListMapaObject[ArrData["NumberMapa"]]["Obj"]);
        
        m_pGameMain.gl_.Obj_["tank"]["x"] = ArrData["ThisPositionObject"]["PosX"];
        m_pGameMain.gl_.Obj_["tank"]["y"] = ArrData["ThisPositionObject"]["PosY"];
        m_pGameMain.gl_.Obj_["tank"]["z"] = ArrData["ThisPositionObject"]["PosZ"];
        
        NewObjectPosition();
        
        MoveUser();
        
            if(typeof ArrData["ArrayDataUsers"] !=="undefined"){

                for (var x in ArrData["ArrayDataUsers"]){
                    
                    m_pGameMain.NewUser(x, ArrData["ArrayDataUsers"][x]["IdSock"]);
                    
                    m_pGameMain.PositionsObject(x, ArrData["ArrayDataUsers"][x]["PosX"], ArrData["ArrayDataUsers"][x]["PosY"],
                    ArrData["ArrayDataUsers"][x]["PosZ"], ArrData["ArrayDataUsers"][x]["PosTx"], ArrData["ArrayDataUsers"][x]["PosTy"], 
                    ArrData["ArrayDataUsers"][x]["PosTz"]);
                    
                    m_pGameMain.PositionsObject(x + "tower", ArrData["ArrayDataUsers"][x]["TowerPosX"], ArrData["ArrayDataUsers"][x]["TowerPosY"],
                    ArrData["ArrayDataUsers"][x]["TowerPosZ"], ArrData["ArrayDataUsers"][x]["TowerPosTx"], ArrData["ArrayDataUsers"][x]["TowerPosTy"], 
                    ArrData["ArrayDataUsers"][x]["TowerPosTz"]);
                    
                    m_pGameMain.PositionsObject(x + "trunk", ArrData["ArrayDataUsers"][x]["TrunkPosX"], ArrData["ArrayDataUsers"][x]["TrunkPosY"],
                    ArrData["ArrayDataUsers"][x]["TrunkPosZ"], ArrData["ArrayDataUsers"][x]["TrunkPosTx"], ArrData["ArrayDataUsers"][x]["TrunkPosTy"], 
                    ArrData["ArrayDataUsers"][x]["TrunkPosTz"]);
                    
                }
            }
    }
    
     if(typeof ArrData["NewConectUser"] !== "undefined"){
        
        for (var x in ArrData["NewConectUserData"]){
                    
                    m_pGameMain.NewUser(x, ArrData["NewConectUserData"][x]["IdSock"]);
                    
                    m_pGameMain.PositionsObject(x, ArrData["NewConectUserData"][x]["PosX"], ArrData["NewConectUserData"][x]["PosY"],
                    ArrData["NewConectUserData"][x]["PosZ"], ArrData["NewConectUserData"][x]["PosTx"], ArrData["NewConectUserData"][x]["PosTy"], 
                    ArrData["NewConectUserData"][x]["PosTz"]);
                    
        }
      
     }
     
     if(typeof ArrData["MoveArrDataUser"] !== "undefined"){
      
        m_pGameMain.PositionsObject(ArrData["UserName"], ArrData["PosX"], ArrData["PosY"], 
        ArrData["PosZ"], ArrData["PosTx"], ArrData["PosTy"], ArrData["PosTz"]);
        
         m_pGameMain.PositionsObject(ArrData["UserName"] + "tower", ArrData["TowerPosX"], ArrData["TowerPosY"], 
        ArrData["TowerPosZ"], ArrData["TowerPosTx"], ArrData["TowerPosTy"], ArrData["TowerPosTz"]);
        
         m_pGameMain.PositionsObject(ArrData["UserName"] + "trunk", ArrData["TrunkPosX"], ArrData["TrunkPosY"], 
        ArrData["TrunkPosZ"], ArrData["TrunkPosTx"], ArrData["TrunkPosTy"], ArrData["TrunkPosTz"]);
      
     }
     
     if(typeof ArrData["DataShot"] !=="undefined"){
          
            if(typeof ArrData["NameUser"] !=="undefined"){
                
                m_pGameMain.gl_.Obj_[ArrData["NameUser"]]["hide"] = true;
                m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "tower"]["hide"] = true;
                m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "trunk"]["hide"] = true;
                
                m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "TankBang"]["x"] = m_pGameMain.gl_.Obj_[ArrData["NameUser"]]["x"]; 
                m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "TankBang"]["y"] = m_pGameMain.gl_.Obj_[ArrData["NameUser"]]["y"];
                m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "TankBang"]["z"] = m_pGameMain.gl_.Obj_[ArrData["NameUser"]]["z"];
                
                m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "TankBang"]["hide"] = false;
              
                setTimeout(function(){
                    fShotUser(ArrData["NameUser"]);
                    }, 500);

            }
            
            if(typeof ArrData["ThisNameUser"] !=="undefined"){
                
                m_pGameMain.gl_.Obj_["tank"]["hide"] = true;
                m_pGameMain.gl_.Obj_["tower"]["hide"] = true;
                m_pGameMain.gl_.Obj_["trunk"]["hide"] = true;
                
                m_pGameMain.gl_.Obj_["TankBang"]["x"] = m_pGameMain.gl_.Obj_["tank"]["x"]; 
                m_pGameMain.gl_.Obj_["TankBang"]["y"] = m_pGameMain.gl_.Obj_["tank"]["y"];
                m_pGameMain.gl_.Obj_["TankBang"]["z"] = m_pGameMain.gl_.Obj_["tank"]["z"];
                
                m_pGameMain.gl_.Obj_["TankBang"]["hide"] = false;


                var x = ArrData["ThisPositionObject"]["PosX"];
                var y = ArrData["ThisPositionObject"]["PosY"];
                var z = ArrData["ThisPositionObject"]["PosZ"];
                
                setTimeout(function(){
                    fShotThisUser(x, y, z);
                    }, 500);
                
            }
    
     }
     
     if(typeof ArrData["DeleteUser"] !=="undefined"){
    
        delete m_pGameMain.NameObjectUser[ArrData["DeleteUser"]];
        
        delete m_pGameMain.gl_.Obj_[ArrData["DeleteUser"]];
        
        delete m_pGameMain.gl_.Obj_[ArrData["DeleteUser"] + "tower"];
        
        delete m_pGameMain.gl_.Obj_[ArrData["DeleteUser"] + "trunk"];
    
     }
     
      if(typeof ArrData["ErrSelServer"] !=="undefined"){
    
        alert("Комната заполнена");
    
      }
     
     
     if(typeof ArrData["NewMapa"] !=="undefined"){
               
        
        m_pGameMain.InitalizeNumberScene(ArrData["NumberMapa"]);
        
        
        
        m_pGameMain.InitalizeMapaCollision(m_pGameMain.ListMapaObject[ArrData["NumberMapa"]]["mapa"]);
        
        m_pGameMain.InitalizeObjectCollision(m_pGameMain.ListMapaObject[ArrData["NumberMapa"]]["Obj"]);
        
        m_pGameMain.gl_.Obj_["tank"]["x"] = ArrData["ThisPositionObject"]["PosX"];
        m_pGameMain.gl_.Obj_["tank"]["y"] = ArrData["ThisPositionObject"]["PosY"];
        m_pGameMain.gl_.Obj_["tank"]["z"] = ArrData["ThisPositionObject"]["PosZ"];
        
        for (var x in ArrData["ListUsers"]){
         
            m_pGameMain.NewUser(x, ArrData["ListUsers"][x]);
        
        }
        
        NewObjectPosition();
        
        MoveUser();
       
    
      }
      
      
      if(typeof ArrData["ArrDataClicShot"] !=="undefined"){
            
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["ty"] = ArrData["BangTy"];
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["tz"] = ArrData["BangTz"];
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["tx"] = ArrData["BangTx"];

            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["z"] = ArrData["BangZ"];
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["x"] = ArrData["BangX"];
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["y"] = ArrData["BangY"];
            
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "BigBang"]["z"] = ArrData["BigBangZ"];
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "BigBang"]["x"] = ArrData["BigBangX"];
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "BigBang"]["y"] = ArrData["BigBangY"];
            
            m_pGameMain.gl_.Obj_[ArrData["NameUser"] + "Bang"]["hide"] = false;
               
             setTimeout(function(){
                    ClicBang(ArrData["NameUser"]);
                    }, 100);
            
      }
      
      
      if(typeof ArrData["OutTextChat"] !=="undefined"){
          
            var DataText = "<span><span id='idTextName'>" + ArrData["OutTextName"] + " : </span> ";
    
            DataText += "<span id='idTextFull'>" + ArrData["OutFullText"] + "</span></span> ";    

            DataText += "</br>";

            $('#idChat').append(DataText);

            var block = document.getElementById("idChat");
            block.scrollTop = block.scrollHeight;
          
      }
            
}

function fShotUser(nUser){
    
    m_pGameMain.gl_.Obj_[nUser + "TankBang"]["hide"] = true;
    
    m_pGameMain.gl_.Obj_[nUser]["hide"] = false;
    m_pGameMain.gl_.Obj_[nUser + "tower"]["hide"] = false;
    m_pGameMain.gl_.Obj_[nUser + "trunk"]["hide"] = false;
    
}

function fShotThisUser(x, y, z){
    
     m_pGameMain.gl_.Obj_["tank"]["x"] = x;
     m_pGameMain.gl_.Obj_["tank"]["y"] = y;
     m_pGameMain.gl_.Obj_["tank"]["z"] = z;
        
    m_pGameMain.gl_.Obj_["TankBang"]["hide"] = true;
    
    m_pGameMain.gl_.Obj_["tank"]["hide"] = false;
    m_pGameMain.gl_.Obj_["tower"]["hide"] = false;
    m_pGameMain.gl_.Obj_["trunk"]["hide"] = false;
        
        
    NewObjectPosition();
        
    MoveUser();
    
}

function ClicBang(nUser){
        
      m_pGameMain.gl_.Obj_[nUser + "Bang"]["hide"] = true;
         
      m_pGameMain.gl_.Obj_[nUser +"BigBang"]["hide"] = false;
    
            setTimeout(function(){
                    ClicBigBang(nUser);
                    }, 500);
                    
}

function ClicBigBang(nUser){
    
    m_pGameMain.gl_.Obj_[nUser + "BigBang"]["hide"] = true;
    
}