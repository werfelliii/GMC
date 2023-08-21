//*theme mode*//
var element = document.getElementsByClassName("theme")[0];

element.addEventListener("click", function(event) {
  if(element.innerHTML=="Dark mode"){
    root.style.setProperty('--ecriture', 'rgba(0, 0, 0, 0.76)');
    root.style.setProperty('--background', '#f1f1f1');
    element.innerHTML="Light Mode"}
    else{
        root.style.setProperty('--background', 'rgba(0, 0, 0, 0.76)');
        root.style.setProperty('--ecriture', '#f1f1f1');
        element.innerHTML="Dark mode";}
    
});






const root = document.documentElement;

// Change the values of the CSS variables
