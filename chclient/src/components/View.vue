<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="hosp-name lato primary-color">{{ user }}</p>
                    <br />
                    <p class="dept-name lato primary-color">{{ number }}</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <div class="info-box lato">
                        <p class="info-box-font">Hospital - {{ hospital }}</p>
                        <p class="info-box-font">Doctor - {{ name }}</p>
                        <p class="info-box-font">Timing - {{ timing }}</p>
                        <p class="info-box-font">Department - {{ dept }}</p>
                        <div v-if="active">
                            <div class="box">
                                <input type="checkbox"> <label><p>i hereby accept to terms and condition</p></label>
                            </div>
                            <button class="my-btn" >Cancel</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
  import MadButton from '@/components/MadButton'
  export default {
    name: 'View',
    components: {
      MadButton
    },
    data () {
      return {
        user: 'Ajo Kundi',
        number: '+91 8281408069',
        Book: 'Book',
        Cancel: 'Cancel',
        name: 'Dr. Doctor',
        hospital: 'Aster',
        timing: 'MBBS ........sa',
        active: true,
        dept: 'Oncology'
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