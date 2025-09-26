// main.js



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = form.email.value;
        const name = form.name.value;
        const subject = form.subject.value;
        const message = form.message.value;

        if (validateForm(email, name, subject, message)) {
            // Aquí se puede agregar la lógica para enviar los datos al servidor
            console.log('Formulario enviado:', { email, name, subject, message });
            form.reset();
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    });

    function validateForm(email, name, subject, message) {
        return email && name && subject && message;
    }
});
// Aquí puedes agregar más funcionalidades si es necesario
// Por ejemplo, validaciones adicionales o interacciones con el usuario
// También puedes modularizar el código si el proyecto crece
// usando funciones o clases según sea necesario.
// Recuerda siempre probar el código en diferentes navegadores para asegurar la compatibilidad
// y el correcto funcionamiento de las funcionalidades implementadas.
// Además, considera agregar comentarios para mejorar la legibilidad del código
// y facilitar el mantenimiento futuro.
// Finalmente, asegúrate de seguir las mejores prácticas de seguridad
// al manejar datos de usuarios, especialmente en formularios de contacto.
// Esto incluye la validación y sanitización de entradas para prevenir ataques como XSS o inyección de código.
// ¡Buena suerte con tu proyecto!
// ¡No dudes en pedir ayuda si tienes alguna duda o necesitas más funcionalidades!
// ¡Feliz codificación!



