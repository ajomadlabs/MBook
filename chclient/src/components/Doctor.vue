<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="hosp-name lato primary-color">{{ hospital }}</p>
                    <br />
                    <p class="dept-name lato primary-color">{{ selectDept }}</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul class="card-holder">
                        <li class="card" v-for="doc in doctors" v-on:click="saveDoctor(doc.doctorname,doc.doctime,doc.doctoken)"> <div class="text">{{ doc.doctorname }} </div> <div class="text-under">{{ doc.doctime }}</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Deparment',
    data () {
      return {
        error: null,
        selectedDoctor: null,
        selectedTime: null
      }
    },
    methods: {
      saveDoctor: function (dname, dtime, dtoken) {
        // this.docname = dname
        // console.log(this.docname)
        this.$store.commit('setSelectedDoctor', dname)
        this.$store.commit('setSelectedDoctorTime', dtime)
        this.$store.commit('setSelectedDoctorToken', dtoken)
        this.$router.push({path: '/pickadate'})
      }
    },
    computed: {
      hospital: function () {
        return this.$store.getters.getHospName
      },
      selectDept: function () {
        return this.$store.getters.getSelectDept
      },
      doctors: function () {
        return this.$store.getters.getDoctorList
      }
    }
  }
</script>

<style scoped>
.hosp-name{
    display: inline-block;
    position: relative;
    font-size: 2.1em;
    top: 25px;
    left: 25px;
    font-weight: 700;
}

.dept-name{
    display: inline-block;
    position: relative;
    top: 12px;
    left: 25px;
    font-size: 1.2em;
    font-weight: 300;
}

.primary-color{
    color: #3b2577;
}

.lato {
    font-family: "Lato", sans-serif;

}

.card-holder {
	background: white;
	display: flex;
	flex-wrap: wrap;
    margin-top: 12%;
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
    margin-top: 8.5%;
}

.text-under{
    font-size: 0.5em;
}
</style>