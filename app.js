// Here javascript go.
const pics = [
    "img/nature1.jpeg",
    "img/nature2.jpeg",
    "img/nature3.jpeg",
    "img/nature4.jpeg",
    "img/nature5.jpeg",
];
const image = document.querySelector('img');
const nextBtn = document.querySelector('.nexbtn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const allBtn = document.querySelectorAll('#btn');
var counter = 1;

// Eventlistener.
nextBtn.addEventListener('click',function(){
    // if statments.
    if(counter < 1){
        btn1.style.background = 'white';
    }else{
        btn1.style.background = 'black';
    }
    if(counter === 1){
        btn2.style.background = 'white';
    }else{
        btn2.style.background = 'black';
    }
    if(counter === 2){
        btn3.style.background = 'white';
    }else{
        btn3.style.background = 'black';
    }
    if(counter === 3){
        btn4.style.background = 'white';
    }else{
        btn4.style.background = 'black';
    }
    if(counter === 4){
        btn5.style.background = 'white';
    }else{
        btn5.style.background = 'black';
    }

    if(counter === 5){
        counter = 0;
        if(counter === 0){
            btn1.style.background = 'white';
        }else{
            btn1.style.background = 'black';
        }
    }
    image.src = pics[counter];
    counter++;
    
});

// some Functions for the radio input.
function Hello0(){
    image.src = pics[0];
}
function Hello1(){
    image.src = pics[1];
}
function Hello2(){
    image.src = pics[2]; 
}
function Hello3(){
    image.src = pics[3];
}
function Hello4(){
    image.src = pics[4];
}


