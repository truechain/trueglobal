<template>
  <div id="app" @mousewheel="getIsWhite">
    <Header :isWhite='isWhite' />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  data () {
    return {
      isWhite: false
    }
  },
  methods: {
    getIsWhite () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      this.isWhite = (scrollTop > 100)
    }
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
