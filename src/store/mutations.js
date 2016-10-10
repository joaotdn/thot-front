export default {

    'CHANGE_USER' (state, payload) {
        state.user = payload
    },

    'USER_LOGGED' (state, payload) {
        state.userLogged = payload
    },

    'SET_TEACHERS' (state, payload) {
        state.users = payload
    },

    'SET_TOKEN' (state, payload) {
        state.token = payload
    },

}