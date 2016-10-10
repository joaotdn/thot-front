<template>
  <div>

    <div class="top-bar">
      <!--<router-view name="projects"></router-view>-->
      <!--<router-link :to="{name: 'usuario', params: { id: 1 }}">Usuario</router-link>-->
      <!--<router-link :to="{name: 'projetos'}" >Projetos</router-link>-->
    </div>

    <div class="wrapper" id="home-wrapper">
      <transition>
        <router-view name="login" v-show="!$store.state.userLogged"></router-view>
        <router-view v-show="$store.state.userLogged"></router-view>
      </transition>
    </div>
  </div>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import { loginUrl, userUrl, getHeader } from '../config'

  export default {

    beforeMount() {
      this.$http.get(userUrl, {headers: getHeader()})
              .then((res) => {
                const payload = {
                  name: res.body.user.name,
                  email: res.body.user.email,
                  id: res.body.user.id
                }
                this.userLogged(true)
                this.setToken(window.localStorage.getItem('id_token'))
                this.changeUser(payload)
                this.$router.push({name: 'dashboard'})
              }, (res) => {
                this.$router.push({name: 'login'})
              })
    },
    methods: {
      ...mapActions(['setToken','changeUser','userLogged'])
    },
    computed: {
      ...mapGetters({
        token: 'user_token',
        logged: 'user_logged'
      })
    }
  }
</script>

