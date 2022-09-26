const chombas = [
    {
        nombre : "Chomba Aber&Crombie Gris",
        id : 1,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-abercrombie-gris.jpg",
    },
    {
        nombre : "Chomba Aber&Crombie White",
        id : 2,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-abercrombie-white.jpg",
    },
    {
        nombre : "Chomba Adidas White",
        id : 3,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-adidas-white.jpg",
    },
    {
        nombre : "Chomba Nike Blue Intense",
        id : 4,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-blue-intense.jpg",
    },
    {
        nombre : "Chomba Lacoste Logo White",
        id : 5,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-lacoste-logo.jpg",
    },
    {
        nombre : "Chomba Lacoste Blue Lines",
        id : 6,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-lacoste.jpg",
    },
    {
        nombre : "Chomba Puma Gris",
        id : 7,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-puma-gris.jpg",
    },
    {
        nombre : "Chomba Tommy Hilfiger",
        id : 8,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-th.jpg",
    },
    {
        nombre : "Chomba Ferrari",
        id : 9,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-ferrari.png",
    },
    {
        nombre : "Chomba BMW",
        id : 10,
        precio : 10000,
        imagen : "../imagenes/stocks/chombas/chomba-bmw.png",
    },
];
const chombasToHTML = (chomba) => {
    const chombaMarket = `  
    <div class="stock col-12 col-md-6 col-lg-3 mb-2 mt-2">
    <img class="img-fluid img-stock" src="${chomba.imagen}" alt="${chomba.nombre}">
    <p>${chomba.nombre}</p>
    <p>$${chomba.precio}</p>
    <button type="button" id="boton-${chomba.id}" class="btn btn-dark">Comprar</button>
    </div>
`;
return chombaMarket;
};
const containerChombas = document.getElementById("containerChombas");
for (const chomba of chombas) {
    containerChombas.innerHTML += chombasToHTML(chomba);
};

for (const chomba of chombas) {
    const boton = document.getElementById(`boton-${chomba.id}`);
    boton.addEventListener("click", () => Swal.fire(
        'Agregado',
        'al Carrito!',
        'success'
      ) + console.log("agregado al carrito", chomba.nombre));
}

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const chomba of chombas) {
    guardarLocal(chomba.id, JSON.stringify(chomba));
}


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(chombas),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));