<template>
	<div class="swiper-container">
    	<div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="item in news"
             :style="{background: 'url('+replace(item.image)+') no-repeat',
          backgroundSize:'100%',backgroundPosition:'50%'}">
        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>
<script>
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
	height:230px;
  height: 70vw;
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
</style>
