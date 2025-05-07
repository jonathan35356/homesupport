<template>
  <div class="container">
    <h1>Iniciar Sesión</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Escribe tu correo electrónico" />

      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="Escribe tu contraseña" />

      <button type="submit">Iniciar sesión</button>
    </form>
    <p>
      <a href="/recover-password">¿Olvidaste tu contraseña?</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 50px auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-size: 14px;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

a:hover {
  text-decoration: underline;
}
</style>