<template>
<div class="details">
  <div class="img-wrap"   :style="{'background-image': 'url('+ String(data.image).replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')}">
    <p class="big-title">{{data.title}}</p>
  </div>
</div>
</template>
<script>
import {fetchNewsById} from '../store/api';
export default{
  name:'details',
  data(){
    return {
        data:''
    }
  },
  components:{
    fetchNewsById
  },
  mounted(){
    fetchNewsById(this.$route.params.id).then(data=>{
        this.data=data;
        console.log(this.data);
    });

  },
  methods:{

  }
}
</script>
<style lang="scss" scoped  rel="stylesheet/scss">
  .img-wrap{
    width: 100%;
    height: 70vw;
    background-size: 100%;
    background-position: 50%;
    position: relative;
    .big-title{
      color: #ffffff;
      position: absolute;
      bottom: 40px;
      width: 100%;
      line-height: 30px;
      font-size: 20px;
      padding: 0 15px 0 15px;
      box-sizing: border-box;
      text-align: left;
    }
  }
</style>
