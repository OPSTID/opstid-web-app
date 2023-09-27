import type { RouteRecordRaw, Router } from "vue-router";
import indexPage from "../views/index.vue"
import tagDetailPage from "../views/tagDetail.vue";

const routes: Array<RouteRecordRaw> = [
        {
            path: "/@tags/",
            component: indexPage
        },
        {
            path: "/@tags/:tagName",
            component: tagDetailPage
        }
]

export default routes