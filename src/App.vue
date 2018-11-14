<template>
  <div id="app" @mousewheel="getIsBg">
    <Header :isBg='isBg' />
    <router-view />
    <Fotter></Fotter>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Fotter from '@/components/Fotter'
export default {
  name: 'App',
  data () {
    return {
      isBg: false
    }
  },
  methods: {
    getIsBg () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }

      this.isBg = (scrollTop > 90)
    }
  },
  components: {
    Header, Fotter
  }
}
</script>

<style>
.ivu-input-search{
    background: rgba(30,100,180,1) !important;
}
</style>
