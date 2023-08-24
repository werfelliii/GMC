//*theme mode*//


const counter = document.getElementById("count");
var count = 0;
var sum=0

var element = document.getElementsByClassName("theme")[0];
const root = document.documentElement;
element.addEventListener("click", function(event) {
  if(element.innerHTML=="Light Mode"){
    root.style.setProperty('--ecriture', '#191970');
    root.style.setProperty('--background', '#ffdab9');
    element.innerHTML="Dark mode"}
    else{
        root.style.setProperty('--background', '#333');
        root.style.setProperty('--ecriture', '#006400');
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
      count++;
      counter.innerHTML=count.toString();
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
            
                <span class="prices">${nomArticle} - ${prixArticle.toFixed(2)} €</span>
                
                <button class="ajouter">+</button>
                <center>
                <span class="quantite">1</span>
                </center>
                <button class="retirer">-</button>
            `;


var ajouterBouton = li.querySelector(".ajouter");
            ajouterBouton.addEventListener("click", function() {
              count++;
              counter.innerHTML=count.toString();
                var quantite = parseInt(li.querySelector(".quantite").textContent);
                li.querySelector(".quantite").textContent = quantite + 1;
                somme();
            });

            var retirerBouton = li.querySelector(".retirer");
            retirerBouton.addEventListener("click", function() {
              count--;
              counter.innerHTML=count.toString();
                var quantite = parseInt(li.querySelector(".quantite").textContent);
                if (quantite > 1) {
                    li.querySelector(".quantite").textContent = quantite - 1;
                } else {
                    panier.removeChild(li);
                }
                somme();
            });

            panier.appendChild(li);
        }
        somme(); 
    });
});




function somme(){
  let quantity=Array.from(document.getElementsByClassName("quantite"))
  let prices=Array.from(document.getElementsByClassName("prixArticle"))
  sum=0;

list_items=panier.getElementsByTagName("li");
for (let i = 0; i < list_items.length; i++) {
  const listItem = list_items[i];
  const priceElement = listItem.getElementsByClassName("prices")[0];
  console.log(priceElement.innerHTML);
  price = priceElement.innerText.substring(priceElement.innerText.indexOf("-")+2, priceElement.innerText.length - 2)
  price = parseFloat(price)
  const quantity = parseFloat(listItem.getElementsByClassName("quantite")[0].innerText);
  sum+=price*quantity
  priceElement.textContent.split(":")
  
  // You can perform other operations on each list item here
}
document.getElementById("totalp").innerHTML=sum;
  
}



const gameTypeSelect = document.getElementById('game-type');
const shoppingBag = document.querySelector('.shopping-bag');

const games = [
  { name: 'Fifa', type: 'Sport' },
  { name: 'Chess', type: 'Role-Play' },
  { name: 'Minecraft', type: 'Adventure' },
];

gameTypeSelect.addEventListener('change', () => {
  const selectedType = gameTypeSelect.value;
  const matchingGames = games.filter(game => game.type === selectedType);

  if (matchingGames.length > 0) {
    const gameNames = matchingGames.map(game => game.name).join(', ');
    alert(`The games where the type is "${selectedType}" are : ${gameNames}`);
  } else {
    alert('Any game for the moment.');}})
  


