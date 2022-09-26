const accesorios = [
    {
        nombre : "Cap New York",
        id : 1,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/cap-NY.jpg",
    },
    {
        nombre : "Cinto Off White",
        id : 2,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/cinto-offwhite.jpg",
    },
    {
        nombre : "Cup Tommy Hilfiger",
        id : 3,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/cup-th.jpg",
    },
    {
        nombre : "Riñonera Adidas",
        id : 4,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/riñonera-adidas.jpg",
    },
    {
        nombre : "Riñonera BAPE",
        id : 5,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/riñonera-bape.jpg",
    },
    {
        nombre : "Riñoners Nike",
        id : 6,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/riñonera-nike.jpg",
    },
    {
        nombre : "Supreme Beanie",
        id : 7,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/supreme-beanie.jpg",
    },
    {
        nombre : "Supreme Logo Zippo Red,",
        id : 8,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/Supreme-Logo-Zippo-Red.png",
    },
    {
        nombre : "Riñonera Fila Transparente",
        id : 9,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/riñonera-fila-transparente.png",
    },
    {
        nombre : "Medias Adidas Originals Solid",
        id : 10,
        precio : 10000,
        imagen : "../imagenes/stocks/accesorios/medias-adidas.png",
    },
];

const accesoriosToHTML = (accesorio) => {
    const accesorioMarket = `  
    <div class="stock col-12 col-md-6 col-lg-3 mb-2 mt-2">
    <img class="img-fluid img-stock" src="${accesorio.imagen}" alt="${accesorio.nombre}">
    <p>${accesorio.nombre}</p>
    <p>$${accesorio.precio}</p>
    <button type="button" id="boton-${accesorio.id}" class="btn btn-dark">Comprar</button>
    </div>
`;
return accesorioMarket;
};

const containerAccesorios = document.getElementById("containerAccesorios");
for (const accesorio of accesorios) {
    containerAccesorios.innerHTML += accesoriosToHTML(accesorio);
};


for (const accesorio of accesorios) {
    const boton = document.getElementById(`boton-${accesorio.id}`);
    boton.addEventListener("click", () =>
    Swal.fire(
        'Agregado',
        'al Carrito!',
        'success'
      ) + console.log("agregado al carrito" , accesorio.nombre));
}

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const accesorio of accesorios) {
    guardarLocal(accesorio.id, JSON.stringify(accesorio));
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(accesorios),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));