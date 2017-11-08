import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Declarative from "@/components/Declarative";
import Conditionals from "@/components/Conditionals";
import Form from "@/components/Form";
import Computed from "@/components/Computed";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "dashboard",
      component: Home
    },
    {
      path: '/home',
      name: "home",
      component: Home
    },
    {
      path: '/declarative',
      name: "declarative",
      component: Declarative
    },
    {
      path: "/conditionals",
      name: "conditionals",
      component: Conditionals
    },
    {
      path: "/form",
      name: "form",
      component: Form
    },
    {
      path: "/computed",
      name: "computed",
      component: Computed
    }
  ]
})
