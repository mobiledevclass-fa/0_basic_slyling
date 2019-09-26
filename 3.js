window.onload = function() {
 
 var todoList3 = []; 
 
 if(localStorage.getItem('todo3') !=undefined) {
  todoList3 = JSON.parse(localStorage.getItem('todo3'));
  out3();
 }
 
 document.getElementById('add3').onclick = function() {
  var d3 = document.getElementById('in3').value; // получаем введенное значение из input
  var temp3 = {}; // промежуточный массив
  temp3.todo3 = d3; // добавляем новое дело  
  temp3.check = false;
  var i3 = todoList3.length;
  todoList3[i3] = temp3;
  console.log(todoList3);
  out3();
  localStorage.setItem('todo3', JSON.stringify(todoList3)); // Метод JSON.stringify() преобразует значение JavaScript в строку JSON.
  
 }
 
 function out3() {
  var out3 = '';  
  for (var key3 in todoList3) {   
   out3 += '<li>' + todoList3[key3].todo3 + '<hr>';   
  }
  
  document.getElementById('out3').innerHTML = out3;
 } 
 
}

