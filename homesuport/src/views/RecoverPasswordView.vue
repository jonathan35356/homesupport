<template>
  <div class="fullscreen">
    <div class="container">
      <h1>Recuperar Contraseña</h1>
      <form @submit.prevent="handleRecoverPassword">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="Escribe tu correo electrónico" />

        <div class="button-group">
          <button type="button" class="cancel-button" @click="goToLogin">Cancelar</button>
          <button type="submit" class="submit-button">Recuperar contraseña</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleRecoverPassword() {
      // Aquí puedes agregar lógica adicional para la recuperación de contraseña si es necesario
      this.$router.push('/login'); // Redirige a la página de inicio de sesión
    },
    goToLogin() {
      this.$router.push('/login'); // Redirige a la página de inicio de sesión al cancelar
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
  max-width: 800px;
}

h1 {
  font-size: 40px;
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

input[type="email"] {
  padding: 18px;
  margin-bottom: 25px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.cancel-button,
.submit-button {
  flex: 1;
  padding: 18px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.cancel-button {
  background-color: #ccc;
  color: #000;
}

.cancel-button:hover {
  background-color: #bbb;
}

.submit-button {
  background-color: #000;
  color: #fff;
}

.submit-button:hover {
  background-color: #333;
}
</style>
