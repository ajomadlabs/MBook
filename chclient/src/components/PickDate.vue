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
                    <div class="width-specifier">
                        <v-date-picker
                            mode='single'
                            tint-color='#3b2577'
                            is-expanded
                            v-model='selectedDate'
                            :click='dater()'
                            :select-attribute='sat'
                            :theme-styles='themeStyles'
                            is-inline>
                        </v-date-picker>
                    </div>
                </div>
            </div>
            <div class="but">
                <MadButton v-bind:msg="Proceed"></MadButton>
            </div>
        </div>
        <!--<p class="lato primary-color">{{ selectedDate }}</p>
        <p class="lato primary-color"> Date - {{ date }}</p>
        <p class="lato primary-color"> Day - {{ day }}</p>
        <p class="lato primary-color"> Year - {{ year }}</p>
        <p class="lato primary-color"> Month - {{ month }}</p>-->
        
    </div>
</template>

<script>
import MadButton from '@/components/MadButton'
import Vue from 'vue'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

Vue.use(VCalendar)

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
      selectedDate: new Date(),
      year: null,
      day: null,
      month: null,
      date: null,
      Proceed: 'Proceed',
      themeStyles: {
        wrapper: {
          border: '0',
          width: '80%'
        },
        header: {
          color: '#ffffff',
          backgroundColor: '#3b2577',
          borderColor: '#ffffff',
          padding: '30px'
        },
        headerTitle: {
          fontSize: '2.5rem',
          color: '#ffcc00'
        },
        headerArrows: {
          fontSize: '3rem',
          fontWeight: '100',
          color: '#ffcc00'
        },
        headerHorizontalDivider: {
          borderLeft: '1px solid #ffffff'
        },
        weekdays: {
          color: '#ffffff',
          backgroundColor: '#3b2577',
          borderColor: '#ffffff',
          borderWidth: '0 1px',
          padding: '5px 0 10px 0',
          fontSize: '1.5rem'
        },
        weekdaysVerticalDivider: {
          borderLeft: '1px solid #ffffff'
        },
        weeks: {
          border: '1px solid #fff'
        },
        dayContent: {
          fontSize: '1.5rem'
        },
        dayContentHover: {
          fontSize: '2.5rem'
        }
      },
      sat: {
        highlight: {
          backgroundColor: 'rgba(255, 204, 0, 0.8)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 204, 0, 0.8)',
          fontSize: '2.5rem',
          height: '30px',
          borderRadius: '20%',
          fontWeight: '300'
        },
        contentHoverStyle: {
          fontSize: '2rem'
        }
      }
    }
  },
  methods: {
    dater: function () {
      this.year = this.selectedDate.getFullYear()
      this.date = this.selectedDate.getDate()
      this.day = this.selectedDate.getDay()
      this.month = this.selectedDate.getMonth() + 1
    }
  }
}
</script>

<style scoped>
.but {
    padding-top: 20px;
    text-align: center;
}
.width-specifier{
    padding-top: 5%;
    width: 100%;
    text-align: center;
    font-family: "Lato", sans-serif;
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

.doctor-name {
  display: inline-block;
  position: absolute;
  top: 25px;
  right: 40px;
  font-size: 2.1em;
  font-weight: 700;
}

.title {
  display: inline-block;
  position: absolute;
  top: 65px;
  right: 40px;
  font-size: 1em;
  font-weight: 300;
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
</style>