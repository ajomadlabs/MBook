<template>
    <div>
      <div class="container-fluid fluidblock">
          <div class="row imp-padding">
              <form v-on:submit.prevent>
                  <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div class="input-field">
                          <input v-model="message" type="text"  name="search" id="field" v-on:click="clickHand" v-on:change="changeHandler" class="inputText" />
                          <label for="field">{{ text }}</label>
                      </div>
                      <div class="mb" v-on:click="searchosp" v-on:keyup.enter="searchosp">
                          
                      </div>
                  </div>
              </form>
          </div>
      </div>
      
      <div class="listbox">
          <ul>  
              <li class="listitems" v-for="item in hospitallist"><a v-on:click="hosp(item.hospname)">{{item.hospname}}</a></li>
          </ul>
      </div>
    </div>
</template>

<script>
import HospitalService from '@/services/HospitalService'
import MadButton from '@/components/MadButton'
import FormInput from '@/components/FormInputJump'

export default {
  name: 'Hospital',
  components: {
    MadButton,
    FormInput
  },
  data () {
    return {
      Msg: 'Search',
      val: null,
      message: null,
      text: 'Enter Hospital\'s name or Doctor\'s name',
      hospitallist: null,
      name: null,
      nameHosp: null,
      deptList: []
    }
  },
  methods: {
    hosp: async function (nameSelect) {
      this.name = nameSelect
      try {
        this.nameHosp = (await HospitalService.hospital({
          hospital: nameSelect
        })).data
        for (var i = 0; i < this.nameHosp[0].dept.length; i++) {
          this.deptList[i] = this.nameHosp[0].dept[i].deptname
        }
        // console.log(this.deptList[0])
        this.hospitalstore()
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  computed: {
    searchosp: async function () {
      try {
        this.hospitallist = (await HospitalService.search({
          hospital: this.message
        })).data
      } catch (error) {
        // console.log(error)
        this.error = error.response.data.error
      }
    },
    hospitalstore: function () {
      this.$store.commit('setHospName', this.name)
      this.$store.commit('setDepts', this.deptList)
      // console.log(this.$store.state.hospital)
      // console.log(this.$store.state.departments)
      // console.log(this.$store.state.departments)
      this.$router.push({ path: '/departments' })
    }
  }

}
</script>

<style scoped>
.input-field{
  position: relative;
  width: 100%;
}

label{
  position: absolute;
  left: 0;
  top: 20px;
  width: 100%;
  color: #3b2577;
  transition: 0.2s all;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  cursor: text;  
}

input {
  width: 100%;
  padding: 16px 20px 4px 20px;
  margin: 8px 0;
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  border: none;
  outline: 0;
  border-bottom: 3px solid #3b2577;
  font-size: 1.5em;
  color: #3b2577;
}


.primary-color{
    color: #3b2577;
}

.focusText {
   border-color: #ffcc00;
   border-color: #ffcc00;
 }

.focuslabel {
   top: 0px;
   top: 0px;
   color: #ffcc00;
   color: #ffcc00;
   font-size: 1em;
   font-size: 1em;
 }

.fluidblock{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.imp-padding{
    padding-top: 25px;
    
}

.mb {
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 20px;
}

.listbox{
    padding-top: 10%;
}
.listitems{
    
    list-style: none;
    font-family: "Lato", sans-serif;
    text-align: center;
    color: black;
    padding: 3px;
}

a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-weight: 300;
    font-size: 2.4rem;
    transition: all 0.6s ease;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.0);
}

a:hover, a:active {
    text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
}
</style>