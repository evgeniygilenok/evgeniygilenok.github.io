

//                                  СОЗДАНИЕ БЛОКА ЗАДАЧИ

var button = document.querySelector('.button');
var input = document.querySelector('.polya');
var todo = document.querySelector('.todo');
var calcFirst = document.getElementById('first');
var calcSecond = document.getElementById('second');
var calcThird = document.getElementById('third');
button.onclick = createTask;
document.onkeydown = function () {if(event.keyCode == '13'){createTask()}};


function createTask () {
    var d=new Date();
  var info = input.value;
  if(checking(info)){
  var str = '<li class="box">\
        <a class="btn-floating btn-small waves-effect waves-light red button__done" ><i class="material-icons done">done</i></a>\
        <div class="data">'+d.getFullYear()+'.'+d.getMonth()+'.'+d.getDate()+'<br>'+d.getHours()+' : '+d.getMinutes()+'</div><p class="task__text inputEdit">'+' '+info+'</p>\
        <a class="btn-floating btn-small waves-effect waves-light red button__edit" ><i class="material-icons set" >mode_edit</i></a>\
        <a class="btn-floating btn-small waves-effect waves-light red button__delete" ><i class="material-icons delete">delete</i></a>\
        <a class="btn-floating btn-small waves-effect waves-light red button__save" ><i class="material-icons note_add">note_add</i></a>\
        <a class="btn-floating btn-small waves-effect waves-light red button__cancel" ><i class="material-icons cancel">not_interested</i></a>\
    </li>';
  calcFirst.innerHTML=  +calcFirst.innerHTML+ 1;
  calcThird.innerHTML=  +calcThird.innerHTML+ 1;
   todo.innerHTML= str +todo.innerHTML;
   input.value='';
  }
}
var oldtext='';

//                          БЛОК ЗАДАЧИ СОЗДАН
var dox=document.querySelector('.middle');
    dox.onclick=function () {
    var element=event.target;


    //                 !!!!!!!!!!!!!!! ШЕСТЕРЕНКА!!!!!
    if(element.className=="material-icons set"){
       element.parentNode.style.zIndex='1';
        element.parentNode.nextElementSibling.style.zIndex='1';
        oldtext=element.parentNode.previousElementSibling.innerHTML;
        element.parentNode.previousElementSibling.setAttribute("contenteditable", true);
        element.parentNode.previousElementSibling.style = 'border: 2px solid yellow;border-radius: 5px;'
    }



    //                          !!!!!!!!!!!!УДАЛЕНИЕ!!!!!!!!!!!!!!!!
    if(element.className=='material-icons delete'){
        if (element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('red')){
        element.parentNode.parentNode.remove();
        calcFirst.innerHTML=  +calcFirst.innerHTML- 1;
        calcThird.innerHTML=  +calcThird.innerHTML- 1;
        }else {
            element.parentNode.parentNode.remove();
            calcFirst.innerHTML=  +calcFirst.innerHTML- 1;
            calcSecond.innerHTML=  +calcSecond.innerHTML- 1;
        }
    }

    if(element.className=='material-icons note_add'){
        element.parentNode.previousElementSibling.style.zIndex='2';
        element.parentNode.previousElementSibling.previousElementSibling.style.zIndex='2';
        element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.setAttribute("contenteditable", false);
        element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.style = 'border: 2px solid transparent;border-radius: 5px;'
    }
    if(element.className=='material-icons cancel'){
        element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=oldtext;
        element.parentNode.previousElementSibling.previousElementSibling.style.zIndex='2';
        element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.style.zIndex='2';
        element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.setAttribute("contenteditable", false);
        element.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = 'border: 2px solid transparent;border-radius: 5px;'
    }

        if(element.className=='material-icons done'){
             if(element.parentNode.classList.contains('red')){
                element.parentNode.classList.remove('red');
                element.parentNode.classList.add('green');
                calcSecond.innerHTML=  +calcSecond.innerHTML+ 1;
                calcThird.innerHTML=  +calcThird.innerHTML- 1;
                element.parentNode.nextElementSibling.nextElementSibling.style.textDecoration='line-through';
             }else {
                element.parentNode.classList.remove('green');
                element.parentNode.classList.add('red');
                calcSecond.innerHTML=  +calcSecond.innerHTML- 1;
                calcThird.innerHTML=  +calcThird.innerHTML+ 1;
                element.parentNode.nextElementSibling.nextElementSibling.style.textDecoration='none';
             }
        }
}


//  Проверка 
function checking (a) {
    if (a ==='') {
       return false;
    }
     if (a ===' ') {
        return false;
    }
    return true;
}