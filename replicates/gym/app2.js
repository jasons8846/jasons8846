
function unhideP(e){
    let hiddenP = document.getElementById(e).parentElement.nextElementSibling;
    let fulldiv = document.getElementById(e).parentElement.parentElement;
    // var curp = e.target.className;
    if (hiddenP.style.visibility === 'visible'){
        hiddenP.style.visibility = 'hidden'
        fulldiv.style.height = '2rem';
    }else{
        hiddenP.style.visibility = 'visible'
        fulldiv.style.height = '8rem';
        hiddenP.style.width = '90%';
    };
};

function shownext(){
  let hidDiv = document.getElementById("test1");
  let nextDiv = document.getElementById("test2");

//   nextDiv.style.visibility = "visible";
//   hidDiv.style.visibility = "hidden";

  if( nextDiv.style.visibility === 'hidden'){
    nextDiv.style.visibility = "visible";
    hidDiv.style.visibility = "hidden";
  }else{
    nextDiv.style.visibility = "hidden";
    hidDiv.style.visibility = "visible";
  };
}