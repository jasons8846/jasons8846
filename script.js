const readMore = document.getElementById("read-more");
const moreInfo = document.getElementById("more-info");
const body = document.querySelector("body");
let readMoreState = 0;

readMore.addEventListener('click', changeReadMoreState);

function changeReadMoreState(){
    if(readMoreState === 0){
        showDetails();
    }else{
        hideDetails();
    }
}

function showDetails(){
    moreInfo.style.visibility = "visible";
    moreInfo.style.position = "relative";
    body.style.overflowY = "scroll";
    readMore.innerText = "Hide Info";
    readMoreState = 1;
}

function hideDetails(){
    scroll(0,0);
    moreInfo.style.visibility = "hidden";
    moreInfo.style.position = "absolute";
    // body.style.overflowY = "hidden";
    readMore.innerText = "Read More";
    readMoreState = 0;
}