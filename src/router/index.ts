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
    path: "/products",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  }
];

const router = new VueRouter({
  mode: "hash", // use history for better urls
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    let name = "Food Calculator";
    if (to.name != null) {
      name = `${name} | ${to.name}`;
    }

    document.title = name;
  });
});

export default router;
