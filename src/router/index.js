import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About Us' }
  },
  {
    path:'/products',
    name: 'products',
    component: () => import('@/views/ProductsPage.vue'),
    meta: { title: 'Products' }
  },
  {
    path:'/checkout',
    name: 'checkout',
    component: () => import('@/views/CheckoutView.vue'),
    meta: { title: 'Checkout' }
  },
  {
    path:'/contact',
    name: 'contact',
    component: () => import('@/views/ContactUs.vue'),
    meta: { title: 'Contact Us' }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `Vue Cart - ${to.meta.title}`;
  } else {
    document.title = 'Vue Cart';
  }
  next();
});

export default router
