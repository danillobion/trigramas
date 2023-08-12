<template>
    <!-- <router-link to="/teste">Ir para a tela de teste</router-link> -->
    <div class="container">
        <div class="row d-flex justify-content-center" style="padding-top: 100px;">
            <div class="col-sm-12 col-md-4">
                <div class="card shadow" style="border-radius: 12px;">
                    <div class="card-header card-header-trigramas">
                        <div class="form-group mt-4" style="text-align: center;">
                            <h3 style="margin-top: 8px; font-weight: bold;">ABC</h3>
                            <h5 style="margin-top: 8px; font-weight: 500;">Panorama da Malária</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- <form @submit.prevent="entrar"> -->
                            <div class="form-group mb-3">
                                <label for="email" class="text-trigramas">E-mail</label>
                                <input v-model="email" type="text" class="form-control" id="email" placeholder="Digite seu e-mail">
                            </div>
                            <div class="form-group mb-1">
                                <label for="senha" class="text-trigramas">Senha</label>
                                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Digite sua senha">
                            </div>
                            <div class="form-check mb-3">
                                <input v-model="permanecer_conectado" class="form-check-input" type="checkbox" value="" id="permanecer-conectado">
                                <label class="form-check-label text-trigramas" for="permanecer-conectado">
                                    Permanecer conectado
                                </label>
                            </div>
                        <!-- </form> -->
                        <button class="btn btn-dark shadow w-100 mb-3" type="button" @click="entrar()">Entrar</button>
                        <div class="d-flex justify-content-center">
                            <a href="#">Esqueci minha senha</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="position: absolute; bottom: 0; margin-left: 23px; margin-bottom: 15px;">
        <h6 style="font-weight: normal; font-size: 14px;">Sistema desenvolvido por Fulano de Tal em Parceria com a Universidade ABC</h6>
    </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      senha: '',
      permanecer_conectado: false,
    };
  },
  methods: {
    entrar() {
        // if (this.email === 'admin@trigramas.com' && this.senha === '1234') {
        //     this.$emit('login-success'); // Emitir um evento de login bem-sucedido
        // } else {
        //     alert('Credenciais inválidas');
        // }
        this.$router.push('/teste');
    },
  },
};
</script>