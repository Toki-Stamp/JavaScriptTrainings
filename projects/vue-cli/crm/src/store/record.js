import firebase from 'firebase/app';

export default {
  actions: {
    async fetchRecords({dispatch, commit}) {
      try {
        const userID = await dispatch('getUserID');
        const records = (await firebase.database().ref(`/users/${userID}/records`).once('value')).val() || {};

        return Object.keys(records).map(key => ({...records[key], id: key}));
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    async fetchRecord({dispatch, commit}, id) {
      try {
        const userID = await dispatch('getUserID');
        const record = (await firebase.database().ref(`/users/${userID}/records`).child(id).once('value')).val() || {};

        return {...record, id};
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
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