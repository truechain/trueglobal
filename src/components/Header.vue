<template>
  <header :class="[isBg?'_bg':null ,'container']">
    <router-link tag='div' to='/' class="logo_t">
      TrueGlobal
    </router-link>
    <Menu mode="horizontal" class='menu'>
      <MenuItem name="1">
      <a href="#rni">参赛权益</a>
      </MenuItem>
      <MenuItem name="2">
      <a href="#award">大赛奖项</a>
      </MenuItem>
      <MenuItem name="3">
      <a href="#schedule">时间安排</a>
      </MenuItem>
      <MenuItem name="4">
      <a href="#rule">报名规则</a>
      </MenuItem>
      <MenuItem name="5">
      <a href="#claim">参赛要求</a>
      </MenuItem>
      <MenuItem name="6">
      <a href="#works">参赛作品</a>
      </MenuItem>
      <MenuItem name="7">
      <a href="#scheSystem">赛程赛制</a>
      </MenuItem>
    </Menu>
    <Dropdown class="language">
      <a href="javascript:void(0)">
        简体中文
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <!-- <DropdownMenu slot="list">
        <DropdownItem>EN</DropdownItem>
      </DropdownMenu> -->
    </Dropdown>
  </header>
</template>

<script>
import { Dropdown, DropdownMenu } from 'iview'
export default {
  name: 'Header',
  props: ['isBg'],
  data () {
    return {}
  },
  components: {
    Dropdown, DropdownMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  ._bg{
    background-color: #203260 !important;
  }
  .ivu-menu{
    position: unset;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: transparent
  }
  a{
    text-decoration:none;
    color: rgba(169,173,187,1);
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
    background-color:rgba(0,0,0,0.1);
    .logo_t{
      width:30%;
      font-size:24px;
      font-family:SourceHanSansSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    .menu{
      // max-width:50%;
      border: none;
      background: transparent;
      .ivu-menu-item{
        font-size: 12px !important;
        color:rgba(169,173,187,1);
      }
    }
    .language{
      font-size: 12px;
    }
  }
</style>
