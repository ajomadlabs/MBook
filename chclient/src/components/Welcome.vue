<template>
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="container-fluid">
            <div class="row">
                <form>
                    <FormInput v-bind:type="textOne" v-bind:name="nameOne"></FormInput>
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