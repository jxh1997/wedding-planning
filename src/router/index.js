import Vue from "vue";
import Router from "vue-router";

// 引入组件
import Home from "@/components/IndexComponet/Home";
import Signin from "@/components/SigninComponet/Signin";
import Signup from "@/components/SignupComponet/Signup";
import Menu from "@/components/MenuComponet/Menu";
import Type from "@/components/TypeComponet/Type";
import Dress from "@/components/DressComponet/Dress";
import Graphy from "@/components/GraphyComponet/Graphy";
import Personal from "@/components/PersonalComponet/Personal";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
        path: "/Signin",
        component: Signin
    },
    {
        path: "/signup",
        component: Signup
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/choice",
      component: Menu
    },
    {
      path: "/type",
      component: Type
    },
    {
      path: "/dress",
      component: Dress
    },
    {
      path: "/graphy",
      component: Graphy
    },
    {
      path: "/personal",
      component: Personal
    }
  ]
});
