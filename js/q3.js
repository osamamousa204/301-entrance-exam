'use strict';

///////////////current date\\\\\\\\\\\\\

var currentDate = document.getElementById('currentDate');
var myDate = new Date();
var x = `${myDate.getMonth() + 1} ${myDate.getDate()}    ${myDate.getFullYear()}`;
currentDate.innerHTML = x;

/////////creating constructor\\\\\\\\\\

function MyTasks (task , dateOftask){
    this.task = task;
    this.dateOftask = dateOftask;
    MyTasks.all.push(this);
}
MyTasks.all = [];

///////////get the form and the section\\\\\\\\\\\

var containerOfResult = document.getElementById('resultOftasks');
var myFormTask = document.getElementById('myTasks');

///////////adding event listener to my form \\\\\\\\\\\

myFormTask.addEventListener('submit',creatTasks);

function creatTasks (event){
    event.preventDefault();
    var userTask = event.target.usertask.value;
    var userdate = event.target.userdate.value;
    new MyTasks(userTask, userdate);

    uplodeTasks();
    
    getTasks();
    
}
 /////////////////dding to llocal storage\\\\\\\\\\\\\\

function uplodeTasks (){
    var allTasks = JSON.stringify(MyTasks.all);
    localStorage.setItem('userTasks',allTasks)

}

/////////////////////function runder the result on in the section\\\\\\\\\\\\\\\\\\\\\

function runderResult (){
    var muList = document.createElement('ol');
    containerOfResult.appendChild(muList)
for (var j = 0 ; j < MyTasks.all.length ; j++){
    var muLi = document.createElement('li');
    muList.appendChild(muLi);
    var taskName = document.createElement('p');
    muLi.appendChild(taskName);
    taskName.textContent = `${MyTasks.all[j].task}`;
    var taskDate = document.createElement('div');
    muLi.appendChild(taskDate);
    
    taskDate.textContent = `${MyTasks.all[j].dateOftask}`;

}    

}

///////////////////////////function get from local storage\\\\\\\\\\\\\\\\\\\\\\\\\\

function getTasks (){
    var getTask = localStorage.getItem('userTasks');
    if(getTask){
        MyTasks.all = JSON.parse(getTask);
        containerOfResult.innerHTML = '';
        runderResult();
    }
}
getTasks();

