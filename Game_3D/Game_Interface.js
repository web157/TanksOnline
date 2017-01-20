window.div = document.createElement('div');
div.id = "idGameFormAuthorization";
document.body.appendChild(div);

var text = document.createElement('p5');
text.innerHTML = "Логин";
text.id = "idGameLoginText";
div.appendChild(text);

var input=document.createElement('input');
input.type = 'text';
input.name = 'Login';
input.id = 'idGameLoginForm';
div.appendChild(input);

text = document.createElement('p5');
text.innerHTML = "Пароль";
text.id = "idGamePassText";
div.appendChild(text);

input=document.createElement('input');
input.type = 'password';
input.name = 'Pass';
input.id = 'idGamePassForm';
div.appendChild(input);

input=document.createElement('input');
input.type = 'submit';
input.name = 'submit';
input.value = 'Вход';
input.setAttribute("onclick", "ButAuthClick();");
input.id = 'idGameButtonInput';
div.appendChild(input);

