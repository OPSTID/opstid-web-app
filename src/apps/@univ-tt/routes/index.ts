import { RouteRecordRaw } from "vue-router"

import indexPage from "../views/index.vue"
import timetablePage from "../views/timetable.vue"
import editPage from "../views/edit.vue"
import detailPage from "../views/detail.vue"
import pastPage from "../views/past.vue"

/* define @univ-tt app routes */
const routes: Array<RouteRecordRaw> = [
    {
        path: "/@univ-tt/",
        component: indexPage
    },
    {
        path: "/@univ-tt/timetable",
        component: timetablePage
    },
    {
        path:"/@univ-tt/edit/:day/:period",
        component: editPage
    },
    {
        path:"/@univ-tt/detail/:day/:period",
        component: detailPage
    },
    {
        path:"/@univ-tt/past",
        component: pastPage
    }
]

export default routes