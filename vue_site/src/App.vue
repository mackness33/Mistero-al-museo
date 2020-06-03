<template>
  <div id="app">
    
    {{msg}}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }, data (){
    return {
      msg:"hello"
    }
  }
}
</script>

<style>
  *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
