<template>
  <div class="themes-bar">
    <div :class="{show:isShow}" class="side-bar">
      <SideBar></SideBar>
    </div>
    <div class="themes-body" :class="{show:isShow}">
      <header class="header clearfix"  :style="{'background-image': 'url('+ String(themes.image).replace(/http\w{0,1}:\/\/p/g,
      'https://images.weserv.nl/?url=p')}">
        <i class="icon iconfont icon-back" @click="doShow"></i>{{themes.name}}
      </header>
      <div class="editor clearfix">
        <span>主编</span>
        <ul class="clearfix">
          <li v-for="item in themes.editors">
            <img :src="item.avatar.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')">
          </li>
        </ul>
      </div>
      <div class="themes-list clearfix" v-for="item in themes.stories">
        <router-link :to="{name:'details',params:{id:item.id}}">
        <p :class="{hasImg:item.images}">{{item.title}}</p>
          <img :src="String(item.images).replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')" v-if="item.images">
        </router-link>
      </div>
    </div>
    <div class="mask" :class="{show:isShow}" @click="doHide"></div>
  </div>
</template>
<script>
  import {fetchThemesById,fetchBeforeThemesById} from '../store/api';
  import SideBar from '../components/sidebar.vue';
  export default{
    name:'themes',
    watch:{
      '$route' (to,from){
        this.getThemesContent();
        this.isShow=false;
        this.showScroll();
      },
      loadMore (val){
        if(val==true){
          this.getMore();
        }
      }
    },
    components:{
      fetchThemesById,
      fetchBeforeThemesById,
      SideBar
    },
    data(){
      return{
        themes:{},
        loadMore:false,
        id:'',
        isShow:false,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        window.removeEventListener('scroll',()=>{
          alert(1);
        });
        this.getThemesContent();
        this.showScroll();
        window.addEventListener('scroll',()=>{
          let scrollTop=document.body.scrollTop;
          let scrollBottom=document.body.offsetHeight - document.documentElement.clientHeight;
          if(scrollBottom-scrollTop<100)
          {
            this.loadMore=true;
          }else {
            this.loadMore=false;
          }
        })
      })
    },
    methods:{
      getMore(){
          if(this.id) {
            fetchBeforeThemesById(this.$route.params.id, this.id).then(data => {
              data.stories.forEach((e) => {
                this.themes.stories.push(e);
                this.id = this.themes.stories[this.themes.stories.length - 1].id;
              })
            });
          }
      },
      getThemesContent(){
        fetchThemesById(this.$route.params.id).then(data=>{
          this.themes=data;
          this.id=this.themes.stories[this.themes.stories.length-1].id;
        });
      },
      doShow(){
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
    }

  }
</script>
<style scoped  rel="stylesheet/scss" lang="scss">
  .themes-bar{
    position: relative;
    .side-bar{
      position: fixed;
      left: -60%;
      top: 0;
      z-index: 10;
      height: 100%;
      transition: all 0.3s;
    }
    .side-bar.show{
      transform: translateX(60vw);
    }
    .themes-body{
      transition: all 0.3s;
      padding-top: 50px;
    }
    .themes-body.show{
      transform: translateX(60vw);
    }
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
.header{
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-size: 100%;
  background-position: 50%;
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  .icon-back{
    line-height: 50px;
    font-size: 22px;
    position: absolute;
    left: 15px;
    top: 0;
  }
}
.editor{
  padding: 5px 15px 5px 15px;
  border-bottom: 1px solid #eee;
  ul{
    margin-left: 5px;
    float: left;
    li{
      float: left;
      width: 25px;
      height:25px;
      overflow: hidden;
      border-radius: 50%;
      margin-left: 5px;
      margin-top: 3px;
      img{
        width: 100%;
      }
    }
  }
  span{
    float: left;
    line-height: 30px;
    color: #666;
  }
}
.themes-list{
  padding: 15px;
  border-bottom: 1px solid #eee;
  p{
    text-align: justify;
    line-height: 24px;
    font-size: 14px;
    float: left;
  }
  img{
    float: right;
    width: 17%;
    display: inline-block;
  }
  .hasImg{
    width: 80%;
  }
}
</style>
