const seleccionarConductor = document.getElementById("seleccionarConductor");
const ruta1=document.getElementById("ruta1");


function cargarConductores(){
    seleccionarConductor.innerHTML = `
        <option value="">
            Seleccione un conductor
        </option>
    `;
    usuarios.forEach((user)=>{

        seleccionarConductor.innerHTML += `
            <option value="ruta1">
                ruta1
            </option>
        `;
        editarConductor.innerHTML += `
            <option value="${user.ruta1}">
                ${user.ruta1}
            </option>
        `;
    });
}
cargarConductores();