<template>
  <div>
    <h1>Recuperar Contraseña</h1>
    <form>
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="email" />

      <button type="button" @click="recoverPassword">Recuperar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    recoverPassword() {
      console.log('Recuperar contraseña para:', this.email);
      // Aquí puedes integrar Firebase Auth para recuperación de contraseña
    },
  },
};
</script>