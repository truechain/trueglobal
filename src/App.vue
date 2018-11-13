<template>
  <div id="app" @mousewheel="getIsBg">
    <Header :isBg='isBg' />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
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
    Header
  }
}
</script>

<style>
</style>
