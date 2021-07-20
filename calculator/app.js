const screen  = document.querySelector("#screen");
let x;
let y;
let p;
let operator = 'nothing';
let num = 1;
let sign = "pos";

document.querySelector("#seven").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 7;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 7;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 7;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#eight").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 8;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 8;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 8;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#nine").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 9;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 9;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 9;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#four").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 4;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 4;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 4;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#five").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 5;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 5;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 5;
        y = parseFloat(screen.value);
        }
    }
});


document.querySelector("#six").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 6;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 6;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 6;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#one").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 1;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 1;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 1;
        y = parseFloat(screen.value);
        }
    }


});

document.querySelector("#two").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 2;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 2;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 2;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#three").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 3;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 3;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 3;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#zero").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + 0;
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + 0;
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + 0;
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#point").addEventListener('click', function(){
    if(operator === 'nothing'){
        screen.value = screen.value + ".";
        x = parseFloat(screen.value);
    }else{
        if(num === 1){
            screen.value = '';
            num = 0;
            screen.value = screen.value + ".";
        y = parseFloat(screen.value);
        }else{
        screen.value = screen.value + ".";
        y = parseFloat(screen.value);
        }
    }
});

document.querySelector("#sign").addEventListener('click', function(){
    
    if(sign === "pos"){
        if(operator === 'nothing'){
            screen.value = "-" + screen.value;
            x = parseFloat(screen.value);
        }else{
            if(num === 1){
                screen.value = '';
                num = 0;
                screen.value =  "-" + screen.value;
            y = parseFloat(screen.value);
            }else{
            screen.value =  "-" + screen.value;
            y = parseFloat(screen.value);
            }
        }
        sign="neg";
    }else{
        if(operator === 'nothing'){
            screen.value =  screen.value.replace('-','');
            x = parseFloat(screen.value);
        }else{
            if(num === 1){
                screen.value = '';
                num = 0;
                screen.value =  screen.value.replace('-','');
            y = parseFloat(screen.value);
            }else{
            screen.value =   screen.value.replace('-','');
            y = parseFloat(screen.value);
            }
        }
        sign="pos";
    }
    
});

document.querySelector("#plus").addEventListener('click', function(){
    operator = 'plus';
    num = 1;
});

document.querySelector("#minus").addEventListener('click', function(){
    operator = 'minus';
    num = 1;
});

document.querySelector("#times").addEventListener('click', function(){
    operator = 'times';
    num = 1;
});

document.querySelector("#divide").addEventListener('click', function(){
    operator = 'divide';
    num = 1;
});

document.querySelector("#equal").addEventListener('click', function(){

    switch(operator){
        case "plus":
            screen.value = x + y;
            break;
        case "minus":
            screen.value = x - y;
            break;
        case "times":
            screen.value = x * y;
            break;
        case "divide":
            screen.value = x / y;
    };

    operator = 'nothing';
    num = 0;
});

document.querySelector("#clear").addEventListener('click', function(){
    screen.value = '';
});

document.querySelector("#clear-mem").addEventListener('click', function(){
    screen.value = '';
    operator = 'nothing';
    num = 0;
    x = null;
    y = null;
});
