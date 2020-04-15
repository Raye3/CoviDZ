import Vue from "vue";
import VueRouter from "vue-router";
import Algeria from "./views/algeria";
import Instructions from "./views/instructions";
import World from "./views/world";
import Home from './views/home'
// import About from './views/about'
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/instructions",
      name: "instructions",
      component: Instructions
    },
    {
      path: "/algeria",
      name: "algeria",
      component: Algeria
    },
    {
      path: "/world",
      name: "world",
      component: World
    }
  ]
});
