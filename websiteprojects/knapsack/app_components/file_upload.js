export function uploadFile(){
    const popUp = document.createElement("form");
    const upldHead = document.createElement("div");
    const headLabel = document.createElement("label");
    const closeBtn = document.createElement("i");
    const upldSubBtn = document.createElement("input");
    const input = document.createElement("input");

    headLabel.textContent = "Upload File";

    const head = document.querySelector(".head");    
    const overlay = document.getElementById('overlay');

    upldSubBtn.type = "submit";
    upldSubBtn.value = "Upload";
    upldSubBtn.className = "btn-blue"
    popUp.className = "file-upload";
    closeBtn.className = "fa-solid fa-x close-btn";
    upldHead.setAttribute('id', 'upld-head');

    upldSubBtn.htmlFor = 'file_upld';

    input.type = "file";
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'file_upld');
    input.setAttribute('id', 'file_upld');

    upldSubBtn.setAttribute('id', 'upldSubBtn');

    upldHead.appendChild(headLabel);
    upldHead.appendChild(closeBtn);

    popUp.appendChild(upldHead);
    popUp.appendChild(input);
    popUp.appendChild(upldSubBtn);
    
    
    head.appendChild(popUp);

    overlay.style.visibility = "visible";

    closeBtn.addEventListener('click',  () => {
        overlay.style.visibility = "hidden";
        popUp.className = "file-upload-close";
    });

    popUp.addEventListener("submit", function(e){
        e.preventDefault();
        const inputRead = input.files[0];
        const reader = new FileReader();
        var uplArr = Array(10);
        var items = [];
            var weights = [];
            var values = [];

        reader.onload = function(e){
            const text = e.target.result;
            var itemText = "";
            var counter = 0;
            var comCount = 0;
            var arrPop = [];
            
            // console.log(text.length);

            arrPop = text.split(/,|\n|\r/);
           
            while (counter <= arrPop.length && arrPop[counter] != ""){
                items.push(arrPop[counter]);
                values.push(arrPop[counter+1]);
                weights.push(arrPop[counter+2]);
                counter = counter + 4;
            }

            // while (counter <= text.length){
            //     itemText = itemText + text[counter];
            //     counter
                


            localStorage.setItem("items", JSON.stringify(items)); 
       localStorage.setItem("values", JSON.stringify(values));
       localStorage.setItem("weights", JSON.stringify(weights));

       location.reload();

            
        }

        reader.readAsText(inputRead);


    });
    
}