document.addEventListener("DOMContentLoaded", function(){

    setInterval(function() {
    var currentTime = new Date(); ​
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    if (hours > 12) {  
    hours = hours - 12;  
    }  
    if (seconds < 10) { 
    seconds = "0" + seconds; 
    } 
    if (minutes < 10) { 
    minutes = "0" + minutes; 
    } 
    
    var clockTime = hours + ":" + minutes ;
        
    var clock = document.getElementById('clock');
    
    clock.innerText = clockTime;
    
    },1000);