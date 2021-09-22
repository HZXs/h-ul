import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/home.vue";
const Home = () => import("../components/home.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
