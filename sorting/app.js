rst = document.getElementById("results");


rst2 = document.getElementById("results2");
 document.getElementById("asc").addEventListener('click',sortAsc);
 document.getElementById("desc").addEventListener('click',sortDesc);


        let i = 0;
        let namesArr = [];
        let hold = 0;
        let output = '';

fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(data =>  {
        console.log(data);
              

        data.forEach(names => {
            // namesArr[i][0] = names.title;
            // namesArr[i][1] = names.author;
            // namesArr[i][2] = names.year;
            // i = i +1;

            namesArr.push([names.title,names.author,names.year]);
        });

        output += `<th>Name <input type="checkbox" id="name_chk"></th>` +  
                    `<th>Author <input type="checkbox" id="author_chk"></th></th>` +
                    `<th>Year <input type="checkbox" id="year_chk"></th></th>`;

        for(count1 = 0; count1 <= namesArr.length - 1; count1++){
            output +=`<tr>`;
            output += `<td>${namesArr[count1][0]}</td>`;
            output += `<td>${namesArr[count1][1]}</td>`;
            output += `<td>${namesArr[count1][2]}</td></tr>`;
            // row = rst.insertRow(0);
            //  cell1 = row.insertCell(0);
            // cell1.innerHTML = namesArr[count1][0];
        }
        console.log(namesArr);
        rst.innerHTML = output;
       
    });

    function sortAsc(){

        name_box = document.getElementById("name_chk");
        author_box = document.getElementById("author_chk");
        year_box = document.getElementById("year_chk");

        output = '';

        for(count1 = 0; count1 <= namesArr.length - 1; count1++){
            for(count2 = 0; count2 <= namesArr.length - 1; count2++){
                if(name_box.checked === true){
                    if(namesArr[count1][0] < namesArr[count2][0]){
                        hold1 = namesArr[count1][0];
                        hold2 = namesArr[count1][1];
                        hold3 = namesArr[count1][2];
                        namesArr[count1][0] = namesArr[count2][0];
                        namesArr[count1][1] = namesArr[count2][1];
                        namesArr[count1][2] = namesArr[count2][2];
                        namesArr[count2][0] = hold1;
                        namesArr[count2][1] = hold2;
                        namesArr[count2][2] = hold3;
                    } 
                }

                if(author_box.checked === true){
                    if(namesArr[count1][1] < namesArr[count2][1]){
                        hold1 = namesArr[count1][0];
                        hold2 = namesArr[count1][1];
                        hold3 = namesArr[count1][2];
                        namesArr[count1][0] = namesArr[count2][0];
                        namesArr[count1][1] = namesArr[count2][1];
                        namesArr[count1][2] = namesArr[count2][2];
                        namesArr[count2][0] = hold1;
                        namesArr[count2][1] = hold2;
                        namesArr[count2][2] = hold3;
                    } 
                }

                if(year_box.checked === true){
                    if(namesArr[count1][2] < namesArr[count2][2]){
                        hold1 = namesArr[count1][0];
                        hold2 = namesArr[count1][1];
                        hold3 = namesArr[count1][2];
                        namesArr[count1][0] = namesArr[count2][0];
                        namesArr[count1][1] = namesArr[count2][1];
                        namesArr[count1][2] = namesArr[count2][2];
                        namesArr[count2][0] = hold1;
                        namesArr[count2][1] = hold2;
                        namesArr[count2][2] = hold3;
                    } 
                }
                
            }  
        }

        // for(count1 = 0; count1 <= namesArr.length - 1; count1++){
        //     output += `<li>${namesArr[count1]}</li>`
        // }

        // rst.innerHTML = output;

        output += `<th>Name <input type="checkbox" id="name_chk"></th>` +  
        `<th>Author <input type="checkbox" id="author_chk"></th></th>` +
        `<th>Year <input type="checkbox" id="year_chk"></th></th>`;

        for(count1 = 0; count1 <= namesArr.length - 1; count1++){
            output +=`<tr>`;
            output += `<td>${namesArr[count1][0]}</td>`;
            output += `<td>${namesArr[count1][1]}</td>`;
            output += `<td>${namesArr[count1][2]}</td></tr>`;
            // row = rst.insertRow(0);
            //  cell1 = row.insertCell(0);
            // cell1.innerHTML = namesArr[count1][0];
        }
        console.log(namesArr);
        rst.innerHTML = output;
    };

    function sortDesc(){

        name_box = document.getElementById("name_chk");
        author_box = document.getElementById("author_chk");
        year_box = document.getElementById("year_chk");

        output = '';

        for(count1 = 0; count1 <= namesArr.length - 1; count1++){
            for(count2 = 0; count2 <= namesArr.length - 1; count2++){
                if(name_box.checked === true){
                    if(namesArr[count1][0] > namesArr[count2][0]){
                        hold1 = namesArr[count1][0];
                        hold2 = namesArr[count1][1];
                        hold3 = namesArr[count1][2];
                        namesArr[count1][0] = namesArr[count2][0];
                        namesArr[count1][1] = namesArr[count2][1];
                        namesArr[count1][2] = namesArr[count2][2];
                        namesArr[count2][0] = hold1;
                        namesArr[count2][1] = hold2;
                        namesArr[count2][2] = hold3;
                    } 
                }

                if(author_box.checked === true){
                    if(namesArr[count1][1] > namesArr[count2][1]){
                        hold1 = namesArr[count1][0];
                        hold2 = namesArr[count1][1];
                        hold3 = namesArr[count1][2];
                        namesArr[count1][0] = namesArr[count2][0];
                        namesArr[count1][1] = namesArr[count2][1];
                        namesArr[count1][2] = namesArr[count2][2];
                        namesArr[count2][0] = hold1;
                        namesArr[count2][1] = hold2;
                        namesArr[count2][2] = hold3;
                    } 
                }

                if(year_box.checked === true){
                    if(namesArr[count1][2] > namesArr[count2][2]){
                        hold1 = namesArr[count1][0];
                        hold2 = namesArr[count1][1];
                        hold3 = namesArr[count1][2];
                        namesArr[count1][0] = namesArr[count2][0];
                        namesArr[count1][1] = namesArr[count2][1];
                        namesArr[count1][2] = namesArr[count2][2];
                        namesArr[count2][0] = hold1;
                        namesArr[count2][1] = hold2;
                        namesArr[count2][2] = hold3;
                    } 
                }
            }  
        }

        // for(count1 = 0; count1 <= namesArr.length - 1; count1++){
        //     output += `<li>${namesArr[count1]}</li>`
        // }

        // rst.innerHTML = output;

        output += `<th>Name <input type="checkbox" id="name_chk"></th>` +  
        `<th>Author <input type="checkbox" id="author_chk"></th></th>` +
        `<th>Year <input type="checkbox" id="year_chk"></th></th>`;

        
        for(count1 = 0; count1 <= namesArr.length - 1; count1++){
            output +=`<tr>`;
            output += `<td>${namesArr[count1][0]}</td>`;
            output += `<td>${namesArr[count1][1]}</td>`;
            output += `<td>${namesArr[count1][2]}</td></tr>`;
            // row = rst.insertRow(0);
            //  cell1 = row.insertCell(0);
            // cell1.innerHTML = namesArr[count1][0];
        }
        console.log(namesArr);
        rst.innerHTML = output;
    }