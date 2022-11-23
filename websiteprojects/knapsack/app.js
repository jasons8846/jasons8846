import { knapSackProblem } from "./methods/knapSackProblem.js";
import { addNewItem, deleteItem, resetData, subtractValue, additionValue } from "./app_components/add_new_item.js";
import { messageBox } from "./app_components/pop_up.js";
import { populateLocalStorage, getLocalStorage } from "./app_components/localstorage.js";
import { uploadFile } from "./app_components/file_upload.js";


// Define variables
var table = document.querySelector("#input-table");
const add_item = document.querySelector("#add-item");
const calc_btn = document.querySelector("#calc-btn");
const upload_btn = document.querySelector("#upload-items");
const max_para = document.querySelector('#max-value-para');
const max_val = document.querySelector('#max-value');
const max_val_input = document.querySelector('#max-input-value');
const input_container = document.querySelector('.head');
var deleteBtn = document.getElementsByClassName('input-trash');
const resetBtn = document.querySelector('#reset-data');
var subtract = document.querySelectorAll('.subtract');
var addition = document.querySelectorAll('.addition');
var result;

// Populate fields with data in Local Storage
getLocalStorage(table, max_val_input);


// Add Eventlistener to Add a new Item
add_item.addEventListener('click',addNewItem.bind(this,table, "","",""));

// Add Eventlisteners to each delete button
for(var i = 0; i < deleteBtn.length; i++){
   deleteBtn[i].addEventListener('click', deleteItem.bind(this));
};

resetBtn.addEventListener('click', resetData.bind())


// Calculate Button
calc_btn.addEventListener('click', function(){
  
   // Define variables for the Knapsack problem
   const tableRowCount = table.rows.length;
   var itemList = Array(tableRowCount-1);
   var w = Array(tableRowCount-1);
   var v = Array(tableRowCount-1);

   // Validate the Inputs provided by the user
   if(max_val_input.value === "" || isNaN(max_val_input.value) === true ){
      messageBox("Please enter a valid Max value");
      return;
   }

   for(var i = 1; i < tableRowCount; i++){

      if( table.rows[i].cells[1].children[2].value === "" || isNaN(table.rows[i].cells[1].children[2].value) === true ){
         messageBox(`Invalid Value for item ${i}`);
         return;
      };

      if( table.rows[i].cells[2].children[2].value === "" || isNaN(table.rows[i].cells[2].children[2].value) === true ){
         messageBox(`Invalid Weight for item ${i}`);
         return;
      };

   };


   // Prep variables to load into Localstorage and input for Knapsack problem
   for(var i = 1; i < tableRowCount; i++){

      itemList[i-1] = table.rows[i].cells[0].children[1].value;
      v[i-1] = parseInt(table.rows[i].cells[1].children[2].value);
      w[i-1] = parseInt(table.rows[i].cells[2].children[2].value);

   };

   const m = parseInt(max_val_input.value);
   populateLocalStorage(itemList, v, w, m);


   // Make Result Visible
   max_para.style.visibility = 'visible';
   max_para.style.position = 'relative';
   max_para.style.marginLeft = '1rem';
   max_para.style.opacity = '1';

   // Final Results from Knapshack problem in form of an Array
   result = knapSackProblem(m, w, v);
   console.log(result);

   // Make results from Knapsack visible on the UI
   max_val.innerHTML = result[result.length-1];

   for(var j = 0; j < result.length-1; j++){
      for(var i = 1; i < tableRowCount; i++){
         if(result[j] === i){
            table.rows[i].cells[3].children[1].checked = true
         }
      };
   }
        
});


upload_btn.addEventListener('click', uploadFile.bind(this));


subtract.forEach(e => {
   e.addEventListener('click',subtractValue.bind(this));
});


addition.forEach(e => {
   e.addEventListener('click', additionValue.bind(this));
});

