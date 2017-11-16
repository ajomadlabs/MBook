import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hospital: null,
    departments: null,
    selectedDept: null
  },
  getters: {
    getDeptList: function (state) {
      return state.departments
    },
    getHospName: function (state) {
      return state.hospital
    },
    getSelectDept: function (state) {
      return state.selectedDept
    }
  },
  mutations: {
    setHospName: function (state, name) {
      state.hospital = name
    },
    setDepts: function (state, name) {
      state.departments = name
    },
    setSelectDept: function (state, name) {
      state.selectedDept = name
    }
  },
  actions: {
    // TODO:
  }
})
