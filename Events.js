// Two ways to event listener
// Method 1--> Using events Properties
//Syntax: selesctedElement.{eventProperty}=function(event) {}
//for example: selectedElement.onclick=function()  {}


//Method 2--> Using addEventListener()
//Syntax: selesctedElement.addEventListener({eventName},function()  {});
//For exaample:selectedElement.addEventListener('click',function() {});
//
let mainButton = document.querySelector('#main_div');
if(1<2){
    console.log("i am looking for myself");
}

let btn=document.getElementById('btn_click')
function btnClick(){
    
    // to change the color use thr rgba and the the Math.random() function
    mainButton.style.backgroundColor="rgba("+Math.floor(Math.random()*255)+" ,"+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
}
btn.addEventListener('click', btnClick);