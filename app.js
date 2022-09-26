let buscador = document.getElementById("search");
buscador.addEventListener("submit", buscar);

function buscar(e) {
    e.preventDefault ();
    let search = e.target
    console.log(search.children[0].value);
};