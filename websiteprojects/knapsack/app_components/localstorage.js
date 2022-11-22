import { addNewItem } from "./add_new_item.js";

export function populateLocalStorage(items,values,weights,max){

    /*
        This function populates the input data on the UI in local storage
    */

    localStorage.setItem("items", JSON.stringify(items)); 
    localStorage.setItem("values", JSON.stringify(values));
    localStorage.setItem("weights", JSON.stringify(weights));
    localStorage.setItem("max", JSON.stringify(max));
    
}

export function getLocalStorage(table, max_val_input){

    /*
        This function populates the data in local storage on the UI
    
    */

    let localStrList, localStrVal, localStrWeight, localStrMax;

    if(localStorage.getItem('values') === null){
        localStrVal = [];
     }else{
        localStrVal = JSON.parse(localStorage.getItem('values'));
     }
    
     if(localStorage.getItem('weights') === null){
       localStrWeight = [];
    }else{
       localStrWeight = JSON.parse(localStorage.getItem('weights'));
    }
    
    if(localStorage.getItem('items') === null){
       localStrList = [];
    }else{
       localStrList = JSON.parse(localStorage.getItem('items'));
    }
    
    if(localStorage.getItem('max') === null){
       localStrMax = [];
    }else{
       localStrMax = JSON.parse(localStorage.getItem('max'));
    }

    
    console.log(localStrList);

    var count = 0 ;

    localStrList.forEach(e => {
    if(count === 0){
        table.rows[1].cells[0].children[1].value = e;
    }else{
        addNewItem(table, e,"","");
    }
    count++;
    });

    count = 0;

    localStrVal.forEach(e => {
        
        table.rows[count + 1].cells[1].children[2].value = e;
        count++;
    
    });

    count = 0;

    localStrWeight.forEach(e => {

        table.rows[count + 1].cells[2].children[2].value = e;
    
    count++;
    });

    max_val_input.value = localStrMax;
}