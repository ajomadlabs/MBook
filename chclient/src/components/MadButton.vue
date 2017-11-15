<template>
    <div>
        <button type="submit" class="mad-btn">{{msg}}</button>
    </div>
</template>

<script>
export default {
  props: ['msg'],
  name: 'Mad Button',
  data () {
    return {}
  }
}
</script>

<style scoped>
.mad-btn {
  display: inline-block;
  padding: 3px 25px 4px 25px;
  margin-bottom: 0;
  font-size: 15px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: #3b2577;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  background-color: white;
  border: 2px solid transparent;
  border-color: #3b2577;
  border-radius: 16px;
}


.mad-btn:focus,
.mad-btn:active:focus,
.mad-btn.active:focus,
.mad-btn.focus,
.mad-btn:active.focus,
.mad-btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
  border-color: #ffcc00;
}
.mad-btn:hover,
.mad-btn:focus,
.mad-btn.focus {
  color: #ffcc00;
  text-decoration: none;
  border-color: #ffcc00;
}
.mad-btn:active,
.mad-btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
</style>