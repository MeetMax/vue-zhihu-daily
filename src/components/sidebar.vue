<template>
  <div class="sidebar-box">
    <p>首页</p>
    <ul class="sidebar-list">
      <li v-for="item in sideList" class="clearfix">
        <p>{{item.name}}</p>
        <span>+</span>
      </li>
    </ul>
  </div>

</template>
<script>
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
    }

  }
</script>
<style lang="scss" scoped  rel="stylesheet/scss">
.sidebar-box{
  position: fixed;
  width: 60vw;
  height: 100%;
  left: -60VW;
  top: 0;
  padding:10px;
  box-sizing: border-box;
  background: #f9f9f9;
  p{
    text-align: left;
    line-height: 40px;
    font-size: 16px;
  }
  .sidebar-list{
   font-size:16px;
    p{
      float: left;
    }
    span{
      float: right;
      margin-right: 20px;
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
</style>
