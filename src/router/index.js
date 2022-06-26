import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";
import NProgress from 'nprogress';
import store from "@/store/index";
import NotFound from "@/components/NotFound.vue";
import NetworkIssue from "@/components/NetworkIssue.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("event/fetchEvent", routeTo.params.id).then(event => {
          routeTo.params.event = event;
          next();
        })
        .catch(error => {
          if(error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "event" } })
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "*",
    redirect: { name: "404", params: { resource: "page" } },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
