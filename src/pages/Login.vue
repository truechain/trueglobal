<template>
  <div class="fun">
    <Button class="sign" @click="_sign">报名参赛</Button>
    <Modal v-model="isLogin" class-name="vertical-center-modal" :closable="false" footer-hide>
      <Tabs value="name1" class="tab">
        <!-- :style="reg" -->
        <TabPane label="注册" name="name1" class="reg" :style='reg_area'>
          <ul :style="form_area">
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">邮箱</p>
              </div>
              <Input clearable v-model="mail" />
              <Button class="ivu-input-group-append ivu-input-search" :disabled='btnBool' @click="getCode" :style="get_code">{{get_code_t}}</Button>
            </li>
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">验证码</p>
              </div>
              <Input clearable />
            </li>
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">登录密码</p>
              </div>
              <Input clearable />
            </li>
          </ul>
          <Button :style="reg_btn">注册</Button>
        </TabPane>
        <TabPane label="登录" name="name2">登录</TabPane>
      </Tabs>
    </Modal>
  </div>
</template>
<script>
import { Button, Modal } from 'iview'
import { sendEmail } from '../api/index.js'
export default {
  data () {
    return {
      isLogin: false,
      mail: '',
      btn: true,
      timer: '',
      countdown: 60,
      btnBool: false,
      get_code_t: '获取验证码',
      ver_mail: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
      form_area: 'width:80%',
      reg_area: 'display: flex;flex-direction: column;align-items: center;',
      form_item: 'display: flex;height: 50px;align-items: center;justify-content: space-around;',
      l_t: 'display: flex;flex-direction: column;line-height: 20px;min-width:30%;float: left;',
      l_t_b: 'font-weight:400;color:rgba(32,50,96,1);',
      reg_btn: 'width: 100px;height: 30px;background: rgba(30,100,180,1);border-radius: 30px;color: #fff;margin-top: 30px;',
      get_code: 'border: 1px solid red;width: 200px;height: 30px;display: flex;align-items: center;justify-content: center;'
    }
  },
  methods: {
    _sign () {
      // this.setCookie('login', 'true', '1')
      this.isLogin = JSON.parse(this.getCookie('login'))
      if (!this.isLogin) {
        alert('已登录')
      }
    },
    setCookie: (cname, cvalue, exdays) => {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toUTCString()
      document.cookie = cname + '=' + cvalue + '; ' + expires
    },
    getCookie: (cname) => {
      var name = cname + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1)
        if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
      }
      return ''
    },
    setTime () { // 倒计时
      if (this.countdown === 0) {
        this.btnBool = false
        this.get_code_t = '获取验证码'
        this.countdown = 60
        clearInterval(this.timer)
      } else {
        this.btnBool = true
        this.get_code_t = '重新发送(' + this.countdown + ')'
        this.countdown--
      }
    },
    getCode () {
      if (!this.mail) {
        alert('请输入邮箱地址！')
      } else {
        if (this.ver_mail.test(this.mail)) {
          sendEmail({
            mail: this.mail
          }).then(res => {
            if (res.data === 0) {
              this.$Message.success('验证码发送成功，请去查看验证！')
              this.setTime()
              this.timer = setInterval(() => {
                this.setTime()
              }, 1000)
            } else {
              this.$Message.success('发送失败，请稍后重试！')
            }
          })
        } else {
          alert('请输入有效的邮箱地址！')
        }
      }
    }
  },
  components: {
    Button, Modal
  }
}
</script>
<style lang="less">
.fun{
  display: flex;
  justify-content: center;
  .sign{
      width:150px;
      font-size:18px;
      font-weight:400;
      line-height:24px;
      border-radius:25px;
      color:rgba(32,50,96,1);
      background:rgba(255,255,255,1);
    }
}
</style>
