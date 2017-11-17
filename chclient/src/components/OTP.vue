<template>
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="container-fluid">
            <div class="row">
                <p class="heading">Enter the OTP</p>
                <form>
                    <input type="text">
                    <a class="lato yellow spc-link"> resend otp </a>
                    <br />
                    <MadButton v-bind:msg="Msg"></MadButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import MadButton from '@/components/MadButton'
import FormInput from '@/components/FormInput'

export default {
  name: 'Welcome',
  data () {
    return {
      textOne: 'text',
      nameOne: 'asname',
      Msg: 'Submit'
    }
  },
  components: {
    MadButton,
    FormInput
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