import { getProductos } from "../services/api.js";
import { createModal } from "./modal.js";

export function createCards() {
    getProductos().then((data) => {
        let card_container = document.querySelector("#cards");
         data.forEach((p) => {
                         let card = `<div class="col" style="max-width: 280px;">
                            <div class="card">
                            <img src="${p.image}" class="card-img-top" alt="${p.title}" height="350px">
                            <div class="card-body">
                                <h5 class="card-title">$${p.price}</h5>
                                <p class="card-text card-acortar-txt">${p.title}</p>
                            </div>
                            <button class="btn btn-success"  id="btn-${p.id}"> Mas detalles </button>
                            </div>                           
                        </div>`;

                 card_container.innerHTML += card;
                 setTimeout(() => {
                    let btn = document.querySelector(`#btn-${p.id}`);
                    btn.addEventListener(`click`, () => {
                       createModal(p);
                    }); 
                 }, 0);
         });
    });
}

 







