import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/VistaInicio.vue'
import favoritos from '../views/VistaFavoritos.vue'
import productos from '../views/VistaProductos.vue'

const routes = [
  {
    path: '/',
    name: 'VistaInicio',
    component: inicio
  },
  {
    path: '/favoritos',
    name: 'VistaFavoritos',
    component: favoritos
  },
  {
    path: '/productos',
    name: 'VistaProductos',
    component: productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
