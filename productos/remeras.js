const remeras = [
    {
        id : 1,
        nombre : "Shirt BAPE Shark",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/bape-remera-shark.jpg",
    },
    {
        id : 2,
        nombre : "Shirt Cactus Jack Pink",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/cactus-jack-pink.png",
    },
    {
        id : 3,
        nombre : "Shirt Anti Social Social Club COLAB Playboy",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/playboy-antisocialsocial.png",
    },
    {
        id : 4,
        nombre : "Shirt Nike Icon Clash",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/Remera-nike-icon-clash.jpg",
    },
    {
        id : 5,
        nombre : "Shirt Nike Space",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/remera-nike-space.jpg",
    },
    {
        id : 6,
        nombre : "Shirt Vans Fill-Boys Black",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/remera-vans-black-fillboys.jpg",
    },
    {
        id : 7,
        nombre : "Shirt Off White",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/remera-offwhite.jpg",
    },
    {
        id : 8,
        nombre : "Shirt Puma White",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/remera-puma.jpg",
    },
    {
        id : 9,
        nombre : "Shirt Supreme X Trasher",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/remera-supreme-x-thrasher.jpg",
    },
    {
        id : 10,
        nombre :"Shirt Tenis Fila",
        precio : 10000,
        imagen : "../imagenes/stocks/remeras/remera-tenis-fila.jpg",
    },
];


const remerasToHTML = (remera) => {
    const remeraMarket = `  
    <div class="stock col-12 col-md-6 col-lg-3 mb-2 mt-2">
    <img class="img-fluid img-stock" src="${remera.imagen}" alt="${remera.nombre}">
    <p>${remera.nombre}</p>
    <p>$${remera.precio}</p>
    <button type="button" id="boton-${remera.id}"  class="btn btn-dark">Comprar</button>
    </div>
`;
return remeraMarket;
};

const containerRemeras = document.getElementById("containerRemeras");
for (const remera of remeras) {
    containerRemeras.innerHTML += remerasToHTML(remera);
};

for (const remera of remeras) {
    const boton = document.getElementById(`boton-${remera.id}`);
    boton.addEventListener("click", () =>  Swal.fire(
        'Agregado',
        'al Carrito!',
        'success'
      ) + console.log("agregado al carrito", remera.nombre));
}

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const remera of remeras) {
    guardarLocal(remera.id, JSON.stringify(remera));
}


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(remeras),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));