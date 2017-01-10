var webSocket = new WebSocket('ws://127.0.0.1:9595');
 
webSocket.onopen = function(event) { alert('onopen'); };  
            
webSocket.onerror = function(event) { alert('Произошла ошибка');};
            
webSocket.onclose = function(event){ alert('Соединение закрыто...'); webSocket.close(); };
      

