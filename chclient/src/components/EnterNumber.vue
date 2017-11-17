<template>
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="container-fluid">
            <div class="row">
                <p class="heading">Hey, what's your number! </p>
                <form v-on:submit.prevent>
                    <input v-model="value" type="text">
                    <a v-show="valid" class="lato yellow"> Enter a valid Indian Number </a>
                    <br />
                    <div v-on:click="loadNumber" class="mb">
                        <MadButton v-bind:msg="Msg"></MadButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import HospitalService from '@/services/HospitalService'
import MadButton from '@/components/MadButton'
import FormInput from '@/components/FormInput'

export default {
  name: 'Welcome',
  data () {
    return {
      value: null,
      Msg: 'Submit',
      valid: false,
      book: null

    }
  },
  components: {
    MadButton,
    FormInput
  },
  methods: {
    loadNumber: function () {
      // otp function goes here
      var PhoneNumber = require('awesome-phonenumber')
      var pn = new PhoneNumber(this.value, 'IN')
      if (pn.isValid()) {
        this.$store.commit('setNumber', this.value)
        this.bookAppoint()
        this.$router.push({path: '/enterotp'})
      } else {
        this.value = null
        this.valid = true
      }
    },
    bookAppoint: async function () {
      console.log('Hi')
      try {
        console.log('Hello')
        this.book = (await HospitalService.mobileotp({
          hosp: this.hospital,
          doc: this.doctor,
          dept: this.dept,
          token: this.token,
          mobno: this.mobNo,
          year: this.year,
          month: this.month,
          date: this.date,
          verified: false
        })).then(data => {
          this.book = data.data
          // console.log('Hello')
          // console.log(this.book)
          // this.$router.push({path: '/enterotp'})
        })
      } catch (error) {
        // console.log(error)
        this.error = error.response.data.error
      }
    }
  },
  computed: {
    hospital: function () {
      console.log(this.$store.getters.getHospName)
      return this.$store.getters.getHospName
    },
    doctor: function () {
      console.log(this.$store.getters.getSelectedDoctor)
      return this.$store.getters.getSelectedDoctor
    },
    dept: function () {
      console.log(this.$store.getters.getSelectDept)
      return this.$store.getters.getSelectDept
    },
    token: function () {
      console.log(this.$store.getters.getToken)
      return this.$store.getters.getToken
    },
    mobNo: function () {
      console.log(this.$store.getters.getNumber)
      return this.$store.getters.getNumber
    },
    year: function () {
      console.log(this.$store.getters.getYear)
      return this.$store.getters.getYear
    },
    month: function () {
      console.log(this.$store.getters.getMonth)
      return this.$store.getters.getMonth
    },
    day: function () {
      console.log(this.$store.getters.getDay)
      return this.$store.getters.getDay
    },
    date: function () {
      console.log(this.$store.getters.getDate)
      return this.$store.getters.getDate
    }
  }
}
</script>

<style scoped>

.heading {
  font-weight: 300;
  font-family: "Lato", sans-serif;
  font-size: 4.5rem;
  padding-top: 10%;
  text-align: center;
}

input,
select {
  width: 100%;
  padding: 4px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  border: none;
  border-bottom: 3px solid #3b2577;
  text-align: center;
  font-size: 2.5em;
  color: #3b2577;
}

.lato{
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}

.yellow{
    color: #ffcc00;
}

.mb{
    padding-top: 25px;
}
form{
    width: 25%;
    text-align: center;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 15vh;
}

a:hover{
    text-decoration-style: none;
    text-decoration-line: none;
}
.lato{
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}

.yellow{
    color: #ffcc00;
}

.spc-link{
    cursor: pointer;
}

a{
    font-weight: 700;
    display: block;
    margin-top: -5px;
    right: 0;
    position: relative;
    text-align: right;
}
</style>