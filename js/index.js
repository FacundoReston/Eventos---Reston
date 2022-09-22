let boton = document.getElementById("btn");
let email = document.getElementById("email");
let fecha = document.getElementById("date");
let formulario = document.getElementById("form");

boton.addEventListener("click", respuestaClick);
function respuestaClick () {
    console.log("Formulario enviado")
}

email.addEventListener(`input`, () => {
    console.log(email.value);
})

fecha.addEventListener(`input`, () => {
    console.log(fecha.value)
})

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let form = e.target;
    console.log(form.children[0].value, "'Direccion de email'");
    console.log(form.children[1].value, "'Fecha del turno'");
}



