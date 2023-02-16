import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/VistaInicio.vue'
import favoritos from '../views/VistaFavoritos.vue'
import productos from '../views/VistaProductos.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: favoritos
  },
  {
    path: '/productos',
    name: 'productos',
    component: productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
