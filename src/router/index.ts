import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
// the name you use when importing (import Jobs) and the variable name defined within the component (const jobs) can be different. Here's why:
// 1. The Jobs in the import statement is a local variable name that you can freely name.
// 2. The jobs defined inside the component is reactive data used internally by the component and is unrelated to the import name.
import Jobs from "../views/jobs/JobsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    // path: "/about-us",
    name: "about",

    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
