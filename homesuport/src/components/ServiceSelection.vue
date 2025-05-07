<template>
  <div>
    <h1>Seleccionar Servicio</h1>
    <ul>
      <li v-for="service in services" :key="service.id">
        <button @click="selectService(service)">{{ service.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, name: 'Reparación de pantalla' },
        { id: 2, name: 'Cambio de batería' },
        { id: 3, name: 'Reparación de cámara' },
      ],
    };
  },
  methods: {
    selectService(service) {
      console.log('Servicio seleccionado:', service.name);
      // Aquí puedes manejar la selección del servicio
    },
  },
};
</script>