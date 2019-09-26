window.onload = function() {
 
 var todoList = []; 
 
 if(localStorage.getItem('todo') !=undefined) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  out();
 }
 
 document.getElementById('add').onclick = function() {
  var d = document.getElementById('in').value; // получаем введенное значение из input
  var temp = {}; // промежуточный массив
  temp.todo = d; // добавляем новое дело  
  temp.check = false;
  var i = todoList.length;
  todoList[i] = temp;
  console.log(todoList);
  out();
  localStorage.setItem('todo', JSON.stringify(todoList)); // Метод JSON.stringify() преобразует значение JavaScript в строку JSON.
  
   localStorage.removeItem("Ok11");
   localStorage.removeItem("Ok22");
  
 }
 
 function out() {
  var out = '';  
  for (var key in todoList) {   
   out +='<li>' + todoList[key].todo + '<hr>';   
  }
  
  document.getElementById('out').innerHTML = out;
 } 
 
 
 
}

