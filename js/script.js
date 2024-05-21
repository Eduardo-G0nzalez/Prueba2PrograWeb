function validarFormulario() {
    const nombre = document.getElementById("from_name");
    const nombreError = document.getElementById("nombreError");
    const email = document.getElementById("email_id");
    const emailError = document.getElementById("emailError");
    const mensaje = document.getElementById("message");
    const mensajeError = document.getElementById("mensajeError");

    // Resetear mensajes de error
    nombreError.textContent = "";
    emailError.textContent = "";
    mensajeError.textContent = "";

    // Validar el campo nombre
    if (nombre.value.trim() === "") {
        nombreError.textContent = "Por favor ingresa tu nombre";
    }

    // Validar el campo email
    if (email.value.trim() === "") {
        emailError.textContent = "Por favor ingresa tu correo electrónico";
    } else if (!validarEmail(email.value.trim())) {
        emailError.textContent = "Por favor ingresa un correo electrónico válido";
    }

    // Validar el campo mensaje
    if (mensaje.value.trim() === "") {
        mensajeError.textContent = "Por favor ingresa tu mensaje";
    }

    // Se envía el formulario si no hay errores
    if (nombreError.textContent === "" && emailError.textContent === "" && mensajeError.textContent === "") {
        enviarCorreo(nombre.value.trim(), email.value.trim(), mensaje.value.trim());
    }
}

// Función para validar el formato de correo electrónico
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Enviar el correo
function enviarCorreo(nombre, email, mensaje) {
    const serviceID = 'default_service';
    const templateID = 'template_h62rnrq';

    const message = `Hola Eduardo,\n\nTienes un nuevo mensaje de ${nombre}:\n\n${mensaje}\n\n${email}\n\nSaludos.`;

    emailjs.send(serviceID, templateID, {
        to_name: 'Eduardo',
        from_name: nombre,
        message: message
    })
    .then(function(response) {
        console.log("Correo electrónico enviado correctamente", response);
        alert("Mensaje enviado correctamente");
        document.getElementById("form").reset();
    }, function(error) {
        console.error("Error al enviar el correo electrónico", error);
        alert("Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.");
    });
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    validarFormulario();
});
