<template>
  <div class="index-wrap" :class="{show:isShow}">
    <div :class="{show:isShow}" class="news-body">
      <vHeader :header-title="title" @child-show="doShow"></vHeader>
      <Slide></Slide>
      <NewsList></NewsList>
      <BeforeNews :loadMore="loadMore"></BeforeNews>
    </div>
    <div :class="{show:isShow}" class="sidebar-body">
      <SideBar @doHide="doHide"></SideBar>
    </div>
    <div class="mask" :class="{show:isShow}" @click="doHide"></div>
  </div>
</template>
<script type="text/ecmascript-6">
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
      this.showScroll();
      window.addEventListener('scroll',opacity=>{
          this.opacity=document.body.scrollTop / this.width;
          opacity=this.opacity;
        if(document.getElementById('header')) {
          document.getElementById('header').style.backgroundColor = `rgba(0,139,237,${opacity})`;
          let scrollTop = document.body.scrollTop;
          let scrollBottom = document.body.offsetHeight - document.documentElement.clientHeight;
          if (scrollBottom - scrollTop < 100) {
            this.loadMore = true;
          } else {
            this.loadMore = false;
          }
        }
      });
    },
    methods:{
      doShow(){
        console.log(this.opacity);
        //document.getElementById('header').style.backgroundColor = `rgba(0,139,237,${this.opacity})`;
        this.isShow=true;
        document.getElementsByTagName('body')[0].style.overflow='hidden';
      },
      doHide(){
        this.isShow=false;
        document.getElementsByTagName('body')[0].style.overflow='visible';
      },
      showScroll(){
        document.getElementsByTagName('body')[0].style.overflow="visible";
      }
    },

  }
</script>
<style lang="scss" scoped  rel="stylesheet/scss">
.news-body{
  transition: all 0.3s;
}
.news-body.show{
  transform: translateX(60vw);
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
