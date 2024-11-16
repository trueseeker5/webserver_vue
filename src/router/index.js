// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AuthContainer from '../components/AuthContainer.vue';
import MainPage from '../components/MainPage.vue';
import LoginForm from '@/components/LoginForm.vue';

const routes = [
  { path: '/', component: AuthContainer },
  { path: '/main', component: MainPage },
  { path: '/login', component: LoginForm}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;