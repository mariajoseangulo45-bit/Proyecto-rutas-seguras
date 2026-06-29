
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


let editId=null;
const imagen=document.getElementById("imagen");
const contenidoTarjeta=document.getElementById("contenidoTarjeta");
const modal=document.getElementById("modal");
const formulario=document.getElementById("form");
const btnCerrar=document.getElementById("cerrar");
const btnNuevo=document.getElementById("btnNuevo");
const nombre=document.getElementById("nombre");
const precio=document.getElementById("precio");
const descr=document.getElementById("descr");
const buscar=document.getElementById("buscar");
const eventLog=document.getElementById("eventLog");



function logEvento(text){
    eventLog.textContent=text;
    const event = new CustomEvent("app:event-log",{
        detail: {message: text},
        bubbles: true
    });
    document.dispatchEvent(event); 
}

btnNuevo.addEventListener("click", function(){
    editId=null; 
    formulario.reset(); 
    modal.classList.add("show");
    logEvento("Modal abierto");
});

btnCerrar.addEventListener("click", function(){
    modal.classList.remove("show");
    logEvento("Modal cerrado con cancelar");
})


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data={
        id: editId || Date.now(),
        nombre: nombre.value,
        precio: precio.value,
        descr: descr.value,
        imagen: imagen.value
    }

    if(editId){
        usuarios=usuarios.map(u=>
            u.id === editId ? data : u
        )
    }else{
        usuarios.push(data);
        logEvento("producto creado");
        
    }
    modal.classList.remove("show");
    console.log("usuarios", usuarios);
    render(usuarios);
})


function render(data_usuarios){
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    contenidoTarjeta.innerHTML = ""; 
    data_usuarios.forEach(element => {
        contenidoTarjeta.innerHTML += `
    <article class="card">
        <img src="${element.imagen}">
        <div class="contenido">
            <h2>NOMBRE: ${element.nombre}</h2>
            <p>HORARIO: ${element.precio}</p>
            <p>RUTA: ${element.descr}</p>
            <button class="editar" data-id="${element.id}">Editar</button>
            <button class="eliminar" data-id="${element.id}">Eliminar</button>
        </div>
    </article>
        `
    });
    logEvento("producto renderizada");
}

buscar.addEventListener("input", (e)=>{
    const texto=e.target.value.toLowerCase();
    const filtrados = usuarios.filter(u=>
        u.nombre.toLowerCase().includes(texto) ||
        u.precio.toLowerCase().includes(texto) 
    )
    render(filtrados);
    logEvento("filtrados");
})

contenidoTarjeta.addEventListener("click", (e)=>{
    const id= Number(e.target.dataset.id);
    const botonEditar = e.target.closest(".editar");
    if(e.target.classList.contains("eliminar")){
        const eliminar=confirm("¿Está sefuro que desea eliminar?");
        if(eliminar){
        usuarios= usuarios.filter(u => u.id !== id);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        render(usuarios);
        logEvento("Usuario eliminado")
        }else{
            alert("OPERACÓN CANCELADA!")
        }
    }
    if(e.target.classList.contains("editar")){
        const id = Number(botonEditar.dataset.id);
        const user= usuarios.find(u => u.id === id);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        nombre.value=user.nombre;
        editId=id;
        modal.classList.add("show");
        logEvento("usuario en edicción....")
    }

})


document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") {
        modal.classList.remove("show");
        logEvento("modal cerrado")
    }
})

render(usuarios);


