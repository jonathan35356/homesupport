<template>
  <div class="container">
    <h1>Recuperar Contraseña</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Escribe tu correo electrónico" />

      <div class="button-group">
        <button type="button" class="cancel-button">Cancelar</button>
        <button type="submit" class="submit-button">Recuperar contraseña</button>
      </div>
    </form>
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

input[type="email"] {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.cancel-button {
  padding: 10px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.cancel-button:hover {
  background-color: #bbb;
}

.submit-button {
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.submit-button:hover {
  background-color: #333;
}
</style>

