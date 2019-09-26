window.onload = function() {
 
 var todoList4 = []; 
 
 if(localStorage.getItem('todo4') !=undefined) {
  todoList4 = JSON.parse(localStorage.getItem('todo4'));
  out4();
 }
 
 document.getElementById('add4').onclick = function() {
  var d4 = document.getElementById('in4').value; // получаем введенное значение из input
  var temp4 = {}; // промежуточный массив
  temp4.todo4 = d4; // добавляем новое дело  
  temp4.check = false;
  var i4 = todoList4.length;
  todoList4[i4] = temp4;
  console.log(todoList4);
  out4();
  localStorage.setItem('todo4', JSON.stringify(todoList4)); // Метод JSON.stringify() преобразует значение JavaScript в строку JSON.
  
 }
 
 function out4() {
  var out4 = '';  
  for (var key4 in todoList4) {   
   out4 += '<li>' + todoList4[key4].todo4 + '<hr>';   
  }
  
  document.getElementById('out4').innerHTML = out4;
 } 
 
}

