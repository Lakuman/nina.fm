import Vue from 'vue'
import VueRouter from 'vue-router'
import mixtapes from '@/components/mixtapeList'
import sidebar from '@/components/sidebar.vue'
import mixtapeDetail from '@/components/mixtapesDetails'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
  {
    path: '/mixtapes',
    name: 'mixtapes',
    components: { 
      default :mixtapes,
      sidebar :sidebar
    }
  },
  {
    path: '/mixtape/:id',
    name: 'mixtape',
    components: { 
      default : mixtapeDetail,
      sidebar : sidebar
    }
  }
  ]
})


