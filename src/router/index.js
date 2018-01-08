import Vue from 'vue'
import Router from 'vue-router'
import homec from '@/components/home.vue'
import fenleic from '@/components/fenlei.vue'
import wodec from '@/components/wode.vue'
import ruzhuc from '@/components/ruzhu.vue'
import diantaic from '@/components/diantai.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
     
      component: homec
    },
    {
    	path:'/fenlei',
    	component:fenleic
    	
    },
     {
    	path:'/diantai',
    	component:diantaic
    	
    },
    {
    	path:'/wode',
    	component:wodec
    },
     {
    	path:'/ruzhu',
    	component:ruzhuc
    },
    {
    	path:'/',
    	redirect:'/home'
    }

  ]
})
