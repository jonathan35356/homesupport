import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import RecoverPasswordView from '../views/RecoverPasswordView.vue';
import ServicesView from '../views/ServicesView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/recover-password',
    name: 'RecoverPassword',
    component: RecoverPasswordView,
  },
  {
    path: '/services',
    name: 'servicesView',
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;