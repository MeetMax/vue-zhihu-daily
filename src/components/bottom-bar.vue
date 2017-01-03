<template>
<div class="bottom-bar">
  <ul class="clearfix">
    <li>
      <i class="icon iconfont icon-back" @click="goBack"></i>
    </li>
    <li>
      <i class="icon iconfont icon-moreunfold"></i>
    </li>
    <li>
      <i class="icon iconfont icon-zan"><span>{{data.popularity}}</span></i>
    </li>
    <li>
      <router-link :to="{name:'comments',params:{id:id}}">
      <i class="icon iconfont icon-pinglun"><span>{{data.comments}}</span></i>
      </router-link>
    </li>
  </ul>
</div>
</template>
  <script type="text/ecmascript-6">
  import {fetchExtraById} from '../store/api';
  export default{
    name:'bootomBar',
    props:['id'],
    components:{
      fetchExtraById
    },
    data(){
      return{
        data:'',

      }
    },
    mounted(){
      fetchExtraById(this.id).then(data=>{
        this.data=data;
      })
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }

  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .bottom-bar{
    height: 40px;
    width: 100%;
    background-color: #f8f8f8;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #eee;
    li{
      width: 25%;
      float: left;
      text-align: center;
      color: #666;
      .iconfont{
        font-size: 24px;
        line-height: 40px;
        display: inline-block;
      }
      .icon-zan span{
        font-size: 14px;
        font-family: 'Microsoft Yahei';
        position: relative;
        bottom: 8px;
        left: 3px;
      }
      .icon-pinglun span{
        display: inline-block;
        padding: 0px 6px 0px 6px;
        color: #fff;
        font-size: 12px;
        background-color: #1fb3f0;
        line-height: normal;
        position: relative;
        bottom: 12px;
        left: -8px;
      }
    }
  }
</style>
