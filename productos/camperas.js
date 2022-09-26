const camperas = [
    {
        nombre : "Campera Anti Social Social Club",
        id : 1,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/campera-antisocialsocial.jpg",
    },
    {
        nombre : "Campera BAPE Shark",
        id : 2,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/campera-bape-shark.jpg",
    },
    {
        nombre : "Campera Palace Black Gradient",
        id : 3,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/campera-palace-black-gradient.jpg",
    },
    {
        nombre : "Campera Supreme X Vansoit",
        id : 4,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/campera-supremeXvansoit.jpg",
    },
    {
        nombre : "Hoodie Champion",
        id : 5,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/hoodie-champion.jpg",
    },
    {
        nombre : "Hoodie Drew",
        id : 6,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/hoodie-drew.jpg",
    },
    {
        nombre : "Hoodie Supreme Box Logo",
        id : 7,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/supreme-boxlogo.jpg",
    },
    {
        nombre : "Campera Nike Triple Color",
        id : 8,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/campera-nike-triple-color.jpg",
    },
    {
        nombre : "Hoodie Lakers",
        id : 9,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/Hoodie-Lakers.png",
    },
    {
        nombre : "Hoodie GAP",
        id : 10,
        precio : 10000,
        imagen: "../imagenes/stocks/camperasyhoodies/Hoodie-GAP.png",
    },
];

const camperasToHTML = (campera) => {
    const camperaMarket = `  
    <div class="stock col-12 col-md-6 col-lg-3 mb-2 mt-2">
    <img class="img-fluid img-stock" src="${campera.imagen}" alt="${campera.nombre}">
    <p>${campera.nombre}</p>
    <p>$${campera.precio}</p>
    <button type="button" id="boton-${campera.id}" class="btn btn-dark">Comprar</button>
    </div>
`;
return camperaMarket;
};

const containerCamperas = document.getElementById("containerCamperas");
for (const campera of camperas) {
    containerCamperas.innerHTML += camperasToHTML(campera);
};

for (const campera of camperas) {
    const boton = document.getElementById(`boton-${campera.id}`);
    boton.addEventListener("click", () =>  Swal.fire(
        'Agregado',
        'al Carrito!',
        'success'
      ) + console.log("agregado al carrito", campera.nombre));
}
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const campera of camperas) {
    guardarLocal(campera.id, JSON.stringify(campera));
}


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(camperas),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
