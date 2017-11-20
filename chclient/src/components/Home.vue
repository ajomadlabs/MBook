<template>
    <div>
        <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <div class="container-fluid">
              <div class="left">
                <a class="white lato" v-on:click="loadAppoints">View Bookings</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <div class="container-fluid">
              <router-link to="/hospitals"><div class="right">
                <a class="lato white">Book</a>
              </div></router-link>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import BookingService from '@/services/BookingService'
export default {
  name: 'Welcome',
  data () {
    return {
      viewDetails: null,
      bookings: []
    }
  },
  methods: {
    loadAppoints: function () {
      this.viewAppoint()
      this.$router.push({path: '/history'})
    },
    loadDate: function () {
      var q = new Date()
      var m = q.getMonth()
      var d = q.getDate()
      var y = q.getFullYear()
      var date = new Date(y, m, d)
      return date
    },
    viewAppoint: async function () {
      try {
        this.viewDetails = (await BookingService.bookingDetails({
          verified: true
        })).data
        for (var i = 0; i < this.viewDetails.current.length; i++) {
          this.bookings[i] = {
            hospname: this.viewDetails.current[i].hospname,
            doctor: this.viewDetails.current[i].doctor,
            dept: this.viewDetails.current[i].dept,
            token: this.viewDetails.current[i].token,
            day: this.viewDetails.current[i].day,
            month: this.viewDetails.current[i].month,
            year: this.viewDetails.current[i].year,
            date: '',
            active: true,
            cancel: false,
            id: this.viewDetails.current[i]._id
          }
          this.bookings[i].date = this.bookings[i].year + '-' + this.bookings[i].month + '-' + this.bookings[i].day
          this.bookings[i].date = new Date(this.bookings[i].date)
          if (this.bookings[i].date > this.loadDate()) {
            this.bookings[i].active = true
          } else {
            this.bookings[i].active = false
          }
        }
        // console.log(this.bookings[0])
        // console.log(this.viewDetails.name)
        // console.log(this.viewDetails.email)
        // console.log(this.viewDetails.current[0]._id)
        // Made A Change
        this.$store.commit('setBookingList', this.bookings)
        this.$store.commit('setName', this.viewDetails.name)
        this.$store.commit('setEmail', this.viewDetails.email)
      } catch (error) {
        // console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
a{
  position: relative;
  vertical-align: middle;
  text-align: center;
  top: 45%;
  text-decoration: none;
}

.container-fluid{
  margin-left: -15px;
  margin-right: -15px;
}
.lato{
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 30px;
}

.mad-full-height{
  height: 100vh;
  widows: 100vw;
  display: block;
}

.white{
  color: white;
  vertical-align: middle;
  text-align: center;
}

.left{
  height: 100vh;
  background-color: #3b2577;
  display: block;
  cursor: pointer;
  transition: all 0.6s ease;
  
}

.left > a {
  margin-left: 25%;
  transition: all   s ease;
}

.left:hover
{
  background-color: #ffcc00;
  text-decoration: none;
}
.left:hover > a {
  color: #3b2577;
  text-decoration: none;
}

.right{
  height: 100vh;
  background-color: #3b2577;
  display: block;
  cursor: pointer;
  transition: all 0.6s ease;
}
.right:hover {
  background-color: #ffcc00;
}
.right > a {
  transition: all 0.6s ease;
}
.right:hover > a {
  color: #3b2577;
}

</style>