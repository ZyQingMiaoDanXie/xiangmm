<template>
<div class="div1">
<div class="div1.2">
	<swipe class='my-swipe'>
  
        <swipe-item class='slide1' v-for='data in datalist'>
        <img src="./1.jpg" alt=""></swipe-item>
         <swipe-item class='slide2' v-for='data in datalist'>
        <img src="./2.jpg" alt=""></swipe-item>
       
    </swipe>
</div>
	<div class="div2" v-for='data in datalist'>
		<div class="haah">
			<div class="shang">
				<h1>{{data.name}}</h1>
				<ul >
                    <li v-for='data in datalist'>
                      <!--   {{data.attrs[name]}} -->
                    </li>
                </ul>

				
			</div>
            <div class="xia">
                <!-- <img src="data.code.img_url" alt=""> -->
            </div>
		</div>
	</div>
</div>
</template>


<script>
require('vue-swipe/dist/vue-swipe.css');
import{Swipe, SwipeItem} from'vue-swipe';
import axios from "axios";
export default {

  name: 'home',

  data () {
    return {
    	datalist:[]
    }
  },
    mounted(){
    	axios.get("http://i.qingting.fm").
    	then(res=>{
    		console.log(res.data);
    		
    	})
    	axios.get("http://i.qingting.fm/capi/neo-recommend/attrs").
    	then(res=>{
    		console.log(res.data);
    		this.datalist = res.data.data;
    	})
        // axios.get("http://i.qingting.fm/capi/neo-recommend/banner").
        // then(res=>{
        //     console.log(res.data);
        //     this.datalist = res.data.data;
        // })
    	},
        components:{
            'swipe':Swipe,
            'swipe-item':SwipeItem,
        }

    
}
</script>

<style lang="css" scoped>
.div2{
	width: 200px;
	height: 200px;
	
    margin: auto;
}
.my-swipe{
    background-color: white;
    width: 100%;
    height: 200px;
}
.slide1{
    background-color: lightblue;
}
.slide2{
    background-color: hot-pink;
}
.slide3{
    background-color: lightgreen;
}
</style>