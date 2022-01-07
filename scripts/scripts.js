//Assignment 03|01
const mycontainer = document.getElementById("container");
console.log( mycontainer);
//Assignment 03|02
const samecontainer =document.querySelector("#container");
console.log(samecontainer);
//Assignment 03|03
const allseconds = Array.from(document.getElementsByClassName("second"));
console.log(allseconds);
//Assignment 03|04
const ol = document.querySelector("ol");
console.log(ol.lastElementChild);
//Assignment 03|05
mycontainer.append("Hello!");
//Assignment 03|06
const htfooter = document.querySelector(".footer");
htfooter.classList.add("main");
console.log(htfooter);
//Assignment 03|07
htfooter.classList.remove("main");
console.log(htfooter);
//Assignment 03|08
const newli = document.createElement("li");
console.log(newli);
//Assignment 03|09
newli.innerText = "four";
console.log(newli);
//Assignemnt 03|10 
const ul = document.querySelector("ul");
ul.append(newli);
console.log(ul);
//Assignment 03|12
const olog =Array.from(ol.children);
console.log(olog);
for (let steps=0;steps<olog.length;steps++){
    olog[steps].style.color="green";
}
//Assignment 03|13
htfooter.remove();