<template>
  <div class="index-wrap">
    <div :class="{show:isShow}" class="news-body">
      <vHeader :header-title="title" v-on:child-show="listenHeader"></vHeader>
      <Slide></Slide>
      <NewsList></NewsList>
      <BeforeNews :loadMore="loadMore"></BeforeNews>
    </div>
    <div :class="{show:isShow}" class="sidebar-body">
      <SideBar></SideBar>
    </div>
    <div class="mask" :class="{show:isShow}" @click="doHide"></div>
  </div>
</template>
<script>
  import App from '../App.vue';
  import vHeader from '../components/header.vue';
  import Slide from '../components/slide.vue';
  import {fetchNewsById} from '../store/api';
  import NewsList from '../components/news-list.vue';
  import SideBar from '../components/sidebar.vue';
  import BeforeNews from '../components/before-news.vue';
  export default {
    name: 'index',
    components:{
      vHeader,
      Slide,
      NewsList,
      SideBar,
      BeforeNews
    },
    data () {
      return {
        title:'今日热闻',
        isShow:false,
        opacity:1,
        width:0,
        loadMore:false
      }
    },
    mounted(){
      this.width=0.7*document.body.offsetWidth;
      window.addEventListener('scroll',opacity=>{
        this.opacity=document.body.scrollTop / this.width;
        opacity=this.opacity;
        document.getElementById('header').style.background=`rgba(0,139,237,${opacity})`;
        let scrollTop=document.body.scrollTop;
        let scrollBottom=document.body.offsetHeight - document.documentElement.clientHeight;
        if(scrollBottom-scrollTop<100)
        {
          this.loadMore=true;
        }else {
          this.loadMore=false;
        }
      });

    },
    methods:{
      listenHeader(msg){
        this.isShow=msg;
      },
      doHide(){
        this.isShow=false;
      }
    }
  }
</script>
<style lang="scss" scoped  rel="stylesheet/scss">
.news-body{
  transition: all 0.3s;
}
.news-body.show{
  transform: translateX(60vw);
  overflow: hidden;
}
.index-wrap{
  position: relative;
}
.sidebar-body{
  position: fixed;
  left: -60%;
  top: 0;
  z-index: 10;
  height: 100%;
  transition: all 0.3s;
  }
.sidebar-body.show{
  transform: translateX(60vw);
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  right: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
}
.mask.show{
  z-index: 9;
  opacity: 1;
  visibility: visible;
}
</style>
