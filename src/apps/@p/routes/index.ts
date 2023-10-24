import type { RouteRecordRaw, Router } from "vue-router";
import indexPage from "../views/index.vue"
import mainProfilePage from "../views/mainProfile.vue"
import changeMainProfilePage from "../views/changeMainProfile.vue"
import requiredPage from "../views/required.vue"
import createPage from "../views/create.vue"

const routes: Array<RouteRecordRaw> = [
        {
            path: "/@p/",
            component: indexPage
        },
        {
            path: "/@p/main-profile/",
            component: mainProfilePage
        },
        {
            path: "/@p/main-profile/change/",
            component: changeMainProfilePage
        },
        {
            path: "/@p/required",
            component: requiredPage
        },
        {
            path: "/@p/create",
            component: createPage
        }
]

export default routes