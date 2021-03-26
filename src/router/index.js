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
import Information from "@/components/PersonalComponet/MenuContent/Information";
import Collection from "@/components/PersonalComponet/MenuContent/Collection";
import Yuyue from "@/components/PersonalComponet/MenuContent/Yuyue";



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
      meta: {
        showNav: false   // 是否显示header和footer
      }
    },
    {
      path: "/signup",
      component: Signup,
      meta: {
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
      component: Type,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
    },
    {
      path: "/dress",
      component: Dress,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
    },
    {
      path: "/graphy",
      component: Graphy,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
    },
    {
      path: "/personal",
      component: Personal,
      meta: {
        isAuthRequired: true   // 是否需要登录
      },
      children: [
        {
          path: "/personal/information",
          component: Information,
          meta: {
            isAuthRequired: true   // 是否需要登录
          },
        },
        {
          path: "/personal/collection",
          component: Collection,
          meta: {
            isAuthRequired: true   // 是否需要登录
          },
        },
        {
          path: "/personal/yuyue",
          component: Yuyue,
          meta: {
            isAuthRequired: true   // 是否需要登录
          },
        }
      ]
    }
  ]
});