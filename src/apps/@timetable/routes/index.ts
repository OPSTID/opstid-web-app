import { RouteRecordRaw } from "vue-router"

import indexPage from "../views/index.vue"
import timetablePage from "../views/timetable.vue"
import editPage from "../views/edit.vue"
import detailPage from "../views/detail.vue"
import pastPage from "../views/past.vue"

/* define @univ-tt app routes */
const routes: Array<RouteRecordRaw> = [
    {
        path: "/@timetable/",
        component: indexPage
    },
    {
        path: "/@timetable/timetable",
        component: timetablePage
    },
    {
        path:"/@timetable/edit/:day/:period",
        component: editPage
    },
    {
        path:"/@timetable/detail/:day/:period",
        component: detailPage
    },
    {
        path:"/@timetable/past",
        component: pastPage
    }
]

export default routes