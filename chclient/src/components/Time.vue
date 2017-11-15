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
                    <p class="title lato primary-color">{{ title }}</p>
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
                    <ul class="card-holder">
                        <li class="card" v-for="time in timings"> <div class="text">{{ time.val }}</div></li>
                    </ul>

                    <div class="bill-text-region">
                        <p class="bill-text lato primary-color"> Booking on - {{ sentence }}</p>
                        <p class="bill-text-token lato primary-color"> Token -  {{ tokenSentence }}</p>
                    </div>

                    <div class="but">
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
      hospital: 'Aster Medcity',
      deptname: 'Oncology',
      doctorname: 'Dr Varma',
      title: 'MBBS.. B.Ed',
      year: '2017',
      day: 2,
      dayWord: null,
      month: 0,
      monthWord: null,
      date: 28,
      tokenCurr: 7,
      tokenTotal: 20,
      tokenSentence: null,
      sentence: null,
      Proceed: 'Proceed',
      timings: [
        {
          val: '10:00 - 11:00'
        },
        {
          val: '10:00 - 11:00'
        },
        {
          val: '10:00 - 11:00'
        },
        {
          val: '10:00 - 11:00'
        }
      ]
    }
  },
  created: function () {
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
    this.sentence = this.date + '  ' + this.monthWord + ',  ' + this.dayWord + ',  ' + this.year
    this.tokenSentence = this.tokenCurr + ' / ' + this.tokenTotal
  }
}
</script>

<style scoped>
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

.bill-text{
  position: absolute;
  display: inline-block;
  right: 8%;
  font-size: 1.2em;
  font-weight: 700;
  text-align: right;
}

.bill-text-token{
  position: absolute;
  display: inline-block;
  left: 5.5%;
  font-size: 1.2em;
  font-weight: 700;
  text-align: right;
}

.bill-text-region{
  padding-top: 10px;
  padding-bottom: 5%;
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