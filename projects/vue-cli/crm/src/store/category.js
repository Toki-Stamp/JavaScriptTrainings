import firebase from 'firebase/app';

export default {
  actions: {
    async fetchCategories({dispatch, commit}) {
      try {
        const userID = await dispatch('getUserID');
        const categories = (await firebase.database().ref(`/users/${userID}/categories`).once('value')).val() || {};

        return Object.keys(categories).map(key => ({...categories[key], id: key}));
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    async fetchCategory({dispatch, commit}, id) {
      try {
        const userID = await dispatch('getUserID');
        const category = (await firebase.database().ref(`/users/${userID}/categories`).child(id).once('value')).val() || {};

        return {...category, id};
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    async createCategory({dispatch, commit}, {title, limit}) {
      try {
        const userID = await dispatch('getUserID');
        const category = await firebase.database().ref(`/users/${userID}/categories`).push({title, limit});

        return {title, limit, id: category.key};
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    async updateCategory({dispatch, commit}, {title, limit, id}) {
      try {
        const userID = await dispatch('getUserID');
        await firebase.database().ref(`/users/${userID}/categories`).child(id).update({title, limit});

      } catch (e) {
        commit('setError', e);

        throw e;
      }
    }
  }
}