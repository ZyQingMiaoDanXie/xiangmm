<template>
<nav>

<div class="div1">
<img src="./logo_otherpage.png" alt="">
	<ul class="ul1">
      <router-link to="/home" tag='li' activeClass='a'><span>精选</span></router-link>
       <router-link to="/fenlei" tag='li' activeClass='a'><span>分类</span></router-link>
        <router-link to="/diantai" tag='li' activeClass='a'><span>电台</span></router-link>
        <router-link to="/wode" tag='li' activeClass='a'><span>我的</span></router-link>
        <router-link to="/ruzhu" tag='li' activeClass='a'><span>主播入驻</span></router-link>
    </ul>
    </div>
    
</nav>
</template>

<script>
export default {

  name: 'dhtou',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

ul{
	list-style: none;
}
.div1{display: flex;
	width:1000px;
	margin: 0 auto;

}
.div1 img{
	height: 33px;
	padding-top: 10px;
}
.ul1{
	
	height: 68px;
	width: 100%;
	display: flex;
	
}
.ul1 li{
	margin: auto;

}
.ul1 li span:hover{
	color:red;
}
.a{
	border-bottom: dashed 2px red;
}
</style>