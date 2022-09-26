 const sneakers = [
    {
        nombre : "Adidas Yeezy 500 Blush",
        id : 1,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/Adidas-Yeezy-500-Blush.png",
    },
    {
        nombre : "Air Force Red",
        id : 2,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/airforce-red.jpg",
    },
    {
        nombre : "Jordan 1 Retro",
        id : 3,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/jordan-1-retro.jpg",
    },
    {
        nombre : "Jordan IV White Red",
        id : 4,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/jordan-4-white-red.jpg",
    },
    {
        nombre : "Nike Cortez",
        id : 5,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/nike-cortez.png",
    },
    {
        nombre : "Puma R-SX",
        id : 6, 
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/puma-r-sx.jpg",
    },
    {
        nombre : "Stan Smith White",
        id : 7,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/stan-smith-white.jpg",
    },
    {
        nombre : "VaporMax Gris",
        id : 8,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/vapormax-gray.jpg",
    },
    {
        nombre : "New Balance Color Cream",
        id : 9,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/nb-cream.png",
    },
    {
        nombre : "Air Force 1 White and Red",
        id : 10,
        precio : 10000,
        imagen : "../imagenes/stocks/sneakers/airforce-1-white-red.png",
    },
 ];


 const sneakersToHTML = (sneaker) => {
    const sneakerMarket = `  
    <div class="stock col-12 col-md-6 col-lg-3 mb-2 mt-2">
    <img class="img-fluid img-stock" src="${sneaker.imagen}" alt="${sneaker.nombre}">
    <p>${sneaker.nombre}</p>
    <p>$${sneaker.precio}</p>
    <button type="button" id="boton-${sneaker.id}"  class="btn btn-dark">Comprar</button>
    </div>
`;
return sneakerMarket;
};

const containerSneakers = document.getElementById("containerSneakers");
for (const sneaker of sneakers) {
    containerSneakers.innerHTML += sneakersToHTML(sneaker);
};


for (const sneaker of sneakers) {
    const boton = document.getElementById(`boton-${sneaker.id}`);
    boton.addEventListener("click", () =>  Swal.fire(
        'Agregado',
        'al Carrito!',
        'success'
      ) + console.log("agregado al carrito", sneaker.nombre));
}

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const sneaker of sneakers) {
    guardarLocal(sneaker.id, JSON.stringify(sneaker));
}


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(sneakers),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));