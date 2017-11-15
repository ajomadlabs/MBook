<template>
    <div>
        
            <div class="container-fluid fluidblock">
                <div class="row imp-padding">
                    <form>
                        <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <FormInput v-bind:type="textOne" v-bind:name="nameOne" v-bind:text="text"></FormInput>
                            <div class="mb">
                                <MadButton v-bind:msg="Msg"></MadButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="listbox">
                <ul>
                    <li class="listitems" v-for="item in hospitallist"><a>{{item.name}}</a></li>
                </ul>
            </div>

    </div>
</template>

<script>
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
      textOne: 'text',
      nameOne: 'search',
      Msg: 'Search',
      text: 'Enter Hospital\'s name or Doctor\'s name',
      hospitallist: [
        {
          name: 'Aster Medcity',
          address: 'Kochi Kerala'
        },
        {
          name: 'Asterasd Medcity',
          address: 'Kochi Kerala'
        },
        {
          name: 'Aster dsdMedcity',
          address: 'Kochi Kerala'
        },
        {
          name: 'Aster fse Medcity',
          address: 'Kochi Kerala'
        }
      ]
    }
  }
}
</script>

<style scoped>

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