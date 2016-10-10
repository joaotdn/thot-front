<template>
    <div class="container">
        <div class="row">
            <div id="form-login" class="col-sm-12 col-md-6 col-md-push-3">
                <figure>
                    <img src="src/assets/logo.png">
                </figure>
                <div class="panel panel-default">
                    <div class="panel-heading"><strong>Login</strong></div>
                    <div class="panel-body">
                        <form @submit.prevent="getLogin">
                            <div class="form-group">
                                <label for="user_email">E-mail</label>
                                <input type="email" id="user_email" class="form-control" v-model="login.email" placeholder="E-mail">
                            </div>

                            <div class="form-group">
                                <label for="user_pass">Senha</label>
                                <input type="password" id="user_pass" class="form-control" v-model="login.password" placeholder="Senha">
                            </div>

                            <button type="submit" :disabled="login.email === '' || login.password === ''" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { loginUrl, userUrl, getHeader } from '../../config'

    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: ''
                }
            }
        },

        methods: {
            getLogin() {

                const login = {
                    email: this.login.email,
                    password: this.login.password
                }

                this.$http.post(loginUrl,
                    {
                        'email' : login.email,
                        'password': login.password
                    }
                ).then((response) => {
                    /**
                     * A requisição retorna um token
                     */
                    if(response.status === 200) {
                        this.setToken(response.body.token)

                        this.$http.get(userUrl, {headers: getHeader()})
                                .then((response) => {

                                    //Definir dados do usuário logado
                                    const payload = {
                                        name: response.body.user.name,
                                        email: response.body.user.email,
                                        id: response.body.user.id
                                    }

                                    this.changeUser(payload)
                                    this.userLogged(true)
                                    this.$router.push({name: 'dashboard'})

                                }, (response) => { console.log('erro ao retornar dados do usuário') })
                    } else {
                        this.setToken('')
                        this.userLogged(false)
                        this.$router.push({name: 'login'})
                    }

                }, (response) => {
                    this.setToken('')
                    console.log('Usuário ou senha inválida')
                })
            },

            ...mapActions(['changeUser','setToken','userLogged'])
        },
    }
</script>

<style>
    #form-login {
        -webkit-transform: translateY(50%);
        -moz-transform: translateY(50%);
        -ms-transform: translateY(50%);
        -o-transform: translateY(50%);
        transform: translateY(50%);
    }

    #form-login figure {
        text-align: center;
        margin-bottom: 30px;
    }
</style>