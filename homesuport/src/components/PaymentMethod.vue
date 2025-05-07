<template>
  <div>
    <h1>Elegir Método de Pago</h1>
    <form>
      <label for="payment">Método de Pago:</label>
      <select id="payment" v-model="paymentMethod">
        <option value="credit_card">Tarjeta de Crédito</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Efectivo</option>
      </select>

      <button type="button" @click="confirmPayment">Confirmar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: '',
    };
  },
  methods: {
    confirmPayment() {
      console.log('Método de pago seleccionado:', this.paymentMethod);
      // Aquí puedes manejar la lógica de pago
    },
  },
};
</script>