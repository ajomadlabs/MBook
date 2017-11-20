<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="hosp-name lato primary-color">{{ user }}</p>
                    <br />
                    <p class="dept-name lato primary-color">{{ email }}</p>
                    <div class="bp">
                     <router-link to="/history"><MadButton v-bind:msg="Book"></MadButton></router-link>
                    </div>
                    <br />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <div class="info-box lato">
                        <p class="info-box-font">Hospital - {{ hospital }}</p>
                        <p class="info-box-font">Doctor - {{ name }}</p>
                        <p class="info-box-font">Date - {{ dat }}</p>
                        <p class="info-box-font">Department - {{ dept }}</p>
                        <div>
                            <button class="my-btn" v-on:click="cancelBtn()">Cancel</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
  import BookingService from '@/services/BookingService'
  import MadButton from '@/components/MadButton'
  export default {
    name: 'View',
    components: {
      MadButton
    },
    data () {
      return {
        Book: 'Back',
        Cancel: 'Cancel',
        name: this.$store.getters.getselectedBooking.doc,
        hospital: this.$store.getters.getselectedBooking.hos,
        dat: this.$store.getters.getselectedBooking.dat,
        dept: this.$store.getters.getselectedBooking.dep,
        tok: this.$store.getters.getselectedBooking.tok,
        idn: this.$store.getters.getselectedBooking.idn
      }
    },
    methods: {
      cancelBtn: function () {
        // console.log(this.idn)
        this.cancel()
        // this.$router.push({path: '/history'})
      },
      cancel: async function () {
        try {
          this.cancelList = (await BookingService.cancelBooking({
            id: this.idn
          })).data
          this.$router.push({path: '/home'})
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    computed: {
      user: function () {
        return this.$store.getters.getName
      },
      email: function () {
        return this.$store.getters.getEmail
      }
    }
  }
</script>

<style scoped>

.info-box{
    padding-top: 10%;
}

.info-box-font{
    font-size: 2em;
}

.bp{
    display: inline-block;
    position: absolute;
    right: 40px;
    top: 45px;
}

.my-btn{
    background-color: #ff0000;
    border: 2px solid #ff0000;
    border-radius: 12px;
    padding: 10px;
    padding-left: 35px;
    padding-right: 35px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
    transition: all 0.5s ease;
    color: white;
    position: absolute;
    margin-top: 60px;
    right:0;
}

.box{
    position: absolute;
    right:0;
    margin: 20px;
}
.my-btn:hover{
    box-shadow: 5px 5px 20px rgba(0,0,0,0);
}
.cancel{
    display: inline-block;
    margin-top: -5px;
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 0.6em;
}

a:hover{
    color: #ffcc00;
}

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

</style>