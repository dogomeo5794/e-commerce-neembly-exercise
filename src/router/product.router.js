const routes = [
    {
        path: "",
        name: "products",
        component: () => import("/src/pages/products/ProductListPage.vue")
    },
    {
        path: "products/:productId",
        name: "product-details",
        component: () => import("/src/pages/products/ProductDetailPage.vue")
    }
]

export default routes;