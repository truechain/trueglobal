<template>
  <div id="app" @mousewheel="getIsBg">
    <div v-show="!$route.meta.isHeader">
      <Header :isBg='isBg' />
    </div>
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
    Header,
    Fotter
  }
}
</script>

<style>
.ivu-input-search{
    background: rgba(30,100,180,1) !important;
}

.el-collapse-item__header{
  border-radius:10px 10px 0 0;
  background:rgba(242,245,250,1) !important;
  padding: 10px;
}
.el-collapse-item__wrap{
  border: none;
  border-radius:0 0 10px 10px;
  background:rgba(242,245,250,1);
  padding: 10px;
}
</style>
