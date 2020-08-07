// Here javascript go.
const pics = [
    "img/nature1.jpeg",
    "img/nature2.jpeg",
    "img/nature3.jpeg",
    "img/nature4.jpeg",
    "img/nature5.jpeg",
];
const image = document.querySelector('img');
const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nexbtn');
var counter = 1;

// Eventlistener.
nextBtn.addEventListener('click',function(){
    if(counter === 5){
        counter = 0;
    }
    image.src = pics[counter];
    counter++; 
});
