<!-- filepath: c:\Users\jjavi\Desktop\homesuport\homesuport\src\views\HomeView.vue -->
<template>
  <div class="home-container">
    <header class="header">
      <div class="logo">
        <h1>HomeSupport</h1>
      </div>
      <nav class="nav">
        <a href="/login" class="btn">Iniciar sesión</a>
        <a href="/register" class="btn">Registrarse</a>
      </nav>
    </header>
    <main class="main-content">
      <h2>Bienvenido a HomeSupport</h2>
      <p>Resolvemos los problemas de tus dispositivos móviles sin que salgas de tu casa.</p>
      <div class="image-grid">
        <img src="../assets/celulares.png" alt="celulares" />
        <img src="../assets/auriculares.png" alt="auriculares" />
        <img src="../assets/celular.png" alt="celular" />
        <img src="../assets/persona.png" alt="Imagen 4" />
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Estilos para la vista principal */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #1a1a1a;
  color: #fff;
}

.home-container {
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
}

.logo h1 {
  color: #fff;
  margin: 0;
}

.nav .btn {
  color: #000000;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 5px;
}

.nav .btn:hover {
  color: #fff;
  background-color: #555;
}

.main-content {
  padding: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.image-grid img {
  width: 100%;
  border-radius: 10px;
}
</style>