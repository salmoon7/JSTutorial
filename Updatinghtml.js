console.log("js loaded successfully");
console.log("I dont understand how it works");
//Updating html tags
let InitialValue=document.getElementById('initialValue');
let x=InitialValue.innerHTML;


setInterval(function(){
    InitialValue.innerHTML=x;
    x=x>0?  InitialValue.innerHTML-1: 0;
},1000);