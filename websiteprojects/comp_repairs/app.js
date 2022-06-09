var hamBurger = document.getElementById("hamburger");
var hidContact = document.getElementById("contact-toggle");
var head = document.getElementById("head");

hamBurger.addEventListener('click', loadContact);

function loadContact(){
    if (hidContact.style.visibility == 'visible'){
        hidContact.style.visibility = 'hidden';
        head.style.height = '15vh';
    }else{
        hidContact.style.visibility = 'visible';
        head.style.height = '28vh';
    }
    ;
}