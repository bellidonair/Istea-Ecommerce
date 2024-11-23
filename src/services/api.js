export function getProductos() {
return fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=> {
               return data;
            })

        }