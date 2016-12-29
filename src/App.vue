<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import vHeader from './components/header'
import Slide from './view/slide'
export default {
  name: 'app',
  components: {
    Hello,
    vHeader,
    Slide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
