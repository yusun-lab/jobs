import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobsView from "../views/jobs/JobsView.vue";
import JobDetailsView from "../views/jobs/JobDetailsView.vue";
import NotFound from "../views/NotFound.vue";

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
    component: JobsView,
  },

  {
    path: "/jobs/:id",
    // path: "/jobs/:slug",
    name: "JobDetails",
    component: JobDetailsView,
    // equivalent to props: (route) => route.params
    props: true,
  },

  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },

  // catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
