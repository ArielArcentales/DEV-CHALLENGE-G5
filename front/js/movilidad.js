const API_URL = 'http://localhost:3000/api/movilidad';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('movilidadForm');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const punto_salida = document.getElementById('punto_salida').value;
    const destino = document.getElementById('destino').value;
    const horario = document.getElementById('horario').value;
    const cupos = parseInt(document.getElementById('cupos').value);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, tipo, punto_salida, destino, horario, cupos })
      });

      const data = await res.json();
      mensaje.textContent = data.mensaje || data.error;
      mensaje.style.color = res.ok ? 'green' : 'red';
    } catch (err) {
      mensaje.textContent = 'Error al conectar con el servidor';
      mensaje.style.color = 'red';
    }
  });
});