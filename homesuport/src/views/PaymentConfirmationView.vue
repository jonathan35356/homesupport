<template>
  <div class="payment-confirmation-container">
    <header class="header">
      <h1>Pago Confirmado</h1>
    </header>
    <main class="confirmation-details">
      <div class="confirmation-card">
        <img src="../assets/pagoregistrado.png" alt="Pago Exitoso" />
        <h2>¡Gracias por tu pago!</h2>
        <p>Tu orden <strong>#12345</strong> ha sido procesada exitosamente.</p>
        <p>Fecha de pago: <strong>{{ paymentDate }}</strong></p>
        <button class="back-button" @click="goBackToServices">Volver a Servicios</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentDate: new Date().toLocaleDateString(), // Fecha actual
    };
  },
  methods: {
    goBackToServices() {
      this.$router.push('/services'); // Redirige a la vista de servicios
    },
  },
};
</script>

<style scoped>
/* General container styling */
.payment-confirmation-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  text-align: center;
}

/* Header styling */
.header h1 {
  font-size: 36px;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 30px;
}

/* Confirmation card styling */
.confirmation-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.confirmation-card img {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.confirmation-card h2 {
  font-size: 24px;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 10px;
}

.confirmation-card p {
  font-size: 18px;
  color: #555555;
  margin-bottom: 15px;
}

.back-button {
  padding: 12px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>