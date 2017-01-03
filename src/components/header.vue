<template>
	 <header id="header">
     <i class="icon iconfont icon-fenlei" @click="doShow"></i>
     {{title}}
     <i class="icon iconfont icon-icon"></i>
   </header>
</template>
<script>
	export default {
	  name: 'header',
    props:['headerTitle'],
	  data () {
	    return {
	        title:this.headerTitle,
          show:false
	    }
	  },
    mounted(){

    },
    methods:{
        doShow(){
          this.show=true;
          this.$emit('child-show',this.show);

      }
    }
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
#header{
  width: 100%;
  height: 50px;
  background-color: rgba(0,139,237,0);
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  .icon-fenlei{
    position: absolute;
    font-size: 24px;
    display: block;
    left: 15px;
    top: 0;
  }
  .icon-icon{
    position: absolute;
    font-size: 24px;
    right: 15px;
    top: 0;
    display: block;
  }
}
</style>
