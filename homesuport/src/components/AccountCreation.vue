<template>
  <div>
    <h1>Crear Cuenta</h1>
    <form>
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="email" />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" />

      <label for="phone">Número de Teléfono:</label>
      <input type="tel" id="phone" v-model="phone" />

      <button type="button" @click="createAccount">Crear Cuenta</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      phone: '',
    };
  },
  methods: {
    createAccount() {
      console.log('Cuenta creada:', this.email, this.phone);
      // Aquí puedes integrar Firebase Auth para registrar al usuario
    },
  },
};
</script>