import Vue from 'vue';
import Vuex from 'vuex';
import { getCookie, setCookie } from '../utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: getCookie(),
        isLogin: false,
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
    },

    actions: {
        setUserName({ commit }, user) {
            commit('setUserName' , user);
        },
        removeUser({ commit }) {
            commit('removeUser');
        },
    },

    modules: {

    },
})