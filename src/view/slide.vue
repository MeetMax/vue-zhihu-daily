<template>
	<div class="swiper-container">
    	<div class="swiper-wrapper">
	        <div class="swiper-slide"  v-for="item in news.top_stories">
	        	
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>
<script>
import Swiper from 'swiper';
import {fetchNewsById} from '../store/api';
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
	   		news:{}
	   	}
	  },
	  mounted(){
	  	var mySwiper = new Swiper ('.swiper-container', {
			autoplay:3000,
	      	loop: true,
	      	paginationElement:'span'
	    });  
	    fetchNewsById(this.id).then(data=>{
	    	this.news=data;
	    	console.log(data);
	    })     
	  }

	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../assets/swiper.min.css";
.swiper-container{
	width:100%;
	height:200px;
	.slide-img{
		width:100%;
		height:100%;
	}
}
.swiper-pagination{
	width:100%;
	height:10px;
}
</style>
