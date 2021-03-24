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
import Details from "@/components/DetailsComponet/Details";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/signin",
      component: Signin,
      meta:{
        showNav: false   // 是否显示header和footer
      }
    },
    {
      path: "/signup",
      component: Signup,
      meta:{
        showNav: false  
      }
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/choice",
      component: Menu,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
    },
    {
      path: "/choice/details",
      component: Details,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
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
      component: Personal,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
    }
  ]
});