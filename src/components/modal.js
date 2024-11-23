import { addTocart } from "./carrito.js";
import { showMessage } from "./toast.js";
import { updateTotalPrice } from "./carrito.js";

export function createModal(prod) {
    let modalHtml = document.querySelector(`#modal`)
    let modal = `<div class="modal-dialog modal-dialog-centered" style="max-width: 500px;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${prod.title} | $${prod.price}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="height: 400px; display: flex; flex-direction: column; gap: 1rem;" >
                <div class="modal-img-container" style="flex: 1; display: flex; justify-content: center; align-items: center; max-height: 200px;">
                    <img src="${prod.image}" alt="${prod.title}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
                </div>
                <div class="modal-parrafo-scroll"  tabindex="0">
                <p>${prod.description}</p>  
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success" id="modal-${prod.id}">Agregar al carrito</button>
            </div>
        </div>
    </div>`; 

modalHtml.innerHTML = modal;

let btn = document.querySelector(`#modal-${prod.id}`);
btn.addEventListener(`click`, () => {
    let cartLs = JSON.parse(localStorage.getItem(`products-cart`)); 
    let exist = cartLs.find((p) => p.id === prod.id);
    let index = cartLs.findIndex((p) => p.id === prod.id);

    if(!exist) {
      prod.quantity = 1;
         cartLs.push(prod);
    } else {
      exist.quantity = exist.quantity += 1;
    }
    localStorage.setItem(`products-cart`, JSON.stringify(cartLs));

    const toastLiveExample = document.getElementById('liveToast');
    showMessage(`Producto agregado al carrito`, `success`);

    addTocart();
    updateTotalPrice();
});

let myModal = new bootstrap.Modal(modalHtml);
myModal.show();
} 