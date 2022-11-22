export function messageBox(message){
    
    try{
        document.querySelector('pop_up_close').remove();
    }catch(err){
        const popUp = document.createElement("div");
    const text = document.createElement("p");
    const button = document.createElement("button");

    const node = document.createTextNode(message);
    const nodeBtn = document.createTextNode("OK");
    
    const head = document.querySelector(".head");    
    const overlay = document.getElementById('overlay');
    
    // Classes
    popUp.className = "pop_up";
    button.className = "btn-blue";


    button.appendChild(nodeBtn);
    text.appendChild(node);
    popUp.appendChild(text);
    popUp.appendChild(button);
    head.appendChild(popUp);

    overlay.style.visibility = "visible";

    button.addEventListener('click',  () => {
        overlay.style.visibility = "hidden";
        popUp.className = "pop_up_close";
    });
    }
    
    
   
}