export function showMessage(text, color) {
    let toastContainer = document.querySelector(`#toast-container`);
    let toastHtml = `
        <div id="LiveToast" class="toast align-items-center  text-bg-${color}  border-0 z-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong class="me-auto">Istea-Ecommerce</strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              ${text}
            </div>
          </div>    
    `;

    toastContainer.innerHTML = toastHtml;

    let toast = document.querySelector(`#LiveToast`)   
    let myToast = new bootstrap.Toast(toast);
    myToast.show();
}