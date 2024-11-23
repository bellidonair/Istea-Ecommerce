import { addTocart } from "./src/components/carrito.js";
import { createCards } from "./src/components/create-card.js";

createCards();

if(localStorage.getItem(`products-cart`) === null) {
    localStorage.setItem(`products-cart`, `[]`);
}

let btnSiderCart = document.querySelector(`#btn-sidebar`);
btnSiderCart.addEventListener(`click`, addTocart); 



