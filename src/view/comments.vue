<template>
<div class="comments-body">
  <div class="header">
    {{commentsExtra.comments}}&nbsp;条评论
  </div>
  <div class="comments-num">{{commentsExtra.long_comments}}&nbsp;条长评</div>
  <div class="comments-content">

    <div class="comments-list clearfix" v-for="(item,index) in longComments.comments">
      <div class="header-img">
        <img :src="String(item.avatar).replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')">
      </div>
      <div class="content-right">
        <div class="name-zan clearfix">
          <span>{{item.author}}</span>
          <i class="icon iconfont icon-zan"><span>&nbsp;{{item.likes}}</span></i>
        </div>
        <div class="comments-text">
          {{item.content}}
        </div>
        <div class="comments-time">{{item.time | dateStr}}</div>
      </div>
    </div>
  </div>
<div class="short-comments">
  <div class="comments-num">{{commentsExtra.short_comments}}&nbsp;条短评</div>
  <div class="comments-content">
    <div class="comments-list clearfix" v-for="(item,index) in shortComments.comments">
      <div class="header-img">
        <img :src="String(item.avatar).replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')">
      </div>
      <div class="content-right">
        <div class="name-zan clearfix">
          <span>{{item.author}}</span>
          <i class="icon iconfont icon-zan"><span>&nbsp;{{item.likes}}</span></i>
        </div>
        <div class="comments-text">
          {{item.content}}
        </div>
        <div class="comments-time">{{item.time | dateStr}}</div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script type="text/ecmascript-6">
  import {fetchLongCommentsById,fetchShortCommentsById,fetchExtraById} from '../store/api';
  export default{
    name:'comments',
    components:{
      fetchLongCommentsById,
      fetchShortCommentsById,
      fetchExtraById
    },
    data(){
      return{
        commentsExtra:'',
        longComments:'1',
        shortComments:'1',
      }
    },
    filters:{
      dateStr(val){
        let oDate=new Date(parseInt(val));
        let month=oDate.getMonth()+1;
        let day=oDate.getDate();
        let hours=oDate.getHours();
        let min=oDate.getMinutes();
        if(month<10){
          month=0+''+month;
        }
        if(day<10){
          day=0+''+day;
        }
        if(hours<10){
          hours=0+''+hours;
        }
        if(min<10){
          min=0+''+min;
        }
        return `${month}-${day} ${hours}:${min}`;
      }
    },
    mounted(){
      fetchExtraById(this.$route.params.id).then(data=>{
        this.commentsExtra=data;
      });
      fetchLongCommentsById(this.$route.params.id).then(data=>{
        this.longComments=data;
      });
      fetchShortCommentsById(this.$route.params.id).then(data=>{
        this.shortComments=data;
      });

    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }

  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .comments-time{
    text-align: left;
    color: #bbb;
    margin-top: 5px;
  }
  .comments-content .comments-list:last-child{
    border-bottom: none;
  }
  .comments-num{
    line-height: 40px;
    font-weight: 600;
    text-align: left;
    padding-left: 15px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }
  .header{
    height: 50px;
    line-height: 50px;
    background: #00a2ed;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
  .comments-list.last{
    border-bottom: none;
    margin-bottom: 0;
  }
  .comments-content{
    .header-img{
      width: 40px;
      height:40px;
      border-radius: 50%;
      float: left;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .content-right{
      float: left;
      width: calc(100% - 55px);
      margin-left: 15px;
    }
  }
  .name-zan{
    margin-bottom: 5px;
    i{
      float: right;
      span{
        font-size: 14px;
        font-family: 'Microsoft Yahei';
      }
    }
  }
  .comments-list{
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  .name-zan>span{
    float: left;
    font-weight: 600;
    font-size: 14px;
  }
  .comments-text{
    text-align: justify;
    line-height: 18px;
  }
  .comments-list{
    margin-bottom: 10px;
  }
  .short-comments{
    .comments-num{
      border-top: 1px solid #eee;
    }

  }
</style>
