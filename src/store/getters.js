export default {

    /**
     * Retorna o estado do login
     * @param state
     * @returns {string}
     */
    user_email: state => {
        return `${state.user.email}`
    },

    user_token: state => {
        return `${state.token}`
    },

    user_logged: state => {
        return `${state.userLogged}`
    },

    get_users: state => {
        return `${state.users}`
    },
}