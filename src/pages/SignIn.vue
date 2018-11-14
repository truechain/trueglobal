<template>
  <div class="container">
    <section class='sign_area'>
      <div class="sign_area_t">
        <p class="title_tit">"HelloWorld" - 2018 区块链应用落地大赛</p>
        <p class="title_tit">报名表</p>
      </div>
    </section>
    <section class="form">
      <div class="form_a">
        <p class="team_t">团队信息</p>
        <ul class="form_area">
          <li>
            <div class="l_t">
              <p class="l_t_b must">团队名称</p>
              <p class="l_t_s">Team name</p>
            </div>
            <Input v-model="teamName" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b must">团队负责人</p>
              <p class="l_t_s">Team lead</p>
            </div>
            <Input v-model="teamLead" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b">节点推荐人</p>
              <p class="l_t_s">Referal</p>
            </div>
            <Input v-model="referal" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b">参赛区域</p>
              <p class="l_t_s">City</p>
            </div>
            <Input v-model="city" placeholder="中国北京/Beijing, China" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b must">联系手机</p>
              <p class="l_t_s">Phone</p>
            </div>
            <Input v-model="phone" :maxlength="11" clearable />
          </li>
          <!-- <li>
            <div class="l_t">
              <p class="l_t_b must">邮箱</p>
              <p class="l_t_s">Email</p>
            </div>
            <Input v-model="email" clearable />
          </li> -->
          <li>
            <div class="l_t">
              <p class="l_t_b">微信</p>
              <p class="l_t_s">Wechat</p>
            </div>
            <Input v-model="wechat" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b">Telegram</p>
            </div>
            <Input v-model="telegram" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b">Facebook</p>
            </div>
            <Input v-model="facebook" clearable />
          </li>
          <li>
            <div class="l_t">
              <p class="l_t_b">Twitter</p>
            </div>
            <Input v-model="twitter" clearable />
          </li>
        </ul>

        <div class="prompt">
          <p class="_t">报名成功后，主办方会以邮件形式和您取得联系。</p>
          <p class="_t">After registration, the organizer will contact you via email. </p>
        </div>
        <Button class="submit" @click="submit">提交</Button>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Fotter from '@/components/Fotter'
import { Buttoon, Input } from 'iview'
import { signIn } from '../api/index.js'
export default {
  props: {

  },
  data () {
    return {
      teamName: '',
      teamLead: '',
      referal: '',
      city: '',
      phone: '',
      // email: '',
      wechat: '',
      telegram: '',
      facebook: '',
      twitter: ''
    }
  },
  mounted () {

  },
  methods: {
    submit () {
      if (!this.teamName && !this.teamLead && !this.phone) {
        this.$Message.error('请填写所必需信息！')
      } else {
        signIn({
          name: this.teamName,
          leader: this.teamLead,
          phone: this.phone
        }).then(res => {
          if (res.code === 0) {
            this.$Message.success(res.message)
          }
        }).catch(error => {
          console.log(error)
          this.$Message.error('提交报名信息失败，不可重复提交， 请稍后重试！')
        })
      }
    }
  },
  components: {
    Header, Input, Buttoon, Fotter
  }
}
</script>

<style scoped lang='less'>
.must{
  &::after{
    content: '*';
    color:red;
  }
}

.container{
    position: relative;
      .sign_area{
        min-height:390px;
        background: url('../assets/bg.png') no-repeat center;
        .sign_area_t{
            position: relative;
            top: 140px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title_tit{
              padding: 5px 0;
              font-size:30px;
              font-weight:400;
              line-height:30px;
              color:rgba(255,255,255,1);
            }
          }
        }
      .form{
        display: flex;
        justify-content: center;
        .form_a{
          width: 60%;
          position: relative;
          top: -100px;
          padding: 50px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
          border-radius:20px;
          background:rgba(255,255,255,1);
          box-shadow:0px 3px 20px 0px rgba(3,31,96,0.1);
          .form_area{
            width: 60%;
            margin-top: 50px;
            li{
              display: flex;
              height: 50px;
              align-items: center;
              justify-content: space-around;
              .l_t{
                display: flex;
                flex-direction: column;
                line-height: 20px;
                min-width:30%;
                float: left;
                  .l_t_b{
                    font-size:20px;
                    font-weight:400;
                    color:rgba(32,50,96,1);
                  }
                  .l_t_s{
                    font-size:12px;
                    font-weight:400;
                    color:rgba(98,119,146,1);
                  }
              }
              input{
                width: 70%;
              }
            }
          }
          .prompt{
            width: 60%;
            margin-top: 20px;
              ._t{
                font-size:12px;
                font-weight:400;
                line-height:20px;
                color:rgba(98,119,146,1);
              }
            }
          .submit{
            margin-top: 50px;
            font-size:18px;
            font-weight:400;
            color:rgba(255,255,255,1);
            width:219px;
            height:60px;
            background:rgba(30,100,180,1);
            border-radius:30px;
        }
      }
    }
}
</style>
