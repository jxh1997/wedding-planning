import Vue from "vue";
import Router from "vue-router";

// 引入组件
import Home from "@/components/IndexComponet/Home";
import Signin from "@/components/SigninComponet/Signin";
import Signup from "@/components/SignupComponet/Signup";
import Menu from "@/components/MenuComponet/Menu";
import Type from "@/components/TypeComponet/Type";


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
    }
  ]
});
