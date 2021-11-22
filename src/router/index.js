import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: () => import("../views/CadastroUser.vue")
  },  
  {
    path: "/carros",
    name: "Carros",
    component: () => import("../views/Carro.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
