import { RouteRecordRaw } from "vue-router"

import indexPage from "../views/index.vue"
import detailPage from "../views/detail.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/@docs/",
        component: indexPage
    },
    {
        path: "/@docs/:appId/:articleName",
        component: detailPage
    }
]

export default routes