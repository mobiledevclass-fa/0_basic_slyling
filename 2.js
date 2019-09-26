window.onload = function() {
 
 var todoList2 = []; 
 
 if(localStorage.getItem('todo2') !=undefined) {
  todoList2 = JSON.parse(localStorage.getItem('todo2'));
  out2();
 }
 
 document.getElementById('add2').onclick = function() {
  var d2 = document.getElementById('in2').value; // получаем введенное значение из input
  var temp2 = {}; // промежуточный массив
  temp2.todo2 = d2; // добавляем новое дело  
  temp2.check = false;
  var i2 = todoList2.length;
  todoList2[i2] = temp2;
  console.log(todoList2);
  out2();
  localStorage.setItem('todo2', JSON.stringify(todoList2)); // Метод JSON.stringify() преобразует значение JavaScript в строку JSON.
  
 }
 
 function out2() {
  var out2 = '';  
  for (var key2 in todoList2) {   
   out2 += '<li>' + todoList2[key2].todo2 + '<hr>';   
  }
  
  document.getElementById('out2').innerHTML = out2;
 } 
 
}

