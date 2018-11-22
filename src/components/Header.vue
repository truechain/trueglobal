<template>
  <header class="container">
    <div>
      <router-link tag='div' to='/' class="logo_t">
        TrueGlobal
      </router-link>
    </div>
    <Menu mode="horizontal" class='menu'>
      <router-link
        :to="item.router"
        v-for="(item,index) in $t('nav')"
        :key='index'
        tag='a'>
        <MenuItem :name="index">
        {{item.name}}
        </MenuItem>
      </router-link>
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
    <template v-if="getStore('token')">
      <Menu mode="horizontal" class='menu' @on-select="modal1 = true">
        <MenuItem name="logout" >
          {{ $t('function.logout') }}
        </MenuItem>
      </Menu>
    </template>
    <Modal
        v-model="modal1"
        :title="$t('function.logout')"
        @on-ok="ok">
        <p>{{ $t('function.logoutC') }}</p>
    </Modal>
    <span class="container-app-header-button" @click.stop="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="container-app-header-nav">
      <ul style="height: 240px;" :style="{'height': langsSelectorIsOpen ? `${40 * 8}px` : '0'}">
        <li v-for="(item,index) in $t('nav')" :key='index' @click="jumpTo($event,item.router)">
          <a>
            {{item.name}}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import {
  getStore,
  setStore,
  removeStore
} from '@/util'
export default {
  name: 'Header',
  props: ['isBg'],
  data () {
    return {
      modal1: false,
      langs: [{
        name: '中文',
        tag: 'zh'
      },
      {
        name: 'EN',
        tag: 'en'
      },
      {
        name: '한국어',
        tag: 'ko'
      },
      {
        name: 'Tiếng Việt',
        tag: 'vn'
      }
      ],
      langsSelectorIsOpen: false
    }
  },
  methods: {
    getStore,
    ok () {
      removeStore('token')
      this.$Message.success({
        content: '退出成功',
        duration: 2
      })
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    },
    changeLanguage (lang) {
      setStore('lang', lang)
      location.reload()
      // debugger
      // console.log(this,'===');
    },
    toggleMenu () {
      this.closeLangsSelector()
      if (!this.menuIsOpen) {
        this.menuIsOpen = true
      } else {
        this.menuIsOpen = false
      }
    },
    closeLangsSelector () {
      this.langsSelectorIsOpen = !this.langsSelectorIsOpen
    },
    jumpTo (e, router) {
      e.target.href = router
      this.closeLangsSelector()
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

    .container-app-header-button {
      display: block !important;
    }

    .container-app-header-nav {
      color: #456c99;

      ul {
        background-color: #203260;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 90px;
        width: 100%;
        -webkit-transition: height .6s;
        transition: height .6s;

        li {
          float: none;
          line-height: 30px;
          margin-left: 0;
          border: none !important;
          color: #a9adbb;
          font-size: 14px;
          -webkit-transition: color .4s;
          transition: color .4s;
          padding: 5px 15px;
          position: relative;
        }
      }
    }
  }

  // ._bg {
  //   background-color: #203260 !important;
  // }

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
    background-color: #203260;
    display: -webkit-box;
    .container-app-header-button {
      display: none;
      float: right;
      margin-left: 5px;
      cursor: pointer;

      span {
        background-color: #fff;
        display: block;
        margin: 7px 0;
        width: 30px;
        height: 2px;
      }
    }

    .container-app-header-nav {
      color: #456c99;

      ul {
        height: 0;
        overflow: hidden;
        background-color: #203260;
      }
    }

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

    .ivu-dropdown-rel>a {
      font-size: 15px !important;
    }
  }

</style>
