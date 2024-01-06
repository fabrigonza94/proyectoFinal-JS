

const btnCart = document.querySelector(".container-icon");
const prodcutsCarrito = document.querySelector(".container-cart-product");

btnCart.addEventListener(`click`, () => {
  prodcutsCarrito.classList.toggle("hidden-cart");
});


let cart = [];

function getCarrito() {
  cart=JSON.parse(localStorage.getItem('carrito'));
  carritoHtml();
};

function agregarCarrito(nombre, precio) {
  const producto = {
    nombre: nombre,
    precio: precio,
  };
  cart.push(producto);
carritoHtml();
guardarSeccion();

}

function carritoHtml() {
  let htmlCarito = "";
  let total = 0;
  cart.forEach((c) => {
    htmlCart = `<div class="cart-product">
                    <div class="info-cart-product">
                        <div>
                            <span class="cantidad-producto-carrito">1</span>
                            <p class="titulo-producto-carrito">${c.nombre}</p>
                            <span class="precio-producto-carrito">$${c.precio}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" data-slot="icon"
                            class="icon-close" onclick="eliminar('${c.nombre}')">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>`;

    htmlCarito += htmlCart;
    total = total + Number(c.precio);
  });
  document.getElementById("carito").innerHTML = htmlCarito;
  document.getElementById("pagarTotal").innerHTML = "$" + total.toString();
  document.getElementById("contador-carrito").innerHTML = cart.length;
}

function eliminar(nombre) {
  cart = cart.filter((c) => c.nombre !== nombre);
  carritoHtml();
  guardarSeccion();
}

function guardarSeccion(){

  localStorage.setItem('carrito', JSON.stringify(cart));

}