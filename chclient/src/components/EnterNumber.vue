<template>
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="container-fluid">
            <div class="row">
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
import BookingService from '@/services/BookingService'
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
        this.$router.push({path: '/enterotp'})
      } else {
        this.value = null
        this.valid = true
      }
    }
  },
  computed: {
    searchosp: async function () {
      try {
        this.book = (await BookingService.mobileotp({
          hospital: this.message
        })).data
      } catch (error) {
        // console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
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
    top: 40vh;
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