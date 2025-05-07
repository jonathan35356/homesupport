<template>
  <div>
    <h1>Calificación del Servicio</h1>
    <form>
      <label for="rating">Calificación:</label>
      <input type="number" id="rating" v-model="rating" min="1" max="5" />

      <label for="comments">Comentarios:</label>
      <textarea id="comments" v-model="comments"></textarea>

      <button type="button" @click="submitRating">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      comments: '',
    };
  },
  methods: {
    submitRating() {
      console.log('Calificación enviada:', this.rating, this.comments);
      // Aquí puedes guardar la calificación en Firebase
    },
  },
};
</script>