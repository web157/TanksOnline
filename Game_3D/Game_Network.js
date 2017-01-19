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
      
      
webSocket.onmessage = function(event){
    
    
    
    var Arrsen = $.parseJSON(event.data);
    
        
       alert(Arrsen); 
};

