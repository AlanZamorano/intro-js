//variables
const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputNombre');
const inputModel = document.querySelector('#inputCategoria');
const inputTemporada = document.querySelector('#inputTemporada');
const boxPokemon = document.querySelector('#box-pokemon');

//objeto para rellenar la busqueda
const datosBusqueda = {
        nombre: '',
        categoria: '',
        temporada: ''
}

//
document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(pokemones);

});

formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();
    
    datosBusqueda.nombre = inputName.value.toLowerCase();
    datosBusqueda.categoria = inputCategoria.value;
    datosBusqueda.temporada = inputTemporada.value;

    console.log(datosBusqueda);
    
    filtrarPokemones();

    formBusqueda.reset();
})

function mostrarHTML(pokemones) {
    pokemones.forEach(pokemon => { //se itera el array
        const { nombre, categoria, temporada, descripcion, image } = pokemon; //variable que guarda los datos que necesitaremos
        const cardPokemon = document.createElement('div');//que elemento html se quiere crear
        cardPokemon.classList.add('col', 'mb-3');//se le agregan las clases al div
        cardPokemon.innerHTML = `
        <div class="card bg-secondary flex-row rounded-3">
                        <div class="w-50">
                            <img src="${image}" class="img-fluid object-fit" alt="">
                        </div>
                        <div class="card-body w-50">
                            <h2 class="card-text m-0 text-capitalize">${nombre}</h2>
                            <p class="card-text mb-3 text-capitalize">${categoria}</p>
                            <p class="card-text mb-0 text-capitalize">Primera aparicion: Temporada ${temporada}</p>
                            <p class="card-text mb-0 ">${descripcion}</p>
                        </div>
                    </div>
        `//contenido interno

        boxPokemon.appendChild(cardPokemon);//adjunta un nodo hijo a un nodo padre
    });
}

function filtrarPokemones(){

    limpiarHTML();
    const resultado = pokemones.filter(filtrarName).filter(filtrarCategoria).filter(filtrarTemporada);
    
    if(resultado.length){
        mostrarHTML(resultado);
    }
    else{
        sinResultado('No se encontró tu pokemon');
    }

const hayContenido = Object.values(datosBusqueda).filter((e) => e)

    if(hayContenido.length){
        mostrarHTML(resultado);
    }
    else{
        sinResultado('Tienes que especificar tu búsqueda');
    }
}

function sinResultado(mensaje){
    limpiarHTML();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger', 'text-white', 'border-danger', 'p-4', 'text-center');
    sinResultado.textContent = mensaje;

    boxPokemon.parentElement.appendChild(sinResultado);
}

function limpiarHTML(){
    while(boxPokemon.firstChild){
        boxPokemon.firstChild.remove();
    }
}

function filtrarName(pokemon){
    const {nombre} = datosBusqueda;

    if(nombre){
        return pokemon.nombre == nombre;
    }

    return pokemon;
}

function filtrarCategoria(pokemon){
    const {categoria} = datosBusqueda;

    if(categoria){
        return pokemon.categoria == categoria;
    }

    return pokemon;
}

function filtrarTemporada(pokemon){
    const {temporada} = datosBusqueda;

    if(temporada){
        return pokemon.temporada == temporada;
    }

    return pokemon;
}