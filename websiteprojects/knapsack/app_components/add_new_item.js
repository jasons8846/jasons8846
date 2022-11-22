export function addNewItem (table, inputval, value, weight){

        /*
                Add a new Item for the Knapsack Problem
        */

        //Setup variables for new Row insertion
        var tableRowCount = table.rows.length;
        var row = table.insertRow(tableRowCount);
        var item = row.insertCell(0);
        var item_param_val = row.insertCell(1);
        var item_param_weight = row.insertCell(2);
        var item_chk = row.insertCell(3);
        var item_delete = row.insertCell(4);

        // Label and Item description for new Item
        item.innerHTML = `<label for="item-${tableRowCount}">Item-${tableRowCount}</label>` + 
        `<input class="item-input" type="text" name="item-${tableRowCount}" id="item-${tableRowCount}" tabindex=${tableRowCount+3} value=${inputval}>`;

        // New Item value towards the Knapsack
        item_param_val.classList.add("input-param-value");

        item_param_val.innerHTML = `<button class="btn-orange">-</button>` + 
        `<label for="item-${tableRowCount}-subtract">Item-${tableRowCount}-sub</label>`+
        `<input class="value-input" type="text" name="item-${tableRowCount}-subtract" id="item-${tableRowCount}-subtract" tabindex=${tableRowCount+4} value=${value}>`+
        `<button class="btn-orange">+</button>`;

        // New Item weight towards the Knapsack
        item_param_weight.classList.add("input-param-weight");

        item_param_weight.innerHTML = `<button class="btn-orange">-</button>`+
        `<label for="item-${tableRowCount}-add">Item-${tableRowCount}-add</label>`+
        `<input class="value-input" type="text" name="item-${tableRowCount}-add" id="item-${tableRowCount}-add" tabindex=${tableRowCount+5} value=${weight}>`+
        `<button class="btn-orange">+</button>`;

        // New item check box
        item_chk.innerHTML = `<label for="item-${tableRowCount}-chk">Item-${tableRowCount}-chk</label>`+
        `<input type="checkbox" name="item-${tableRowCount}-chk" id="item-${tableRowCount}-chk">`;

        // New item delete button
        item_delete.classList.add("input-trash");
        item_delete.innerHTML = `<span><i class="fa-regular fa-trash-can fa-2x"></i></span>`;

        item_delete.addEventListener('click', deleteItem.bind(this));

};


export function deleteItem(e){

        /*
                Delete Item from UI for the Knapsack problem
        */
    
        e.target.parentNode.parentNode.parentNode.remove();
    
        var table = document.querySelector("#input-table");
    
       const tableRowCount = table.rows.length; 
       var itemList = Array(tableRowCount-1);
       var w = Array(tableRowCount-1);
       var v = Array(tableRowCount-1);
    
       for(var i = 1; i < tableRowCount; i++){
            itemList[i-1] = table.rows[i].cells[0].children[1].value;
            v[i-1] = parseInt(table.rows[i].cells[1].children[2].value);
            w[i-1] = parseInt(table.rows[i].cells[2].children[2].value);
       }
    
       localStorage.setItem("items", JSON.stringify(itemList)); 
       localStorage.setItem("values", JSON.stringify(v));
       localStorage.setItem("weights", JSON.stringify(w));
       
}

export function resetData(){
        var table = document.querySelector("#input-table");
        var max_val = document.querySelector('#max-input-value');
        var max_calc_val = document.querySelector('#max-value-para');
        var elements = table.children
        //  console.log(elements[0].children[1].children[3].children[1]);
        //  elements[0].children[1].children[3].children[1].checked = false;

          for(var i = 1; i < elements[0].children.length; i++){
                elements[0].children[i].children[0].children[1].value ="";
                elements[0].children[i].children[3].children[1].checked = false;
                for (var j = 1; j < 3; j++){
                        elements[0].children[i].children[j].children[2].value =""
                }
                
         }

         for(var i = 1; i < elements[0].children.length; i++){
                if(elements[0].children.length > 2){
                        elements[0].children[i].remove();
                }
                      
         }

         max_val.value = "";

         localStorage.clear();

         max_calc_val.style.visibility = 'hidden';
         max_calc_val.style.position = 'absolute';
         max_calc_val.style.opacity = 0;
}