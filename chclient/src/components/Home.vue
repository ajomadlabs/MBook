<template>
    <div>
        <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <div class="container-fluid">
              <router-link to="/history"><div class="left">
                <a class="white lato">View Bookings</a>
              </div></router-link>
            </div>
          </div>
        </div>
        <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <div class="container-fluid">
              <router-link to="/hospitals"><div class="right">
                <a class="lato white">Book</a>
              </div></router-link>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {}
  }
}
</script>

<style scoped>
a{
  position: relative;
  vertical-align: middle;
  text-align: center;
  top: 45%;
  text-decoration: none;
}

.container-fluid{
  margin-left: -15px;
  margin-right: -15px;
}
.lato{
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 30px;
}

.mad-full-height{
  height: 100vh;
  widows: 100vw;
  display: block;
}

.white{
  color: white;
  vertical-align: middle;
  text-align: center;
}

.left{
  height: 100vh;
  background-color: #3b2577;
  display: block;
  cursor: pointer;
  transition: all 0.6s ease;
  
}

.left > a {
  transition: all   s ease;
}

.left:hover
{
  background-color: #ffcc00;
  text-decoration: none;
}
.left:hover > a {
  color: #3b2577;
  text-decoration: none;
}

.right{
  height: 100vh;
  background-color: #3b2577;
  display: block;
  cursor: pointer;
  transition: all 0.6s ease;
}
.right:hover {
  background-color: #ffcc00;
}
.right > a {
  transition: all 0.6s ease;
}
.right:hover > a {
  color: #3b2577;
}

</style>