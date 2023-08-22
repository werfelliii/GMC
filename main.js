//*theme mode*//
var element = document.getElementsByClassName("theme")[0];
const root = document.documentElement;
element.addEventListener("click", function(event) {
  if(element.innerHTML=="Light Mode"){
    root.style.setProperty('--ecriture', 'rgba(121, 10, 10, 0.76)');
    root.style.setProperty('--background', '#03cdff');
    element.innerHTML="Dark mode"}
    else{
        root.style.setProperty('--background', 'rgba(121, 10, 10, 0.76)');
        root.style.setProperty('--ecriture', '#03cdff');
        element.innerHTML="Light Mode";}
    
});

//*fenetre modale*//

const modalContainer = document.querySelector("#c1");
console.log(modalContainer,"helo")
const modalTriggers = document.querySelectorAll(".modal-trigger");
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