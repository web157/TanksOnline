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
      
      
webSocket.onmessage = function(event){
          
    var ArrData = $.parseJSON(event.data);
    
    if(typeof ArrData["ErrorLogin"] !=="undefined"){
        alert('Вы уже залогинились');
    }
    
    if(typeof ArrData["Authorization"] !=="undefined"){
    
        if(ArrData["Authorization"]){

            $("#idGameFormAuthorization").hide();

            $("#idGameNumberServer").show();
        }else{
            alert("Неверный логин или парроль");
        }
        
    }
     if(typeof ArrData["StatGameServer"] !== "undefined"){
        
        $("#idGameNumberServer").hide();
        
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
    
        m_pGameMain.gl_.Obj_["tank"]["x"] = ArrData["ThisPositionObject"]["PosX"];
        m_pGameMain.gl_.Obj_["tank"]["y"] = ArrData["ThisPositionObject"]["PosY"];
        m_pGameMain.gl_.Obj_["tank"]["z"] = ArrData["ThisPositionObject"]["PosZ"];
        
        NewObjectPosition();
        
        MoveUser();
    
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
    
    
        //m_pGameMain.ListMapaObject = [];
        
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
        /*
        if(typeof ArrData["ArrayDataUsers"] !=="undefined"){
    
            for (var x in ArrData["ArrayDataUsers"]){
                alert(ArrData["ArrayDataUsers"][x]["PosX"]);
            }
       
        }
        */
      // m_pGameMain.InitalizeNumberScene(ArrData);
};

