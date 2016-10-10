<template v-show="">
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link :to="{ name: 'dashboard' }" class="navbar-brand">
                        <img src="src/assets/logo-mini.png" width="40">
                    </router-link>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Orientadores <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link :to="{name: 'orientadores'}">Todos</router-link>
                                </li>
                                <li><a href="#">Adicionar novo</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projetos <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Adicionar novo</a></li>
                                <li class="divider"></li>
                                <li>
                                    <router-link :to="{name: 'projetos'}">Todos</router-link>
                                </li>
                                <li><a href="#">Pendentes</a></li>
                                <li><a href="#">Alocados</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div class="navbar-form navbar-right">
                        <div class="btn-group">
                            <button class="btn btn-primary">Olá, {{ $store.state.user.name }}</button>
                            <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Minha conta</a></li>
                                <li><a href="#">Adicionar usuário</a></li>
                            </ul>
                        </div>

                        <button @click="userLogout" class="btn btn-warning">Sair</button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container">
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { userUrl, getHeader} from '../../config'

    export default {
        methods: {
            userLogout() {
                this.setToken('')
                this.userLogged(false)
                this.$router.push({name: 'login'})
            },
            ...mapActions(['setToken','userLogged'])
        }
    }
</script>

<style>
    .navbar-brand {
        padding: 10px;
        padding-top: 5px;
    }
    ul.nav a {
        font-size: 16px;
    }

    /*.fade-enter-active, .fade-leave-active {*/
        /*transition: opacity .5s*/
    /*}*/
    /*.fade-enter, .fade-leave-active {*/
        /*opacity: 0;*/
    /*}*/
</style>