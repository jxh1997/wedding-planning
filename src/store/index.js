import Vue from 'vue';
import Vuex from 'vuex';
import { getCookie, setCookie } from '../utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: getCookie(),
        isLogin: false,
        baseUrl: "http://152.136.229.70:8011/test",  // 图片地址
    },

    mutations: {
        setUserName(state, user) {
            setCookie(user);
            state.user = user;
            state.isLogin = true;
        },

        removeUser(state) {
            // clearCookie();
            console.log(state);
            state.user = '';
            state.isLogin = false;
          },

        uploadAvatar(state, path) {
            state.user.imgpath = path;
        },


    },

    actions: {
        setUserName({ commit }, user) {
            commit('setUserName' , user);
        },
        removeUser({ commit }) {
            commit('removeUser');
        },
        // 上传头像
        uploadAvatar({ commit }, path) {
            commit('uploadAvatar', path);
        },
    },

    modules: {

    },
})