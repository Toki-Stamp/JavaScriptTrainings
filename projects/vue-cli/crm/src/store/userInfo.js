import firebase from 'firebase/app';

export default {
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo: (state, userInfo) => state.userInfo = userInfo,
    clearUserInfo: (state) => state.userInfo = {}
  },
  actions: {
    async fetchUserInfo({dispatch, commit}) {
      try {
        const userID = await dispatch('getUserID');
        const userInfo = (await firebase.database().ref(`/users/${userID}/info`).once('value')).val();

        commit('setUserInfo', userInfo);
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    },
    async updateUserInfo({dispatch, commit, getters}, toUpdate) {
      try {
        const userID = await dispatch('getUserID');
        const updateData = {...getters.userInfo, ...toUpdate};

        await firebase.database().ref(`users/${userID}/info`).update(updateData);
        commit('setUserInfo', updateData);
      } catch (e) {
        commit('setError', e);

        throw e;
      }
    }
  },
  getters: {
    userInfo: state => state.userInfo
  }
}