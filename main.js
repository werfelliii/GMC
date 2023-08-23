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

//*minecraft*//
const modalContainer2 = document.querySelector("#c3");
console.log(modalContainer2,"helo")
const modalTriggers2 = document.querySelectorAll(".bm");
console.log(modalContainer2.style,"hello")
function toggleModal2(event) {
  console.log("Toggle modal function executed.");
  if (modalContainer2.style.display == "") {
    modalContainer2.style.display = "flex";
  } else {
    modalContainer2.style.display = "";
  }
}

modalTriggers2.forEach(trigger => {
  trigger.addEventListener("click", toggleModal2);
});
//card//
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body')


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})





















var articles = document.querySelectorAll(".game");
var panier = document.getElementById("listCard");

articles.forEach(function(article) {

var boutonPanier = article.querySelector(".bb");
    var nomArticle = article.querySelector("h3").textContent;
    var prixArticle = parseFloat(article.querySelector("p").textContent.split(":")[1]);

    boutonPanier.addEventListener("click", function() {
        var existingCartItem = panier.querySelector(`li[data-nom="${nomArticle}"]`);

        if (existingCartItem) {
            // Si l'article existe déjà dans le panier, augmentez sa quantité
            var quantiteElement = existingCartItem.querySelector(".quantite");
            var quantite = parseInt(quantiteElement.textContent);
            quantiteElement.textContent = quantite + 1;
        } else {
            // Sinon, ajoutez l'article au panier
            var li = document.createElement("li");
            li.setAttribute("data-nom", nomArticle);
            li.innerHTML = `
                <span>${nomArticle} - ${prixArticle.toFixed(2)} €</span>
                <button class="ajouter">+</button>
                <span class="quantite">1</span>
                <button class="retirer">-</button>
            `;


var ajouterBouton = li.querySelector(".ajouter");
            ajouterBouton.addEventListener("click", function() {
                var quantite = parseInt(li.querySelector(".quantite").textContent);
                li.querySelector(".quantite").textContent = quantite + 1;
            });

            var retirerBouton = li.querySelector(".retirer");
            retirerBouton.addEventListener("click", function() {
                var quantite = parseInt(li.querySelector(".quantite").textContent);
                if (quantite > 1) {
                    li.querySelector(".quantite").textContent = quantite - 1;
                } else {
                    panier.removeChild(li);
                }
            });

            panier.appendChild(li);
        }
    });
});






