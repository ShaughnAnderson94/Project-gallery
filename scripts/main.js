let introButton = document.querySelector("#button1");
const myDescription1 = document.querySelector("#description1");
let description1 ="On this web page we have information on all the projects completed as part of the FAC course.";

let hobbyButton = document.querySelector("#button2");
const myDescription2 = document.querySelector("#description2");
let description2 ="this was my first project where I shared information about my hobby nail art. In making this I learned the basics of constructing a website";

let movieButton = document.querySelector("#button3");
const myDescription3 = document.querySelector("#description3");
let description3 ="this project is under construction";

let webButton = document.querySelector("#button4");
const myDescription4 = document.querySelector("#description4");
let description4 ="this project is under construction";


let gameButton = document.querySelector("#button5");
const myDescription5 = document.querySelector("#description5");
let description5 ="this project is under construction";


introButton.onclick = () => {
    if(myDescription1.textContent === description1){
myDescription1.innerHTML = "";
introButton.innerHTML= "show details";
   }
   else {
myDescription1.innerHTML = description1;
introButton.innerHTML ="hide details";
   }
}

hobbyButton.onclick = () => {
    if(myDescription2.textContent === description2){
myDescription2.innerHTML = "";
hobbyButton.innerHTML= "show details";
   }
   else {
myDescription2.innerHTML = description2;
hobbyButton.innerHTML ="hide details";
   }
}

movieButton.onclick = () => {
    if(myDescription3.textContent === description3){
myDescription3.innerHTML = "";
movieButton.innerHTML= "show details";
   }
   else {
myDescription3.innerHTML = description3;
movieButton.innerHTML ="hide details";
   }
}

webButton.onclick = () => {
    if(myDescription4.textContent === description4){
myDescription4.innerHTML = "";
webButton.innerHTML= "show details";
   }
   else {
myDescription4.innerHTML = description4;
webButton.innerHTML ="hide details";
   }
}



gameButton.onclick = () => {
     if(myDescription5.textContent === description5){
myDescription5.innerHTML = "";
gameButton.innerHTML= "show details";
    }
    else {
myDescription5.innerHTML = description5;
gameButton.innerHTML ="hide details";
    }
}