let exploreList = document.getElementById("navbar-hid");
document.getElementById("explore").addEventListener('click', exploreToggle);



function exploreToggle(){
    if (exploreList.style.visibility === 'visible'){
        exploreList.style.visibility = 'hidden'
    }else{
        exploreList.style.visibility = 'visible'
    };
};




