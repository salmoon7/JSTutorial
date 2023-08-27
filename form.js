//form events are:  Change, focus, blur,Submit
let Username=document.getElementById('username');

Username.addEventListener('input',function(event){
    //knowing the html thst is triggered
    // console.log(event.target);

});

let Btn = document.getElementById('btn-subnit');
let Container = document.getElementById('container');

Container.addEventListener('submit', function(event){
    alert('Submit button clicked');
    event.preventDefault();

})