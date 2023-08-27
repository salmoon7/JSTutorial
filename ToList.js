
// console.log(newListElement);




let Btn=document.getElementById('add-item')
let list= document.getElementById('todo-list')
Btn.addEventListener('click',function() {
    let newListElement=document.createElement('li');
    newListElement.appendChild(document.createTextNode('List item '+(list.childElementCount+1)));
    newListElement.id = 'list'+(list.childElementCount+1);
    console.log(newListElement);
    list.appendChild(newListElement);
    console.log();


})


