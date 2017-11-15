<template>
    <div>
         <input v-bind:type="typer" v-bind:name="namer">
    </div>
</template>

<script>
export default {
  props: ['type', 'name'],
  data () {
    return {
      typer: this.type,
      namer: this.name
    }
  }
}
</script>

<style scoped>
input[type="text"],
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
</style>