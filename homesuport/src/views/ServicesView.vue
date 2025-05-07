<template>
  <div class="services-container">
    <header class="header">
      <h1>SERVICIOS</h1>
    </header>
    <main class="services-grid">
      <div class="service-card">
        <img src="../assets/reparacion.png" alt="Reparación" />
        <h2>REPARACIÓN</h2>
        <p>Diagnosticamos fallos, sustituimos piezas dañadas y optimizamos el funcionamiento.</p>
      </div>
      <div class="service-card">
        <img src="../assets/personalizado.png" alt="Personalizado" />
        <h2>PERSONALIZADO</h2>
        <p>Configuramos ajustes, instalamos aplicaciones y adaptamos el dispositivo a tus necesidades.</p>
      </div>
      <div class="service-card">
        <img src="../assets/virus.png" alt="Eliminación de Virus" />
        <h2>ELIMINACIÓN DE VIRUS</h2>
        <p>Detectamos, eliminamos malware y reforzamos la seguridad para proteger vuestros datos.</p>
      </div>
      <div class="service-card">
        <img src="../assets/limpieza.png" alt="Limpieza" />
        <h2>LIMPIEZA</h2>
        <p>Eliminamos polvo y residuos para mejorar rendimiento y prolongar la vida útil.</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}

.header h1 {
  font-size: 48px;
  margin-bottom: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.service-card {
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

.service-card img {
  width: 100%;
  max-width: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.service-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #00bcd4;
}

.service-card p {
  font-size: 16px;
  color: #ccc;
}
</style>