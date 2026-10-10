const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    alert("Consulta enviada");
    formulario.reset();
});
