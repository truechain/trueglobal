<template>
  <div class="fotter">
    <p>{{trueglobal}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      trueglobal: 'Copyright ©2018 trueglobal'
    }
  }
}
</script>

<style scoped lang='less'>
.fotter{
  width:100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(11,18,55,1);
  p{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:24px;
  }
}

</style>
