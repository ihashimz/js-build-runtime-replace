<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>{{key1}}</h3>
  <p>{{key2}}</p>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data : function (){
    return{
        key1 : process.env.VUE_APP_WHAT_EVER,
        key2 : process.env.VUE_APP_API_URL
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
