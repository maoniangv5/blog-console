import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    isCollapse: true
}

const mutations = {
    changeCollapse(state){
        state.isCollapse = !state.isCollapse;
    }
}

export default new Vuex.Store({
    state, mutations
});