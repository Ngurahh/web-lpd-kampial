import { createRouter, createWebHistory } from 'vue-router'
import berandaPage from '../pages/berandaPage.vue'
import profilPage from '../pages/profilPage.vue'
import layananPage from '../pages/layananPage.vue'
import galeriPage from '../pages/galeriPage.vue'
import kontakPage from '../pages/kontakPage.vue'
import formulirPinjamanPage from '../pages/formulirPinjamanPage.vue'
import masukPage from '../pages/masukPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: berandaPage
    },
    {
      path: '/profil',
      name: 'profil',
      component: profilPage
    },
    {
      path: '/layanan',
      name: 'layanan',
      component: layananPage
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: galeriPage
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: kontakPage
    },
    {
      path: '/formulir-pinjaman',
      name: 'formulirPinjaman',
      component: formulirPinjamanPage
    },
    {
      path: '/masuk',
      name: 'masuk',
      component: masukPage
    }
  ]
})

export default router
