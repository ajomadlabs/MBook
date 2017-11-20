<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="hosp-name lato primary-color">{{ hospital }}</p>
                    <br />
                    <p class="dept-name lato primary-color">{{ deptname }}</p>
                    <br />
                    <p class="doctor-name lato primary-color">{{ doctorname }}</p>
                    <br />
                    <p class="title lato primary-color">{{ time }}</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="dateboxcontainer">
                      <p class="heading">Hey!, You have booked for </p>
                      <div class="datebox">{{ date }}</div>
                      <div class="datebox">{{ dayWord }}</div>
                      <div class="datebox">{{ monthWord }}</div>
                      <div class="datebox">{{ year }}</div>
                      <p class="heading-under">Your token no. is - {{ tokenCurr }} </p>
                    </div>
                    <!--<p class="bill-text-token lato primary-color"> Token -  {{ tokenSentence }}</p>-->
                    <div v-on:click="load()" class="but">
                        <MadButton v-bind:msg="Proceed"></MadButton>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import MadButton from '@/components/MadButton'

export default {
  name: 'Deparment',
  components: {
    MadButton
  },
  data () {
    return {
      years: null,
      dayWord: null,
      monthWord: null,
      tokenSentence: null,
      sentence: null,
      Proceed: 'Proceed'
    }
  },
  created: function () {
    this.years = this.year
    if (this.day === 0) {
      this.dayWord = 'Saturday'
    } else if (this.day === 1) {
      this.dayWord = 'Sunday'
    } else if (this.day === 2) {
      this.dayWord = 'Monday'
    } else if (this.day === 3) {
      this.dayWord = 'Tuesday'
    } else if (this.day === 4) {
      this.dayWord = 'Wednesday'
    } else if (this.day === 5) {
      this.dayWord = 'Thursday'
    } else {
      this.dayWord = 'Friday'
    }

    if (this.month === 0) {
      this.monthWord = 'January'
    } else if (this.month === 1) {
      this.monthWord = 'February'
    } else if (this.month === 2) {
      this.monthWord = 'March'
    } else if (this.month === 3) {
      this.monthWord = 'April'
    } else if (this.month === 4) {
      this.monthWord = 'May'
    } else if (this.month === 5) {
      this.monthWord = 'June'
    } else if (this.month === 6) {
      this.monthWord = 'July'
    } else if (this.month === 7) {
      this.monthWord = 'August'
    } else if (this.month === 8) {
      this.monthWord = 'September'
    } else if (this.month === 9) {
      this.monthWord = 'October'
    } else if (this.month === 10) {
      this.monthWord = 'November'
    } else {
      this.monthWord = 'December'
    }
    this.sentence = this.date + '  ' + this.dayWord + ',  ' + this.monthWord + ',  ' + this.years
  },
  computed: {
    hospital: function () {
      return this.$store.getters.getHospName
    },
    deptname: function () {
      return this.$store.getters.getSelectDept
    },
    doctorname: function () {
      return this.$store.getters.getSelectedDoctor
    },
    time: function () {
      return this.$store.getters.getSelectedTime
    },
    year: function () {
      return this.$store.getters.getYear
    },
    month: function () {
      return this.$store.getters.getMonth
    },
    day: function () {
      return this.$store.getters.getDay
    },
    date: function () {
      return this.$store.getters.getDate
    },
    tokenCurr: function () {
      return this.$store.getters.getRandomToken
    }
  },
  methods: {
    load: function () {
      this.$store.commit('setToken', this.tokenCurr)
      this.$router.push({path: '/enternumber'})
    }
  }
}
</script>

<style scoped>

.datebox{
  background-color: #3b2577;
  color: white;
  font-size: 4rem;
  padding: 40px;
  display: inline-block;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  margin: -2px;
}

.heading {
  font-weight: 300;
  font-family: "Lato", sans-serif;
  font-size: 4.5rem;
  padding-top: 5%;
  padding-bottom: 2%; 
}

.heading-under {
  font-weight: 300;
  font-family: "Lato", sans-serif;
  font-size: 6rem;
  padding-top: 3%;
  padding-bottom: 2%; 
}

.dateboxcontainer{
  display: block;
  text-align: center;
}
.hosp-name {
  display: inline-block;
  position: relative;
  font-size: 2.1em;
  top: 25px;
  left: 25px;
  font-weight: 700;
}

.dept-name {
  display: inline-block;
  position: relative;
  top: 12px;
  left: 25px;
  font-size: 1.2em;
  font-weight: 300;
}

.bill-text-token{
  position: absolute;
  display: inline-block;
  left: 5.5%;
  font-size: 1.2em;
  font-weight: 700;
  text-align: right;
}

.doctor-name {
  display: inline-block;
  position: absolute;
  top: 25px;
  right: 40px;
  font-size: 2.1em;
  font-weight: 700;
}

.primary-color {
  color: #3b2577;
}

.secondary-color {
  color: #ffcc00;
}

.lato {
  font-family: "Lato", sans-serif;
}

.title {
  display: inline-block;
  position: absolute;
  top: 65px;
  right: 40px;
  font-size: 1em;
  font-weight: 300;
}

.but {
    padding-top: 20px;
    text-align: center;
}

.card-holder {
	background: white;
	display: flex;
	flex-wrap: wrap;
    margin-top: 3%;
}

.card {
	flex-grow: 1;
	width: 30%;
    max-width: 30%;
	height: 100px;
    background-color: #3b2577;
    margin: 10px;
    color: white;
    transition: all 0.5s ease;
    list-style-type: none;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    font-size: 1.5em;
}

.card:hover, 
.card:active {
    background-color: #ffcc00;
    color: #3b2577;
}

.text{
    display: block;
    margin-top: 11%;
}

</style>