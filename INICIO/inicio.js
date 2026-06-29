const admi = document.getElementById("admi");

admi.addEventListener("click", () => {

    const clave = "1234";

    const contraseña = prompt("Ingrese la contraseña");

    if(contraseña === clave){
        window.open("/CONDUCTORES/index.html", "_blank");
    }else{
        alert("Contraseña incorrecta");
    }
});