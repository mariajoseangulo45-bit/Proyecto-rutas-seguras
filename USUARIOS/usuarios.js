
const listaUsuarios = document.getElementById("listaUsuarios");

const contenidoTarjeta =document.getElementById("contenidoTarjeta");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const nombre=document.getElementById("nombre");
const telefono=document.getElementById("telefono");
const conductor=document.getElementById("seleccionarConductor")
const formulario = document.getElementById("form");
let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];


const modalEditar = document.getElementById("modalEditar");
const formEditar = document.getElementById("formEditar");

const editarNombre = document.getElementById("editarNombre");
const editarTelefono = document.getElementById("editarTelefono");
const editarConductor = document.getElementById("editarConductor");

const cerrarEditar = document.getElementById("cerrarEditar");

let editId = null;


function renderUsuarios(){
    listaUsuarios.innerHTML = "";
    usuarios.forEach((element)=>{
        listaUsuarios.innerHTML += `
        <div class="fila">
            <img src="${element.imagen}" class="foto">
            <div class="info">
                <h2>
                    NOMBRE: ${element.nombre}
                </h2>
                <p>
                    <strong>HORARIO:</strong> ${element.precio}
                </p>
                <p>
                    <strong>RUTA:</strong> ${element.descr}
                </p>
            </div>
        </div>
        `;
    });

}
renderUsuarios();

//plegable opciones 

const seleccionarConductor = document.getElementById("seleccionarConductor");
function cargarConductores(){
    usuarios.forEach((user)=>{
        seleccionarConductor.innerHTML += `
        <option value="${user.nombre}">
            ${user.nombre}
        </option>
        `;
    });
}
cargarConductores();

//formulario estudiantes 

function render(data_estudiantes){

    contenidoTarjeta.innerHTML = "";

    // =========================
    // AGRUPAR POR CONDUCTOR
    // =========================

    const grupos = {};

    data_estudiantes.forEach((element) => {

        const conductor = element.seleccionarConductor;

        if(!grupos[conductor]){
            grupos[conductor] = [];
        }

        grupos[conductor].push(element);

    });

    // =========================
    // CREAR LAS CARDS
    // =========================

    for(let conductor in grupos){

        contenidoTarjeta.innerHTML += `

            <div class="grupo-conductor">

                <h1 class="titulo-conductor">
                    🚐 ${conductor}
                </h1>

                <div class="contenedor-estudiantes">

                    ${grupos[conductor].map((element) => `

                        <article class="card">

                            <div class="contenido">

                                <h2>
                                    Nombre: ${element.nombre}
                                </h2>

                                <p>
                                    Telefono: ${element.telefono}
                                </p>

                                <button 
                                    class="editar"
                                    data-id="${element.id}"
                                >
                                    Editar
                                </button>

                                <button 
                                    class="eliminar"
                                    data-id="${element.id}"
                                >
                                    Eliminar
                                </button>

                            </div>

                        </article>

                    `).join("")}

                </div>

            </div>

        `;
    }
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = {
        id: Date.now(),
        nombre: nombre.value,
        telefono: telefono.value,
        seleccionarConductor: conductor.value
    };
    estudiantes.push(data);
    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );
    render(estudiantes);
    formulario.reset();
});

render(estudiantes);


contenidoTarjeta.addEventListener("click", (e) => {

    const id = Number(e.target.dataset.id);
    if (e.target.classList.contains("eliminar")) {

        const confirmar = confirm("¿Está seguro que desea eliminar?");

        if (confirmar) {

            estudiantes = estudiantes.filter(
                u => u.id !== id
            );

            localStorage.setItem(
                "estudiantes",
                JSON.stringify(estudiantes)
            );

            render(estudiantes);

        } else {

            alert("OPERACIÓN CANCELADA!");

        }

    }
    if (e.target.classList.contains("editar")) {

        const estudiante = estudiantes.find(
            u => u.id === id
        );

        editId = id;

        editarNombre.value = estudiante.nombre;
        editarTelefono.value = estudiante.telefono;
        editarConductor.value = estudiante.seleccionarConductor;

        modalEditar.classList.add("show");
    }

});

formEditar.addEventListener("submit", (e) => {

    e.preventDefault();

    const index = estudiantes.findIndex(
        u => u.id === editId
    );

    estudiantes[index] = {

        ...estudiantes[index],

        nombre: editarNombre.value,

        telefono: editarTelefono.value,

        seleccionarConductor: editarConductor.value

    };

    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );

    render(estudiantes);

    modalEditar.classList.remove("show");

});

cerrarEditar.addEventListener("click", () => {

    modalEditar.classList.remove("show");

});

// API DEL CLIMA DOM
const climaBox =document.getElementsByClassName("clima-box")
const temperatura = document.getElementById("temperatura");
const descripcionClima = document.getElementById("descripcionClima");
const iconoClima = document.getElementById("iconoClima");

console.log("temperatura:", temperatura);
console.log("descripcion:", descripcionClima);
console.log("icono:", iconoClima);


async function obtenerClima(){

    try{

        const apiKey = "558dcb653f0bca6d96023b56a6d77517";

        const respuesta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Bucaramanga&appid=${apiKey}&units=metric&lang=es`
        );

        const datos = await respuesta.json();

        console.log(datos);

        if(datos.cod !== 200){

            temperatura.textContent = "No disponible";
            descripcionClima.textContent = datos.message;

            return;
        }

        temperatura.textContent = Math.round(datos.main.temp) + "°C";
        descripcionClima.textContent = datos.weather[0].description;
        const icono = datos.weather[0].icon;
        iconoClima.src =`https://openweathermap.org/img/wn/${icono}@2x.png`;

     

    }catch(error){

        temperatura.textContent = "Error";

        console.warn(error);
    }
}

obtenerClima();

