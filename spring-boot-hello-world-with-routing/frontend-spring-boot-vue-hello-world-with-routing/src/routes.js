import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "Hello-World-String",
            component: () => import("./components/HelloWorldString"),
        },
        {
            path: "/hello-world-string",
            name: "Hello-World-String",
            component: () => import("./components/HelloWorldString"),
        },
        {
            path: "/hello-world-bean",
            name: "Hello-World-Bean",
            component: () => import("./components/HelloWorldBean"),
        },
    ]
});

export default router;