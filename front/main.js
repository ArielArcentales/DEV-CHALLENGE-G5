// Código JS
//URL del backend
const API_URL = 'http://localhost:3000/api/usuarios';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtiener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    try {
      //Envíar los datos al backend
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, correo, contrasena })
      });

      const data = await res.json();

      //Muestra el mensaje de respuesta
      mensaje.textContent = data.mensaje || data.error;
      mensaje.style.color = res.ok ? 'green' : 'red';
    } catch (err) {
      mensaje.textContent = 'Error al conectar con el servidor';
      mensaje.style.color = 'red';
    }
  });
});