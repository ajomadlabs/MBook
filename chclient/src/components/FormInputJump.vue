<template>
    <div class="input-field">
        <input v-bind:type="typer" v-bind:name="namer" id="field" class="inputText" />
        <label for="field">{{ text }}</label>
    </div>
</template>

<script>
  export default {
    props: ['type', 'name', 'text'],
    data () {
      return {
        typer: this.type,
        namer: this.name,
        text: this.text
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

input:focus {
  border-color: #ffcc00;
}
input:focus~label {
  top: 0px;
  color: #ffcc00;
  font-size: 1em;
}


</style>