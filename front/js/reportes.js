const API_URL = 'http://localhost:3000/api/reportes';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reporteForm');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const descripcion = document.getElementById('descripcion').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const hora_riesgo = document.getElementById('hora_riesgo').value;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descripcion, ubicacion, hora_riesgo })
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