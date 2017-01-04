<template>
  <div  class="latest-news">
    <ul>
      <li v-for="item in list" class="clearfix">
        <router-link :to="{name:'details',params:{id:item.id}}">
        <p>{{item.title}}</p>
        <div class="thumb">
          <img :src="item.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')">
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import {fetchNewsById} from '../store/api';
export default{
    name:'news-list',
    components:{
      fetchNewsById
    },
    data(){
      return{
        id:'latest',
        list:{}
      }
    },
    mounted(){
      fetchNewsById(this.id).then(data=>{
          this.list=data.stories;
      })
    },
    computed:{

    }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.latest-news li{
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
  p{
    float: left;
    font-size: 14px;
    line-height: 24px;
    width: 80%;
    text-align: left;
  }
  .thumb{
    width:17%;
    float: right;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

</style>
