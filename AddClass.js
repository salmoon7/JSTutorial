//Javascript allows accessing the html property of classes using the callList method
//Syntax: var selectedElement= getElementById('selector')
//selectedElement.classList.add('myClass');

// let mainHeader = document.getElementById('mainHeader');
// let btn=document.getElementById('btn_click');
// let sidebar = document.getElementById('side_bar')


// function onBtnClick(){
//     if(sidebar.classList.contains('show')){
//     sidebar.classList.remove('show');
//     sidebar.classList.add('hide');
// }
// else{
//     sidebar.classList.add('show');
//     sidebar.classList.remove('hide');
// }
   


// }

// btn.addEventListener('click',onBtnClick);


let container=document.getElementById('container');
let btn=document.getElementById('btn');



container.onmouseover= function(){

if(btn.classList.contains('show')){
    btn.classList.remove('show');
    btn.classList.add('hide');
}else{
    btn.classList.add('show');
    btn.classList.remove('hide');
}


}

btn.onclick = function(){
    btn.innerHTML=`<p  style="font-size:10px;overflow:hidden">Remove from cart</p>`;
}






