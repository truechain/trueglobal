<template>
  <header :class="[isBg?'_bg':null ,'container']">
    <router-link tag='div' to='/' class="logo_t">
      TrueGlobal
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
</template>

<script>
export default {
  name: 'Header',
  props: ['isBg'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  ._bg{
    background-color: #203260;
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
    .logo_t{
      width:30%;
      font-size:24px;
      font-family:SourceHanSansSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    .menu{
      width:50%;
      border: none;
      background: transparent;
      .ivu-menu-item{
        font-size: 12px !important;
        color:rgba(169,173,187,1);
      }
    }
  }
</style>
