<template>

  <div>
   <dhtou></dhtou>

    
    
    <router-view></router-view>



  </div>
</template>

<script>
import dhtou from'@/components/dhtou';
export default {
  name: 'app',
  data(){
    return{

    }
  },
  components:{
    dhtou,
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin:0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
