// Este archivo contiene el código JavaScript que puede manejar la interactividad de la página.

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();
            const nombre = formulario.nombre.value;
            const email = formulario.email.value;
            const asunto = formulario.asunto.value;
            const mensaje = formulario.mensaje.value;

            // Aquí puedes agregar la lógica para manejar el envío del formulario
            console.log('Formulario enviado:', { nombre, email, asunto, mensaje });

            // Limpiar el formulario después de enviar
            formulario.reset();
            alert('Gracias por tu mensaje, nos pondremos en contacto pronto.');
        });
    }
});