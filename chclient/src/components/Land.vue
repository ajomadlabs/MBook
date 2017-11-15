<template>
  <div>
    <div class="pulse">
      <svg id="pulse" class="growBorder" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1286.5 101.5">
        <path d="M-0.5,59l670.32,0c1.83-25.44,3.31-31.56,4.37-31.55s2.47,6.13,4,31.55c0.17,1.71,1.88,18,4.75,18.07s5.39-16.45,5.63-18.07h37.75Q729.47,38,732.57,
          38q3.53,0,7,27.12c1.31-9.47,2.75-15.89,4.25-15.87,3.15,0,3.91,28.3,7.88,28.5,1.69,0.09,3.85-5,6.63-18.82l23.76-.3C788,18.58,792,4.83,794.83,
          5c5.28,0.31,6.62,50.36,11.25,50.33,2.15,0,2.93-10.83,5-10.83,4.75,0,8.16,57.1,11.75,57,2-.05,2.69-17.11,6-17.25,2-.09,2.85,6,4.75,6,2.55,0,
          4.73-11.07,7.5-31.25,2.29-16.68,3.58-29.29,4.75-29.25,1.5,0,1.43,20.74,4.5,21,1.84,0.16,3.13-7.17,5-7,2.09,0.19,2.28,9.55,4.75,22.25,2,10.47,
          3.92,20.15,7,20.5,2.25,0.26,6.11-4.33,13-28.75L1281,58.5"
          transform="translate(3 -2.5)" style="fill:none;stroke:#f7b801;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px"/>
      </svg>
    </div>
    <div class="">
      <router-link to="/welcome"><h3 class="lato primarycolor align"><span class="bold">Sign in</span> with Google</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main Page',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pulse{
  margin-top: 35vh;
  margin-left: -15px;
  margin-right: -15px;
}

.lato{
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}

.bold{
  font-weight: 700;
}

.primarycolor{
  color: #3b2577;
}

.align{
  padding-top: 50px;
  display: inline-block;
  margin-left: 70vw;
  cursor: pointer;
}

.growBorder {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -moz-animation: dash 8s linear forwards infinite;
  -webkit-animation: dash 8s linear forwards infinite;
  -o-animation: dash 8s linear forwards infinite;
  animation: dash 8s linear forwards infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
