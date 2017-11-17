import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    email: null,
    bookings: null,
    hospital: null,
    departments: null,
    selectedDept: null,
    doctorList: null,
    selectedDoctor: null,
    selectedDoctorTime: null,
    selectedDay: null,
    selectedDate: null,
    selectedMonth: null,
    selectedYear: null,
    token: null,
    number: null,
    selectToken: null
  },
  getters: {
    getName: function (state) {
      return state.name
    },
    getEmail: function (state) {
      return state.email
    },
    getDeptList: function (state) {
      return state.departments
    },
    getHospName: function (state) {
      return state.hospital
    },
    getSelectDept: function (state) {
      return state.selectedDept
    },
    getDoctorList: function (state) {
      return state.doctorList
    },
    getSelectedDoctor: function (state) {
      return state.selectedDoctor
    },
    getSelectedTime: function (state) {
      return state.selectedDoctorTime
    },
    getDate: function (state) {
      return state.selectedDate
    },
    getDay: function (state) {
      return state.selectedDay
    },
    getYear: function (state) {
      return state.selectedYear
    },
    getMonth: function (state) {
      return state.selectedMonth
    },
    getTotalToken: function (state) {
      return state.token
    },
    getRandomToken: function (state) {
      // console.log(state.token)
      return parseInt(Math.ceil(Math.random() * (state.token - 1) + 1))
    },
    getToken: function (state) {
      // console.log(state.token)
      return state.selectToken
    },
    getNumber: function (state) {
      return state.number
    }
  },
  mutations: {
    setName: function (state, name) {
      state.name = name
    },
    setEmail: function (state, email) {
      state.email = name
    },
    setBookings: function (state, bookings) {
      state.bookings = bookings
    },
    setHospName: function (state, name) {
      state.hospital = name
    },
    setDepts: function (state, name) {
      state.departments = name
    },
    setSelectDept: function (state, name) {
      state.selectedDept = name
    },
    setDoctorList: function (state, list) {
      state.doctorList = list
    },
    setSelectedDoctor: function (state, name) {
      state.selectedDoctor = name
    },
    setSelectedDoctorTime: function (state, time) {
      state.selectedDoctorTime = time
    },
    setDate: function (state, date) {
      state.selectedDate = date
    },
    setDay: function (state, day) {
      state.selectedDay = day
    },
    setYear: function (state, year) {
      state.selectedYear = year
    },
    setMonth: function (state, month) {
      state.selectedMonth = month
    },
    setSelectedDoctorToken: function (state, token) {
      state.token = token
    },
    setNumber: function (state, number) {
      state.number = number
      console.log(number)
    },
    setToken: function(state, token) {
      state.selectToken = token
    }
  },
  actions: {
    // TODO:
  }
})
