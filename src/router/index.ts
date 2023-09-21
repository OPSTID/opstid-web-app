import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

/* Pages for OPSTID Core */
import homePage from '../views/HomePage.vue'
import todoListPage from "../views/to-do-list.vue"
import settingsPage from '../views/settings.vue'
import appsPage from "../views/apps.vue"
import qrReaderPage from "../views/qrReader.vue"
import notFoundPage from "../views/not-found.vue"

/* Routes for apps */
// @docs
import docsAppRoutes from "../apps/@docs/routes"
// @univ-tt
import univttAppRoutes from "../apps/@univ-tt/routes"

let routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: homePage
  },
  {
    path: "/to-do-list",
    component: todoListPage
  },
  {
    path: "/settings",
    component: settingsPage
  },
  {
    path: "/apps",
    component: appsPage
  },
  {
    path: "/qr-reader",
    component:qrReaderPage
  },
  
]

// add apps routes
routes = routes.concat(docsAppRoutes)
routes = routes.concat(univttAppRoutes)

// add 404 page
routes.push({ path: '/:catchAll(.*)', component: notFoundPage })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
