<template>
  <div class="fotter">
    <p>
      {{exp}}
      <br>
      {{trueglobal}}
    </p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      trueglobal: 'Copyright ©2018 trueglobal',
      exp: '大赛的最终解释权归TrueGlobal所有'
    }
  }
}
</script>

<style scoped lang='less'>
.fotter{
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
