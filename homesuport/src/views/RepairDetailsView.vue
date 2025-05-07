<template>
  <div class="repair-details-container">
    <header class="header">
      <h1>Detalles de Reparación</h1>
    </header>
    <main class="repair-details">
      <div class="payment-card">
        <div class="card-header">
          <img src="../assets/pago.png" alt="Reparación" />
        </div>
        <div class="card-body">
          <h2>Orden #12345</h2>
          <p class="date">Fecha de realización: <strong>02/29/2025</strong></p>
          <p class="price">Valor a pagar: <strong>$50.000</strong></p>
          <button class="pay-button" @click="handlePayment">Pagar</button>
        </div>
      </div>
      <div class="recipient-details">
        <h3>Detalles del Cliente</h3>
        <div class="detail-item">
          <span class="label">Nombre:</span>
          <span class="value">Benancio Aramburo</span>
        </div>
        <div class="detail-item">
          <span class="label">Email:</span>
          <span class="value">tumadre69@gmail.com</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    handlePayment() {
      this.$router.push("/payment-confirmation"); // Redirige a la vista de confirmación de pago
    },
  },
};
</script>

<style scoped>
/* General container styling */
.repair-details-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  text-align: center; /* Centra el texto */
}

/* Header styling */
.header h1 {
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  display: flex;
  text-align: center;
  margin-bottom: 30px;
}
header {
  background-color: #e9ecef;
}

/* Payment card styling */
.payment-card {
  background-color: #f9f9f9; /* Fondo claro */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding: 20px;
}

.card-header img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 8px;
}

.card-body h2 {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
}

.card-body .date,
.card-body .price {
  font-size: 18px;
  color: #555555;
  margin-bottom: 15px;
}

.pay-button {
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

.pay-button:hover {
  background-color: #0056b3;
}

/* Recipient details styling */
.recipient-details {
  background-color: #f9f9f9; /* Fondo claro */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.recipient-details h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
}

.detail-item:last-child {
  border-bottom: none;
}

.label {
  font-size: 16px;
  font-weight: bold;
  color: #555555;
}

.value {
  font-size: 16px;
  color: #777777;
}

/* Responsive design */
@media (max-width: 768px) {
  .repair-details-container {
    padding: 20px;
  }

  .card-body h2 {
    font-size: 20px;
  }

  .pay-button {
    font-size: 14px;
  }

  .recipient-details h3 {
    font-size: 18px;
  }
}
</style>
