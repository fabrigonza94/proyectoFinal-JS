// Array de productos predefinidos
/*const productos = [
    { nombre: `Transportadora`, precio: 1500},
    { nombre: `Peine para pelos`, precio: 350 },
    { nombre: `Pelota`, precio: 100 },
    { nombre: `Surtido de juguetes`, precio: 1000 },
    { nombre: `Buzo Peludito`, precio: 1000 },
    { nombre: `Capitas Polares`, precio: 800 },
    { nombre: `Buzos de Lana`, precio: 1100 },
    { nombre: `Huesos comestibles medianos`, precio: 200 },
    { nombre: `Pastillas dog chow`, precio: 1000 },
    { nombre: `Pastillas frog`, precio: 1500 },
    { nombre: `Pastillas para gatos`, precio: 1400 },
    { nombre: `Pastillas para gato adulto`, precio: 900 },
    { nombre: `Huesos comestibles grandes`, precio: 400 }
  ];

  // Array para almacenar los productos en el carrito
  const carrito = [];

  function mostrarCarrito() {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
    } else {
      let contenido = "Carrito de Compras:\n\n";
      let total = 0;
      carrito.forEach(function(producto) {
        contenido += "Nombre: " + producto.nombre + "\nPrecio: $" + producto.precio.toFixed(2) + "\n\n";
        total += producto.precio;
      });
      contenido += `Total: $` + total;
      alert(contenido);
    }
  }
*/

 const btnCart = document.querySelector ('.container-cart-icon');
 const prodcutsCarrito = document.querySelector ('.container-cart-product');

 btnCart.addEventListener (`click`, () => {
  prodcutsCarrito.classList.toggle ('hidden-cart')
 });
  

 //lista contenedores de productos
const products = document.querySelector (`.container-product`);


products.addEventListener (`click`, e => {
    console.log (e)
});

