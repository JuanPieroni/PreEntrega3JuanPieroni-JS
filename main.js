class Product {
    constructor(item, nombre, precio, img) {
        this.item = item;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;

    }
}

const niacinamida = new Product(1, "Crema facial niacinamida", 2800, "img/niaci.jpeg");
const acido = new Product(2, "Acido Hialuronico", 3000, "img/acid.jpg ");
const acondicionador = new Product(3, "Acondicionador", 800, "img/acond.png")
const combo = new Product(4, "Combo shampoo y acondicionador", 1500, "img/combo2.jpg")
const aceite = new Product(5, "Aceite de cannabis", 3500, "img/aceite.jpg")
const mascarilla = new Product(6, "Mascarilla facial", 1900, "img/masca.jpg")
const desodorante = new Product(7, "Desodorante Natural", 1650, "img/deso.jpg")
const shampoo = new Product(8, "Shampoo Solido", 900, "img/shampoo.jpeg")

let productos = [niacinamida, acido, acondicionador, combo, aceite, mascarilla, desodorante, shampoo];
let carrito = [];

// dom

const contenedo = document.getElementById("contenedor")

// ver productos

const verProductos = () => {
    productos.forEach(i => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-xl-4", "col-md-6", "col-xs-12");
        tarjeta.innerHTML = `<div class=" " >
                                <img src="${i.img}" class="card-img-top imagen ">
                                <div class="card-body  " >
                                     <h3>${i.nombre}</h3>
                                      <p>$${i.precio}</p>
                                      <button class="" id="boton${i.id}" >Comprar</button>
                               </div>
                            </div>
    
        `
        contenedor.append(tarjeta);
   
        
   
   
    })
}
verProductos();

//agregar

