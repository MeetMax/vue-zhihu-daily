<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';
import vHeader from './components/header';
import Slide from './components/slide';
import Side from './components/sidebar.vue';
import Index from './view/index.vue';
import News from './components/news-list.vue';
export default {
  name: 'app',
  components: {
    Hello,
    vHeader,
    Slide,
    Side,
    Index,
    News
  }
}
</script>

<style>
  @import "./assets/style.css";
  @import "./assets/iconfont/iconfont.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
