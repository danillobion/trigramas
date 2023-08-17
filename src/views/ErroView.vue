<template>
    <div class="container">
        <div class="row d-flex justify-content-center" style="padding-top: 100px;">
            <div class="col-sm-12 col-md-4 mt-5">
                <div class="card shadow" style="border-radius: 12px;">
                    <div class="card-header card-header-trigramas">
                        <h5>Erro</h5>
                    </div>
                    <div class="card-body" style="text-align: center;">
                        <h6 class="text-trigramas mb-5">Página não encontrada!</h6>
                        <button class="btn btn-dark w-100" @click="voltar()">Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    voltar() {
        this.$router.push('/visao-geral');
    },
  },
};
</script>