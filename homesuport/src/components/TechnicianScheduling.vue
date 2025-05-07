<template>
  <div>
    <h1>Modificar Horario</h1>
    <form>
      <label for="schedule">Horario:</label>
      <input type="text" id="schedule" v-model="schedule" />

      <button type="button" @click="updateSchedule">Actualizar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schedule: '',
    };
  },
  methods: {
    updateSchedule() {
      console.log('Horario actualizado:', this.schedule);
      // Aquí puedes guardar el horario en Firebase
    },
  },
};
</script>