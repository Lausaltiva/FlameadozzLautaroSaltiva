const pantalones = [
    {
        nombre : "Jogging Palace", 
        id : 1, 
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/jogging-palace.jpg",
    },
    {
        nombre : "Pantalon Essentials 2",
        id : 2,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/pantalon-essentials-2.jpg",
    },
    {
        nombre : "Pantalon Essentials",
        id : 3,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/pantalon-essentials.jpg",
    },
    {
        nombre : "Pantalon Fila White",
        id : 4,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/pantalon-fila-white.png",
    },
    {
        nombre : "Short BAPE",
        id : 5,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/short-bape.jpg",
    },
    {
        nombre : "Short Palace",
        id : 6,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/short-palace.jpg",
    },
    {
        nombre : "Short Supreme X NBA",
        id : 7,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/short-supremexnba.jpg",
    },
    {
        nombre : "Short Tommy Hilfiger",
        id : 8,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/short-th.jpg",
    },
    {
        nombre : "Pantalon Fila Black",
        id : 9,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/pantalon-fila-black.png",
    },
    {
        nombre : "Short Miami Heat",
        id : 10,
        precio : 10000,
        imagen : "../imagenes/stocks/pantalonesyshorts/short-miamiheat.png",
    },
];

const pantalonesToHTML = (pantalon) => {
    const pantalonMarket = `  
    <div class="stock col-12 col-md-6 col-lg-3 mb-2 mt-2">
    <img class="img-fluid img-stock" src="${pantalon.imagen}" alt="${pantalon.nombre}">
    <p>${pantalon.nombre}</p>
    <p>$${pantalon.precio}</p>
    <button type="button" id="boton-${pantalon.id}" class="btn btn-dark">Comprar</button>
    </div>
`;
return pantalonMarket;
};

const containerPantalones = document.getElementById("containerPantalones");
for (pantalon of pantalones) {
    containerPantalones.innerHTML += pantalonesToHTML(pantalon);
};

for (const pantalon of pantalones) {
    const boton = document.getElementById(`boton-${pantalon.id}`);
    boton.addEventListener("click", () => Swal.fire(
        'Agregado',
        'al Carrito!',
        'success'
      ) + console.log("agregado al carrito", pantalon.nombre));
}
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const pantalon of pantalones) {
    guardarLocal(pantalon.id, JSON.stringify(pantalon));
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(pantalones),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));