//*theme mode*//
var element = document.getElementsByClassName("theme")[0];
const root = document.documentElement;
element.addEventListener("click", function(event) {
  if(element.innerHTML=="Light Mode"){
    root.style.setProperty('--ecriture', '#262626');
    root.style.setProperty('--background', '#f1f1f1');
    element.innerHTML="Dark mode"}
    else{
        root.style.setProperty('--background', '#262626');
        root.style.setProperty('--ecriture', '#f1f1f1');
        element.innerHTML="Light Mode";}
    
});

//*fenetre modale*//

const modalContainer = document.querySelector("#c1");
console.log(modalContainer,"helo")
const modalTriggers = document.querySelectorAll(".bc");
console.log(modalContainer.style,"hello")
function toggleModal(event) {
  console.log("Toggle modal function executed.");
  if (modalContainer.style.display == "") {
    modalContainer.style.display = "flex";
  } else {
    modalContainer.style.display = "";
  }
}

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", toggleModal);
});
//fifa//

const modalContainers = document.querySelector("#c2");
const modalTriggers1 = document.querySelectorAll(".bf");
console.log(modalContainers.style.display,"helbo")
function toggleModal1(event) {
  console.log("Toggle modal function executed.");
  if (modalContainers.style.display == "") {
    modalContainers.style.display = "flex";
  } else {
    modalContainers.style.display = "";
  }
}

modalTriggers1.forEach(trigger => {
  trigger.addEventListener("click", toggleModal1);
});

