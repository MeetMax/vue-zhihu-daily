<template>
  <div>
  <div  class="before-news" v-for="items in list">
    <p class="date">{{items.date | getDays}}</p>
    <ul>
      <li v-for="item in items.stories" class="clearfix">
        <router-link :to="{name:'details',params:{id:item.id}}">
        <p>{{item.title}}</p>
        <div class="thumb">
          <img :src="item.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')">
        </div>
        </router-link>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
  import {fetchBeforeById} from '../store/api';
  export default{
    name:'before-news',
    components:{
      fetchBeforeById
    },
    props:['loadMore'],
    data(){
      return{
        list:[],
        day:1,
        load:false
      }
    },
    mounted(){
      console.log(this.getStrDate(this.day));
    },
    watch:{
      loadMore:function(val){
        if(val==true){
          this.getBefore();
        }
      },
      deep:true
    },
    filters:{
      getDays(val){
        let week=new Date(`${val.slice(0,4)}/${val.slice(4,6)}/${val.slice(6,8)}`).getDay();
        let dayMap={
          '0':'星期日',
          '1':'星期一',
          '2':'星期二',
          '3':'星期三',
          '4':'星期四',
          '5':'星期五',
          '6':'星期六'
        };
        return `${val.slice(4,6)}月${val.slice(6,8)}日${dayMap[week]}`;
      }
    },
    computed:{

    },
    methods:{
      getStrDate(day){
        let oDate = new Date();
        oDate.setDate(oDate.getDate()+day);
        let y=String(oDate.getFullYear());
        let m=String(oDate.getMonth()+1);
        let d=String(oDate.getDate());
        if(m.length==1)
        {
          m='0'+m;
        }
        if(d.length==1)
        {
          d='0'+d;
        }
        return y+m+d;
      },
      getBefore(){
        let day=this.day--;
        let fullDate=this.getStrDate(day);
        fetchBeforeById(fullDate).then(data=>{
          this.list.push(data);
        });
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .before-news .date{
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    background: rgb(0,139,237);
  }
  .before-news li{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    p{
      float: left;
      font-size: 14px;
      line-height: 24px;
      width: 80%;
      width: calc(100% - 120px);
      width:-moz-calc(100% - 120px);
      width:-webkit-calc(100% - 120px);
      text-align: left;
    }
    .thumb{
      width:80px;
      height: 80px;
      float: right;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
