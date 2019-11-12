/**
 * Created by homkov on 12/11/2019.
 */

/* метод 1 - основан на использовании метода toLocaleTimeString() объекта Date. Выводит полное время в формате, установленном у пользователя на его ОС.*/

window.onload = function(){
    window.setInterval(function(){
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
};


function clock_2(){

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(hours < 10)
        hours = "0" + hours;
    if(minutes < 10)
        minutes = "0" + minutes;
    if(seconds < 10)
    seconds = "0" + seconds;

    var str = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock_2").innerHTML = str;
    setTimeout("clock_2()", 1000);
};

/* // Получаем случайное число
 function getRandom(number){
 return Math.round(number * Math.random());
 };

 // Генерируем цвет
 function getRandomColor(){

 var red = getRandom(255);
 var green = getRandom(255);
 var blue = getRandom(255);

 var color = "rgb(" + red + "," + green + "," + blue + ")";

 return color;
 };

 function clock_3(){

 var date    = new Date();
 var hours   = date.getHours();
 var minutes = date.getMinutes();
 var seconds = date.getSeconds();

 var clockHours   = document.getElementById("clockHours");
 var clockMinutes = document.getElementById("clockMinutes");
 var clockSeconds = document.getElementById("clockSeconds");

 if(hours < 10)
 hours = "0" + hours;
 if(minutes < 10)
 minutes = "0" + minutes;
 if(seconds < 10)
 seconds = "0" + seconds;

 clockHours.innerHTML    = hours;
 clockMinutes.innerHTML  = minutes;
 clockSeconds.innerHTML  = seconds;

 clockHours.style.color   = getRandomColor();
 clockMinutes.style.color = getRandomColor();
 clockSeconds.style.color = getRandomColor();

 setTimeout("clock_3()", 1000);
 };*/

