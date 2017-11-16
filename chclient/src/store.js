import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hospital: null,
    departments: null
  },
  getters: {
    // TODO:
  },
  mutations: {
    setHospName: function (state, name) {
      state.hospital = name
    },
    setDepts: function (state, name) {
      state.departments = name
    }
  },
  actions: {
    // TODO:
  }
})
