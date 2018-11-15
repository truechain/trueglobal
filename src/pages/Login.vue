<template>
  <div class="fun">
    <Button class="sign" @click="_sign">{{ $t('root.run') }} </Button>
    <Modal v-model="isSelect" class-name="vertical-center-modal" :closable="false" footer-hide>
      <Tabs :value="currentName" class="tab">
        <!-- :style="reg" -->
        <TabPane :label="$t('function.register')" name="name1" class="reg" :style='reg_area'>
          <ul :style="form_area">
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{ $t('function.mail') }}</p>
              </div>
              <Input clearable v-model="mail" />
              <Button class="ivu-input-group-append ivu-input-search" :disabled='btnBool' @click="getCode" :style="get_code">{{$t('function.getAuthCode')}}</Button>
            </li>
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{ $t('function.authCode') }}</p>
              </div>
              <Input clearable v-model="authCode" :maxlength="6" />
            </li>
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{ $t('function.password') }}</p>
              </div>
              <Input clearable type="password" v-model="password" :maxlength="16" />
            </li>
          </ul>
          <Button :style="reg_btn" @click="_register"> {{ $t('function.register') }}</Button>
        </TabPane>
        <TabPane :label="$t('function.login')" name="name2" class="reg" :style='reg_area'>
          <ul :style="form_area">
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{$t('function.mail')}}</p>
              </div>
              <Input clearable v-model="login_email" />
            </li>
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{$t('function.password')}}</p>
              </div>
              <Input clearable v-model="login_password" type="password" :maxlength="16" />
            </li>
          </ul>
          <Button :style="reg_btn" @click="_login">{{$t('function.login')}}</Button>
        </TabPane>
      </Tabs>
    </Modal>
  </div>
</template>
<script>
import { Button, Modal } from 'iview'
import { sendEmail, register, login } from '../api/index.js'
export default {
  data () {
    return {
      isSelect: false,
      currentName: 'name1',
      mail: '',
      password: '',
      authCode: '',
      btn: true,
      timer: '',
      login_email: '',
      login_password: '',
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
      if (this.getCookie('login')) {
        this.$router.push('/signin')
      } else {
        this.isSelect = true
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
            this.$Message.success('验证码发送成功，请去查看验证！')
            this.setTime()
            this.timer = setInterval(() => {
              this.setTime()
            }, 1000)
          })
        } else {
          this.$Message.error('请输入有效的邮箱地址')
        }
      }
    },
    _register () {

      register({
        mail: this.mail,
        password: this.password,
        authCode: this.authCode
      }).then(res => {
        if (res.code === 0) {
          this.$Message.success('注册成功，请前去登录！')
          setTimeout(() => {
            this.currentName = 'name2'
          }, 1000);
        }
      }).catch(error => {
        this.$Message.error('账户已注册.')
      })
    },
    _login () {
      if (this.ver_mail.test(this.login_email)) {
        if (this.login_password) {
          login({
            mail: this.login_email,
            password: this.login_password
          }).then(res => {
            if (res.code === 0) {
              this.$Message.success('登录成功')
              this.setCookie('login', true, 0.05)
              this.setCookie('token', res.data.token, 0.05)
              setTimeout(() => {
                this.isSelect = false
                this.$router.push('/signin')
              }, 1000)
            }
          }).catch(error => {
            this.$Message.error('登录失败，请检查邮箱地址与密码是否正确！')
          })
        } else {
          this.$Message.error('请输入登录密码！')
        }
      } else {
        this.$Message.error('请输入有效的邮箱地址')
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
