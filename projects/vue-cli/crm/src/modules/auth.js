import firebase from 'firebase/app';

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      (dispatch && commit) && console.log({dispatch, commit});

      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    async register({dispatch, commit}, {email, password, name}) {
      (dispatch && commit) && console.log({dispatch, commit});

      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const userID = await dispatch('getUserID');
        await firebase.database().ref(`/users/${userID}/info`).set({
          bill: 1000,
          name
        });
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    getUserID() {
      const currentUser = firebase.auth().currentUser;

      return currentUser ? currentUser.uid : null;
    },
    async logout() {
      await firebase.auth().signOut();
    }
  }
}