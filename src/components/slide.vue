<template>
	<div class="swiper-container">
    	<div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="item in news"
             :style="{background: 'url('+replace(item.image)+') no-repeat',
          backgroundSize:'100%',backgroundPosition:'50%'}">
          <router-link :to="{name:'details',params:{id:item.id}}"></router-link>
          <p>{{item.title}}</p>
        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>
<script type="text/ecmascript-6">
import {fetchNewsById} from '../store/api';
import Swiper from 'swiper';
	export default {
	  name: 'slide',
	  components: {
	  	Swiper,
	  	fetchNewsById
	  },
	   data(){
	   	return{
	   		msg:'哈哈',
	   		id:'latest',
	   		news:{},
	   	}
	  },
	  mounted(){
      new window.Swiper ('.swiper-container', {
          pagination:'.swiper-pagination',
			    autoplay:10000,
	      	paginationElement:'span',
          autoplayDisableOnInteraction: false,
          observer: true,

	    });
	    fetchNewsById(this.id).then(data=>{
	    	this.news=data.top_stories;
	    })
	  },
    methods:{
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }

	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../assets/swiper.min.css";
.swiper-container{
	width:100%;
	height:250px;
	.swiper-slide{
		width:100%;
		height:100%;
	}
}
.swiper-pagination-bullet-active{
  background-color: #ffffff;
}
.swiper-pagination{
	width:100%;
	height:10px;
}
.swiper-slide{
  position: relative;
  p{
    color: #fff;
    position: absolute;
    width: 100%;
    bottom: 10px;
    left: 0;
    padding: 0 15px 0 15px;
    font-size: 18px;
    box-sizing: border-box;
    text-align: left;
  }
  a{
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
