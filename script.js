var dot = document.getElementById('dot') ;
var list = document.querySelector("ul");
const storedStorage= localStorage.getItem('list');

function myFunction(num , cleanDot){
  document.form.placeholder.value= document.form.placeholder.value +num 
  document.getElementById('dot').disabled = false;
  if(!cleanDot){
   document.getElementById('dot').disabled = true;
   return;
  }
  
}

function addNumbers(num){
  document.form.placeholder.value= document.form.placeholder.value +num 
  
}
if(storedStorage){
  list.innerHTML = storedStorage

}
function equal(){
  document.getElementById('dot').disabled = false 
  let val = document.form.placeholder.value;
  let firstList = document.createElement('li');
  let secondList = document.createElement('p')
  var inputValue= document.form.placeholder.value;
  var secondValue =  eval(val)
  var t = document.createTextNode(inputValue);
  var x = document.createTextNode("=")
  var c = document.createTextNode(secondValue)
  firstList.appendChild(t);  
  secondList.appendChild(x);
  secondList.appendChild(c);

  if(val){
    document.form.placeholder.value = eval(val)
  }
  document.getElementById('list').appendChild(firstList);
  document.getElementById('list').appendChild(secondList);
  localStorage.setItem('list',list.innerHTML)
console.log(list.outerText)
}


document.getElementById("list").addEventListener("click",function(e) {
  if(e.target && e.target.nodeName == "LI") {
      console.log(e.target.outerText+ " was clicked");
      document.form.placeholder.value= e.target.outerText
  }
});


function clean(){
  document.form.placeholder.value = ""
}


function back(){
  let exp=document.form.placeholder.value;
  document.form.placeholder.value = exp.substring(0,exp.length-1);
  if (exp.substring(exp.length-1) == "."){
    document.getElementById('dot').disabled = false
  }
}
function cleanHistory() {
  localStorage.clear('list')
  list.innerHTML=""
}


$('form').submit(false);


document.addEventListener("keyup", function(event) {
  if (event.which === 13 || event.which === 144) {
    equal()
  }
  if (event.which === 49  || event.which === 97) {
      addNumbers(1)
     
  }
  if (event.which === 50 || event.which === 98) {
    addNumbers(2)
   
}
if (event.which === 51 || event.which === 99) {
  addNumbers(3)
 
}
if (event.which === 52 || event.which === 100) {
  addNumbers(4)
 
}
if (event.which === 53 || event.which === 101) {
  addNumbers(5)
 
}
if (event.which === 54 || event.which === 102) {
  addNumbers(6)
 
}
if (event.which === 55 || event.which === 103) {
  addNumbers(7)
 
}
if (event.which === 56 || event.which === 104) {
  addNumbers(8)
 
}
if (event.which === 57 || event.which === 105) {
  addNumbers(9)
 
}
if (event.which === 48 || event.which === 96) {
  addNumbers(0)
 
}

if (event.which === 190 || event.which === 110) {
  myFunction('.', false)
  document.getElementById('dot').disabled = true;
  
}
if (event.which === 107) {
  myFunction('+', true) 
}
if (event.which === 109) {
  myFunction('-', true) 
}

if (event.which === 106) {
  myFunction('*', true) 
}

if (event.which === 111) {
  myFunction('/', true) 
}

if (event.which === 8) {
  back()
}

if (event.which === 67) {
  clean()
}


});







