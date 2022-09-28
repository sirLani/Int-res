import { createRouter, createWebHistory } from "vue-router";

// You do not need to do any routing for this test! :))
// That said, we appreciate the curiosity

// Views
import Homepage from "../views/Homepage";
import Explorepage from "../views/ExplorePage.vue";
import PageNotFoundPage from "../views/PageNotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
    meta: { title: "Home - Risidio" },
  },

  {
    path: "/explore",
    name: "explore",
    component: Explorepage,
    meta: { title: "Explore" },
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
