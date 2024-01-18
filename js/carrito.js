let productos = []

const btnCart = document.querySelector(".container-icon");
const prodcutsCarrito = document.querySelector(".container-cart-product");

btnCart.addEventListener(`click`, () => {
  prodcutsCarrito.classList.toggle("hidden-cart");
});


let cart = [];

function init(){
  loadProductos();
  getCarrito();
}

function getCarrito() {
  if(localStorage.getItem('carrito') !== null){
    cart=JSON.parse(localStorage.getItem('carrito'));
    carritoHtml();
  }
};

function loadProductos(){
  getData('./productos.json')
  .then(data => {
    productos = data;
    let htmlProductos = '';
    productos.forEach(p => {
      htmlProductos += `<div class="col-xl-3 col-md-6 col-sm-12">
                          <div class="card">
                              <img src="${p.imagen}" class="card-img-top destacados" alt="${p.nombre}">
                              <div class="card-body">
                                  <h5 class="card-title">${p.nombre}</h5>
                                  <p class="card-text">Liquidacion $${p.precio}</p>
                                  <button href="#" class="btn comprarBtn"
                                      onclick="agregarCarrito(${p.id})">Agregar al carrito</button>

                              </div>
                          </div>
                      </div>`;
    });
    document.getElementById('productos').innerHTML = htmlProductos;
  });
}

async function getData(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

async function agregarCarrito(id){
  let prod = productos.find(p => p.id == id);
  if(cart.length == 0){
    cart.push(prod);
  }else{
    let existe = false;
    cart.forEach(p => {
      if(p.id == prod.id){
        p.cantidad += 1;
        existe = true;
      }
    });
    if(existe == false){
      cart.push(prod);
    }
  }
  carritoHtml();
  guardarSeccion();
  const myPopup = new Popup({
    id: "my-popup",
    title: "Producto agregado",
    content: `Producto agregado al carrito con éxito.`,
  });
  myPopup.show();
  await new Promise(r => setTimeout(r, 2000));
  myPopup.hide();
}

function carritoHtml() {
  let htmlCarito = "";
  let total = 0;
  let cantProductos = 0;
  if(cart != null){
    cart.forEach((c) => {
      htmlCart = `<div class="cart-product">
                      <div class="info-cart-product">
                          <div>
                              <span class="cantidad-producto-carrito">${c.cantidad}</span>
                              <p class="titulo-producto-carrito">${c.nombre}</p>
                              <span class="precio-producto-carrito">$${c.precio}</span>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke-width="1.5" stroke="currentColor" data-slot="icon"
                              class="icon-close" onclick="eliminar('${c.id}')">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M6 18 18 6M6 6l12 12" />
                          </svg>
                      </div>
                  </div>`;
  
      htmlCarito += htmlCart;
      total = total + (c.precio * c.cantidad);
      cantProductos += c.cantidad;
    });
    document.getElementById("carito").innerHTML = htmlCarito;
    document.getElementById("pagarTotal").innerHTML = "$" + total.toString();
    document.getElementById("contador-carrito").innerHTML = cantProductos;
  }
}

function eliminar(id) {
  let p = cart.find(c => c.id == id);
  if(p.cantidad == 1){
    if(cart.length == 1){
      cart = [];
    }else{
      cart = cart.filter((c) => c.id != id);
    }
  }else{
    p.cantidad = Number(p.cantidad) - 1;
  }
  carritoHtml();
  guardarSeccion();
}

function guardarSeccion(){

  localStorage.setItem('carrito', JSON.stringify(cart));

}