
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/info',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'info', component: () => import('pages/info.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/contacto.vue') }
    ]
  },
  {
    path: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/games',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'juegos', component: () => import('pages/games/GamesIndex.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
