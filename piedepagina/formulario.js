let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault ();
    let formulario = e.target
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
    console.log(formulario.children[2].value);
    console.log(formulario.children[3].value);
};

let buscador = document.getElementById("search");
buscador.addEventListener("submit", buscar);

function buscar(e) {
    e.preventDefault ();
    let search = e.target
    console.log(search.children[0].value);
}