import firebase from 'firebase/app';

export default {
  actions: {
    async createRecord({dispatch, commit}, record) {
      try {
        const userID = await dispatch('getUserID');

        return firebase.database().ref(`/users/${userID}/records`).push(record);
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    }
  }
}