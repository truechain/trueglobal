<template>
  <section :class="[isWhite?'_white':null ,'container']">
    <header class="_w">
      <router-link tag='div' to='/' class="logo_area">
        <img src="@/assets/logo.png" class="logo" alt="">
      </router-link>
      <Menu mode="horizontal" class='menu'>
        <MenuItem name="1">
        参赛权益
        </MenuItem>
        <MenuItem name="2">
        大赛奖项
        </MenuItem>
        <MenuItem name="3">
        时间安排
        </MenuItem>
        <MenuItem name="4">
        报名规则
        </MenuItem>
        <MenuItem name="5">
        参赛要求
        </MenuItem>
        <MenuItem name="6">
        参赛作品
        </MenuItem>
        <MenuItem name="7">
        赛程赛制
        </MenuItem>
      </Menu>
    </header>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: ['isWhite'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  ._white{
    background-color: #fff
  }
  .ivu-menu{
    position: unset;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: transparent
  }
  .container {
    top:0;
    width:100%;
    height:90px;
    z-index: 10;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    ._w{
      width:80%;
      height:60px;
      display: flex;
      justify-content: space-between;
    }
    .logo_area{
      width:20%;
      display: flex;
      justify-content: center;
      .logo{
        width:60px;
        height:60px
      }
    }
    .menu{
      width:80%;
      border: none;
      display: flex;
      background: transparent;
      justify-content: space-around;
    }
  }
</style>
