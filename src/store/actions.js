import Vue from 'vue'
import { userUrl, getHeader } from '../config'

export default {
    setToken (context, payload) {
        context.commit('SET_TOKEN', payload)
        localStorage.setItem('id_token',payload)
    },

    changeUser (context, payload) {
        context.commit('CHANGE_USER', payload)
        //console.log(context.state.user)
    },

    userLogged (context, payload) {
        context.commit('USER_LOGGED', payload)
        //console.log(context.state.userLogged)
    },

    setTeachers (context, payload) {
        context.commit('SET_TEACHERS', payload)
    },
}