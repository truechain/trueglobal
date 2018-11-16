<template>
  <header :class="[isBg?'_bg':null ,'container']">
    <div>
      <router-link tag='div' to='/' class="logo_t">
        TrueGlobal
      </router-link>
    </div>
    <Menu mode="horizontal" class='menu'>
      <a href="#inter">
        <MenuItem name="1">
        {{ $t('nav.intro')}}
        </MenuItem>
      </a>
      <a href="#pw">
        <MenuItem name="2">
        {{ $t('nav.guest')}}
        </MenuItem>
      </a>
      <a href="#rni">
        <MenuItem name="3">
        {{ $t('nav.rights')}}
        </MenuItem>
      </a>
      <a href="#rule">
        <MenuItem name="4">
        {{ $t('nav.rule')}}
        </MenuItem>
      </a>
      <a href="#claim">
        <MenuItem name="5">
        {{ $t('nav.require')}}
        </MenuItem>
      </a>
      <a href="#contact">
        <MenuItem name="6">
        {{ $t('nav.we')}}
        </MenuItem>
      </a>
    </Menu>
    <div>
      <Dropdown @on-click="changeLanguage">
        <a href="javascript:void(0)">
          {{ $t('language') }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="item in langs" :name="item.tag" :key="item.tag">
            {{item.name}}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </header>
</template>

<script>
  import { getStore, setStore } from '@/util'
  export default {
    name: 'Header',
    props: ['isBg'],
    data() {
      return {
        langs: [{
            name: '简体中文',
            tag: 'zh'
          },
          {
            name: 'EN',
            tag: 'en'
          },
        ]
      }
    },
    methods: {
      changeLanguage (lang) {
        setStore('lang', lang)
        location.reload()
        // debugger
        // console.log(this,'===');
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  @media screen and (max-width: 900px) {
    .menu {
      display: none;
    }
  }

  ._bg {
    background-color: #203260 !important;
  }

  .ivu-menu {
    position: unset;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    background: transparent
  }

  a {
    text-decoration: none;
    color: rgba(169, 173, 187, 1);
  }

  .container {
    top: 0;
    width: 100%;
    height: 90px;
    z-index: 10;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);

    .logo_t {
      width: 30%;
      font-size: 24px;
      font-family: SourceHanSansSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin: 0 30px;
    }

    .menu {
      // max-width:50%;
      border: none;
      background: transparent;

      .ivu-menu-item {
        // font-size: 12px !important;
        color: rgba(169, 173, 187, 1);
      }
    }

    .ivu-dropdown-rel > a {
      font-size: 15px !important;
    }
  }

</style>
