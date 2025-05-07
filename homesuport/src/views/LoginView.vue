<template>
  <div class="fullscreen">
    <div class="container">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="Escribe tu correo electrónico" />

        <label for="password">Contraseña</label>
        <input type="password" id="password" placeholder="Escribe tu contraseña" />

        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        <a href="/recover-password">¿Olvidaste tu contraseña?</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      // Aquí puedes agregar lógica adicional de autenticación si es necesario
      this.$router.push('/services'); // Redirige a la vista de servicios
    },
  },
};
</script>

<style scoped>
.fullscreen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
  padding: 20px;
}

.container {
  background-color: #fff;
  color: #000;
  padding: 60px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 800px; /* MÁS GRANDE */
}

h1 {
  font-size: 40px; /* MUCHO MÁS GRANDE */
  margin-bottom: 40px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}

input {
  padding: 18px;
  margin-bottom: 25px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 20px;
}

button {
  padding: 18px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}

button:hover {
  background-color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  display: block;
  margin-top: 20px;
  text-align: center;
}

a:hover {
  text-decoration: underline;
}
</style>
