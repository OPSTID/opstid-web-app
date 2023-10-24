import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

/* Pages for OPSTID Core */
import homePage from '@/views/HomePage.vue'
import todoListPage from "@/views/to-do-list.vue"
import settingsPage from '@/views/settings.vue'
import searchPage from "@/views/search.vue"
import appsPage from "@/views/apps.vue"
import sortAppListPage from "@/views/sort-app-list.vue"
import qrReaderPage from "@/views/qrReader.vue"
import aboutPage from "@/views/about.vue"
import notFoundPage from "../views/not-found.vue"

/* Routes for apps */
// @docs
import docsAppRoutes from "@/apps/@docs/routes"
// @univ-tt
import univttAppRoutes from "@/apps/@timetable/routes"
// @tags
import tagsAppRoutes from "@/apps/@tags/routes"
// @p
import pAppRoutes from "@/apps/@p/routes"

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
    path: "/search",
    component: searchPage
  },
  {
    path: "/apps",
    component: appsPage
  },
  {
    path:"/apps/sort-app-list",
    component: sortAppListPage
  },
  {
    path: "/qr-reader",
    component:qrReaderPage
  },
  {
    path: "/about",
    component: aboutPage
  }
  
]

// add apps routes
routes = routes
.concat(docsAppRoutes)
.concat(univttAppRoutes)
.concat(tagsAppRoutes)
.concat(pAppRoutes)

// add 404 page
routes.push({ path: '/:catchAll(.*)', component: notFoundPage })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
