<template>
    <div class="col-sm-12 col-md-10 col-md-offset-1">
        <p>
            <a class="btn btn-lg btn-block btn-success send-projects">Enviar projetos</a>
        </p>
        <div class="bs-component">
            <div class="list-group">
                <h3>
                    <a href="#" class="list-group-item active">
                        Lista de orientadores
                    </a>
                </h3>
                <a href="#" class="list-group-item" v-for="user in $store.state.users"><span class="glyphicons glyphicons-user"></span> {{ user.name }} <small class="text-muted">({{  user.email }})</small></a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { teacherUrl, getHeader } from '../../config'

    export default {
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$http.get(teacherUrl, {headers: getHeader()})
                        .then((res) => {
                            vm.listTeachers(res.body.users)
                        }, (res) => {
                            next({
                                path: '/login'
                            })
                            window.location.reload()
                        })
            })
        },
        methods: {
            listTeachers(a) {
                this.setTeachers(a)
            },
            ...mapActions(['setTeachers'])
        },
        computed: {
            ...mapGetters({
                professores: 'get_users'
            })
        }
    }
</script>

<style>
    .send-projects {
        font-size: 18px;
    }
</style>