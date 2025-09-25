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