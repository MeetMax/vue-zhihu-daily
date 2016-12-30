<template>
  <div>
    <vHeader :header-title="title"></vHeader>
    <Slide></Slide>
    <NewsList></NewsList>
  </div>
</template>
<script>
  import App from '../App.vue';
  import vHeader from '../components/header.vue';
  import Slide from '../components/slide.vue';
  import {fetchNewsById} from '../store/api';
  import NewsList from '../components/news-list.vue';
  export default {
    name: 'index',
    components:{
      vHeader,
      Slide,
      NewsList
    },
    data () {
      return {
        title:'今日热闻'
      }
    }

  }
</script>
<style lang="scss" scoped  rel="stylesheet/scss">


</style>
