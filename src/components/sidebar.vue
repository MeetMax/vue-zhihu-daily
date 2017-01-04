<template>
  <div class="sidebar-box">
    <router-link to="/">
    <p class="home clearfix" @click="doHide">
      <i class="icon iconfont icon-zhuye"></i>
        <span>首页</span>
      <i class="icon iconfont icon-icon07"></i>
    </p>
    </router-link>
    <ul class="sidebar-list">
      <li v-for="item in sideList" class="clearfix">
        <router-link :to="{name:'themes',params:{id:item.id}}">
        <p>{{item.name}}</p>
        <i class="icon iconfont icon-jiajian02"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {fetchThemes} from '../store/api';
  export default{
      name:'sidebar',
      components:{
        fetchThemes
      },
    data(){
      return{
        sideList:{},
        id:''
      }
    },
    mounted(){
        fetchThemes().then(data=>{
          this.sideList=data.others;
      })
    },
    methods:{
      doHide(){
        this.$emit('doHide')
      }
    },
  }
</script>
<style lang="scss" scoped  rel="stylesheet/scss">
.sidebar-box{
  width: 60vw;
  height: 100%;
  padding:10px;
  box-sizing: border-box;
  background: #232a30;
  overflow: scroll;
  p{
    text-align: left;
    line-height: 40px;
    font-size: 14px;
    color: #c2c9d0;
  }
  .sidebar-list{
   font-size:16px;
    p{
      float: left;
    }
    .iconfont{
      float: right;
      margin-right: 20px;
      color: #c2c9d0;
      line-height: 40px;
    }
    li{
      line-height: 30px;
    }
  }
}
.sidebar-show{
  transform: translateX(60VW);
  transition: all 0.3s;
}

  .home{
    .icon-zhuye{
      font-size: 22px;
      line-height: 30px;
    }
    span{
      margin-left: 15px;
    }
    .icon-icon07{
      float: right;
      margin-right: 20px;
      color: #c2c9d0;
      font-size: 20px;
    }
  }
</style>
