import Vue from 'vue'
import Router from 'vue-router'
import Land from '@/components/Land'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import SearchHospitals from '@/components/Hospitals'
import Department from '@/components/Departments'
import Doctor from '@/components/Doctor'
import PickDate from '@/components/PickDate'
import Time from '@/components/Time'
import HistoryBooking from '@/components/History'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main Page',
      component: Land
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/hospitals',
      name: 'Hospitals',
      component: SearchHospitals
    },
    {
      path: '/departments',
      name: 'Departments',
      component: Department
    },
    {
      path: '/doctor',
      name: 'Doctor',
      component: Doctor
    },
    {
      path: '/pickadate',
      name: 'Pick a Date',
      component: PickDate
    },
    {
      path: '/timings',
      name: 'Time',
      component: Time
    },
    {
      path: '/history',
      name: 'History',
      component: HistoryBooking
    },
    {
      path: '/view',
      name: 'View',
      component: View
    }
  ]
})
