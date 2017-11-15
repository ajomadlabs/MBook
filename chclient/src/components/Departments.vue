<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="hosp-name lato primary-color">{{ hospital }}</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul class="card-holder">
                        <li class="card" v-for="dept in departments"> <div class="text">{{ dept.name }}</div></li>
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
        hospital: 'Aster Medcity',
        departments: [
          {
            name: 'Oncology'
          },
          {
            name: 'Opthomology'
          },
          {
            name: 'Cardiology'
          },
          {
            name: 'Dentistry'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.hosp-name{
    display: inline-block;
    position: relative;
    top: 25px;
    left: 25px;
}
.primary-color{
    color: #3b2577;
}

.lato {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 2.1em;
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
    margin-top: 9.8%;
}

</style>