<template>
  <h1>{{message}}</h1>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Hello Vue.Js'
      }
    }
  }

</script>
<style scoped>
  h1 {
    color: red;
  }
</style>