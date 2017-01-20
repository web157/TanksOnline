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
      
      
webSocket.onmessage = function(event){
    
    
    
    var ArrData = $.parseJSON(event.data);
    
    if(typeof ArrData["Authorization"] !=="undefined"){
    
        if(ArrData["Authorization"]){

            $("#idGameFormAuthorization").hide();

            $("#idGameNumberServer").show();
        }else{
            alert("Неверный логин или парроль");
        }
        
    }
     if(typeof ArrData["StatGameServer"] !== "undefined"){
        
        m_pGameMain.InitalizeNumberScene(ArrData["NumberMapa"]);
    }
    
        
       //alert(ArrData); 
      // m_pGameMain.InitalizeNumberScene(ArrData);
};

