class Product {
    constructor(item, nombre, precio, img) {
        this.item = item;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1

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


//LS
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

// dom

const contenedor = document.getElementById("contenedor")

// ver productos

const verProductos = () => {
    productos.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        tarjeta.innerHTML = `<div class="card" >
                                <img src="${p.img}" class="card-img-top imagen ">
                                <div class="card-body  " >
                                     <h3>${p.nombre}</h3>
                                     <p>$${p.precio}</p>
                                     <button class="" id="boton${p.item}" >Comprar</button>
                               </div>
                             </div>  `


        contenedor.appendChild(tarjeta);

        //agregar 

        const boton = document.getElementById(`boton${p.item}`);
        boton.addEventListener("click", () => {

            agregarAlcarrito(p.item)
        })

    })

};

verProductos();


//fun agregar

const agregarAlcarrito = (item) => {
    const productoAgregado = carrito.find(p =>
        p.item === item);
    if (productoAgregado) {
        productoAgregado.cantidad++;
    } else {
        const producto = productos.find(p =>
            p.item === item)
        carrito.push(producto)
    }
    console.log(productoAgregado);

    //LS
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
};

//ver Carrito

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})


// fun mostrarcarrito

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = " ";

    carrito.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        tarjeta.innerHTML = `<div class="card" >
                                <img src="${p.img}" class="card-img-top imagen ">
                                <div class="card-body  " >
                                     <h3>${p.nombre}</h3>
                                     <p>$${p.precio}</p>
                                     <p>${p.cantidad}</p>
                                     <button class="" id="eliminar${p.item}" >Eliminar</button>
                               </div>
                             </div>  `


        contenedorCarrito.appendChild(tarjeta)


        //eliminar
        const boton = document.getElementById(`eliminar${p.item}`);
        boton.addEventListener("click", () => {

            eliminarProducto(p.item)

        })

    })
    calcularTotal();
};

//fun eliminar

const eliminarProducto = (item) => {
    const producto = carrito.find( p => p.item === item );
    const index = carrito.indexOf(producto);
    carrito.splice(index, 1);
    mostrarCarrito();

    //LS
    localStorage.setItem("carrito", JSON.stringify(carrito));

};

//vacio carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarCarrito();
})

//fun vaciar 

const eliminarCarrito = () => {
    
 
    carrito = [];
    mostrarCarrito();
    
    localStorage.clear();
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach( (p) => {
        totalCompra += p.precio * p.cantidad;
    })
    total.innerHTML = `Total: ${totalCompra}`
};