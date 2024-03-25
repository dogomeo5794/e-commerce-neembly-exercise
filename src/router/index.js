import { createRouter, createWebHistory } from "vue-router";
import ProductRoutes from "./product.router.js";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "",
            component: () => import("/src/layouts/MainLayout.vue"),
            children: ProductRoutes
        }
    ]
})