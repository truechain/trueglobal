<template>
  <div class="fotter">
    <p>
      {{$t('state.content')}}
      <br>
      <span>Copyright ©2018 trueglobal</span>
    </p>
  </div>
</template>

<style scoped lang='less'>
  .fotter {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(11, 18, 55, 1);
    p {
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
    }
  }

</style>
