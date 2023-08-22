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








