import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict   : true,
    state    : {
        types: [
            {code: 1, name: 'Капитальное строение'},
            {code: 2, name: 'Изолированное помещение'},
            {code: 3, name: 'Земельный участок'},
            {code: 4, name: 'Незавершенное законсервированное капитальное строение'},
            {code: 5, name: 'Машино-место'},
            {code: 6, name: 'ПИК'}
        ]
    },
    getters  : {
        typesGetter: state => {
            return state.types.map(type => {
                return {code: type.code, name: '**' + type.name + '**'};
            });
        }
    },
    mutations: {
        mutateCodes: (state, payload) => {
            console.log({payload});
            state.types.forEach(type => {
                type.code += state.types.length;
            });
        }
    },
    actions  : {
        mutateCodes: (context, payload) => {
            context.commit('mutateCodes', {...payload, action: 'payload'});
        }
    }
});