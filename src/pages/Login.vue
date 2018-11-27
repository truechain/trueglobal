<template>
  <div class="fun">
    <Button class="sign" @click="_sign">{{ $t('root.run') }} </Button>
    <Modal v-model="isSelect" class-name="vertical-center-modal" :closable="false" footer-hide>
      <Tabs :value="currentName" class="tab">
        <!-- :style="reg" -->
        <TabPane :label="$t('function.login')" name="name1" class="reg" :style='reg_area'>
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
            <li :style='form_item_forgetPwd'>
              <a @click="forgetPwd">忘记密码?</a>
            </li>
          </ul>
          <Button :style="reg_btn" @click="_login">{{$t('function.login')}}</Button>
        </TabPane>
        <TabPane :label="$t('function.register')" name="name2" class="reg" :style='reg_area'>
          <ul :style="form_area">
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{ $t('function.mail') }}</p>
              </div>
              <Input clearable v-model="mail" />
              <!-- <Button class="ivu-input-group-append ivu-input-search" :disabled='btnBool' @click="getCode" :style="get_code">{{$t('function.getAuthCode')}}</Button> -->
            </li>
            <!-- <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{ $t('function.authCode') }}</p>
              </div>
              <Input clearable v-model="authCode" :maxlength="6" />
            </li> -->
            <li :style='form_item'>
              <div :style="l_t">
                <p :style="l_t_b">{{ $t('function.password') }}</p>
              </div>
              <Input clearable type="password" v-model="password" :maxlength="16" />
            </li>
          </ul>
          <Button :style="reg_btn" @click="_register"> {{ $t('function.register') }}</Button>
        </TabPane>
      </Tabs>
    </Modal>
    <Modal v-model="isForgetPwd" :closable="false"  footer-hide>
      <h2 class='forgetPwd-text'>重设密码</h2>
      <!-- <ul :style="form_area">
        <li :style='form_item'>
          <div :style="l_t">
            <p :style="l_t_b">{{$t('function.mail')}}</p>
          </div>
          <Input clearable v-model="forgetMail" />
        </li>
      </ul> -->
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="邮箱" prop="mail" style="width: 300px;">
          <Input type="text" v-model="formCustom.mail" number></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd" style="width: 300px;">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="密码确认" prop="passwdCheck" style="width: 300px;">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
          <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
      <!-- <Button :style="reg_btn" @click="_forget">确认</Button> -->
    </Modal>
  </div>
</template>
<script>
import {
  Button,
  Modal
} from 'iview'
import {
  setStore,
  getStore
} from '@/util'
import {
  sendEmail,
  register,
  login,
  forgetPwd,
  resetPwd
} from '../api/index.js'
export default {
  props: {
    isLogin: Boolean
  },
  mounted () {
    if (this.isLogin) {
      this.isSelect = true
    }
  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的密码'))
      } else {
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入秘密'))
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('俩次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (this.ver_mail.test(value)) {
          callback()
        } else {
          callback(new Error('请输入合法邮箱'))
        }
      }, 1000)
    }

    return {
      formCustom: {
        passwd: '',
        passwdCheck: '',
        mail: ''
      },
      ruleCustom: {
        passwd: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        passwdCheck: [{
          validator: validatePassCheck,
          trigger: 'blur'
        }],
        mail: [{
          validator: validateAge,
          trigger: 'blur'
        }]
      },
      isSelect: false,
      isForgetPwd: false,
      currentName: 'name1',
      mail: '',
      password: '',
      authCode: '',
      btn: true,
      timer: '',
      login_email: '',
      login_password: '',
      forgetMail: '',
      countdown: 60,
      btnBool: false,
      get_code_t: '获取验证码',
      ver_mail: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
      form_area: 'width:80%;',
      reg_area: 'display: flex;flex-direction: column;align-items: center;',
      form_item: 'display: flex;height: 50px;align-items: center;justify-content: space-around;',
      form_item_forgetPwd: 'float:right;',
      l_t: 'display: flex;flex-direction: column;line-height: 20px;min-width:30%;float: left;',
      l_t_b: 'font-weight:400;color:rgba(32,50,96,1);',
      reg_btn:
      'width: 100px;height: 30px;background: rgba(30,100,180,1);border-radius: 30px;color: #fff;margin-top: 30px;',
      get_code:
      'border: 1px solid red;width: 200px;height: 30px;display: flex;align-items: center;justify-content: center;'

    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          await resetPwd({
            mail: this.formCustom.mail,
            password: this.formCustom.passwd
          })
          this.$Message.success({
            content: '重置邮件已发送,请及时查看！',
            duration: 10
          })
          this.isSelect = false
          this.isForgetPwd = false
        } else {
          this.$Message.error('请完善必填!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    _sign () {
      if (getStore('token')) {
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
    async _register () {
      await register({
        mail: this.mail,
        password: this.password,
        authCode: this.authCode
      })
      this.$Message.success({
        content: '激活邮件已发送,请及时查看！',
        duration: 10
      })
      this.isSelect = false
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
              setStore('token', res.data.token)
              this.setCookie('login', true, 0.05)
              this.setCookie('token', res.data.token, 0.05)
              setTimeout(() => {
                this.isSelect = false
                // this.$router.push('/signin')
                window.location.href = '/signin'
              }, 1000)
            }
          })
        } else {
          this.$Message.error('请输入登录密码！')
        }
      } else {
        this.$Message.error('请输入有效的邮箱地址')
      }
    },
    forgetPwd () {
      this.isSelect = false
      this.isForgetPwd = true
    },
    _forget () {
      if (this.ver_mail.test(this.forgetMail)) {
        console.log(forgetPwd)

        // forgetPwd({}).then(res => {
        //   console.log(res, '重置密码返回')
        // })
      } else {
        this.$Message.error('请输入有效的邮箱地址')
      }
    }
  },
  components: {
    Button,
    Modal
  }
}

</script>
<style lang="less">
  .fun {
    display: flex;
    justify-content: center;

    .sign {
      width: 150px;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      border-radius: 25px;
      color: rgba(32, 50, 96, 1);
      background: rgba(255, 255, 255, 1);
    }
  }

  .ivu-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .forgetPwd-text {
      margin: 10px 0;
      font-size: 24px;
      font-weight: 400;
      color: rgba(30, 100, 180, 1);
    }
  }

</style>
