import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})