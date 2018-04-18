import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    isCollapse: true,
    isScrollbar: false,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
}

const mutations = {
    changeCollapse(state) {
        state.isCollapse = !state.isCollapse;
    },
    changeInnerWidth(state, arr) {
        state.innerWidth = arr[0];
        state.innerHeight = arr[1];
    },
    changeScrollbar(state, isScrollbar) {
        state.isScrollbar = isScrollbar;
    }
}

export default new Vuex.Store({
    state, mutations
});