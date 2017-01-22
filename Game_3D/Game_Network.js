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
        MoveArrData["PosX"] = m_pGameMain.gl_.Obj_["car"]["x"];
        MoveArrData["PosY"] = m_pGameMain.gl_.Obj_["car"]["y"];
        MoveArrData["PosZ"] = m_pGameMain.gl_.Obj_["car"]["z"];
        MoveArrData["PosTx"] = m_pGameMain.gl_.Obj_["car"]["tx"];
        MoveArrData["PosTy"] = m_pGameMain.gl_.Obj_["car"]["ty"];
        MoveArrData["PosTz"] = m_pGameMain.gl_.Obj_["car"]["tz"];
        
        webSocket.send(JSON.stringify(MoveArrData));
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
        
        m_pGameMain.InitalizeNumberScene(ArrData["NumberMapa"]);
        
            if(typeof ArrData["ArrayDataUsers"] !=="undefined"){

                for (var x in ArrData["ArrayDataUsers"]){
                    
                    m_pGameMain.NewUser(x);
                    
                    m_pGameMain.PositionsObject(x, ArrData["ArrayDataUsers"][x]["PosX"], ArrData["ArrayDataUsers"][x]["PosY"],
                    ArrData["ArrayDataUsers"][x]["PosZ"], ArrData["ArrayDataUsers"][x]["PosTx"], ArrData["ArrayDataUsers"][x]["PosTy"], 
                    ArrData["ArrayDataUsers"][x]["PosTz"]);
                    
                }
            }
    }
    
     if(typeof ArrData["NewConectUser"] !== "undefined"){
        
        for (var x in ArrData["NewConectUserData"]){
                    
                    m_pGameMain.NewUser(x);
                    
                    m_pGameMain.PositionsObject(x, ArrData["NewConectUserData"][x]["PosX"], ArrData["NewConectUserData"][x]["PosY"],
                    ArrData["NewConectUserData"][x]["PosZ"], ArrData["NewConectUserData"][x]["PosTx"], ArrData["NewConectUserData"][x]["PosTy"], 
                    ArrData["NewConectUserData"][x]["PosTz"]);
                    
        }
      
     }
     
     if(typeof ArrData["MoveArrDataUser"] !== "undefined"){
      
        m_pGameMain.PositionsObject(ArrData["UserName"], ArrData["PosX"], ArrData["PosY"], 
        ArrData["PosZ"], ArrData["PosTx"], ArrData["PosTy"], ArrData["PosTz"]);
      
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

