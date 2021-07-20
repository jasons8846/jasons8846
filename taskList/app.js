// console.log(document.querySelector('.task-list ul li'));


const sub = document.querySelector('#btn-submit');
let localStr;
let ul = document.querySelector('.task-list ul');
let link = document.querySelector('.task-list ul li a');
let clear = document.querySelector('#clearTasks');


// Clear all tasks
clear.addEventListener('click', function(e){
    e.target.previousSibling.previousSibling.innerHTML = '';
    localStorage.removeItem('taskList');
});



//Get data from local storage
if(localStorage.getItem('taskList') === null){
    localStr = [];
}else{
    localStr = JSON.parse(localStorage.getItem('taskList'));
}


//Loop through local storage data and display as an LI
localStr.forEach(e => {
    let lis = document.createElement('li');
    let link = document.createElement('a');
    let span = document.createElement('span');
    let loc = e;
    let fa = document.createElement('i');

    link.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
        const index = localStr.indexOf(loc);

        if(index > -1){
            localStr.splice(index, 1);
        }

        localStorage.setItem('taskList', JSON.stringify(localStr));
    })


    lis.classList.add("my-item");
    fa.classList.add("fa");
    fa.classList.add("fa-times");
    link.href = "#";
    span.innerText = e;

    // lis.appendChild(document.createTextNode(e));
    lis.appendChild(span);
    link.appendChild(fa);
    lis.appendChild(link);
    ul.appendChild(lis);
    console.log(e);
});


//Add a new task or LI with delete button
sub.addEventListener('click', function(e){
    const inp = document.querySelector('#task-input').value;
    let li = document.createElement('li');
    let link = document.createElement('a');
    let span = document.createElement('span');
    let loc = inp;
    let fa = document.createElement('i');

    link.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
        const index = localStr.indexOf(loc);

        if(index > -1){
            localStr.splice(index, 1);
        }

        localStorage.setItem('taskList', JSON.stringify(localStr));
    })
    
    li.classList.add("my-item");
    fa.classList.add("fa");
    fa.classList.add("fa-times");
    link.href = "#";
    link.innerText = "";
    span.innerText = inp;

    link.appendChild(fa)
    li.appendChild(span);
    li.appendChild(link);
    ul.appendChild(li);

    if(localStorage.getItem('taskList') === null){
        localStr = [];
    }else{
        localStr = JSON.parse(localStorage.getItem('taskList'));
    }

    localStr.push(inp);

     localStorage.setItem('taskList', JSON.stringify(localStr));

     document.querySelector('#task-input').value = '';
     document.querySelector('#task-input').focus();
})
