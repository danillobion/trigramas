import { createStore } from 'vuex';

const store = createStore({
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        async login({ commit }, dadosDeAutenticacao) {
            const token = dadosDeAutenticacao;
            commit('setToken', token);
        },
    },
    getters: {
        getToken: (state) => state.token,
    },
});

export default store;