<template>
  <div class="container">
    <section class='sign_area'>
      <div class="sign_area_t">
        <p class="title_tit">"HelloWorld" - 2018 <span class="block-br">区块链应用落地大赛</span></p>
        <p class="title_tit">报名表</p>
      </div>
    </section>
    <section class="form">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="form_a">
        <p class="team_t">团队信息</p>
        <FormItem label="团队名称" prop="name">
          <Input v-model="formValidate.name" />
        </FormItem>
        <FormItem label="联系人" prop="leader">
          <Input v-model="formValidate.leader" />
        </FormItem>
        <FormItem label="联系手机" prop="phone">
          <Input v-model="formValidate.phone" />
        </FormItem>
        <FormItem label="微信" prop="wechat">
          <Input v-model="formValidate.wechat" />
        </FormItem>
        <FormItem label="Telegram" prop="telegram">
          <Input v-model="formValidate.telegram" />
        </FormItem>
        <FormItem label="Facebook" prop="facebook">
          <Input v-model="formValidate.facebook" />
        </FormItem>
        <FormItem label="Twitter" prop="twitter">
          <Input v-model="formValidate.twitter" />
        </FormItem>
         <FormItem label="参赛区域" prop="city">
          <Input v-model="formValidate.city" placeholder="中国北京/Beijing, China"  />
        </FormItem>
         <FormItem label="节点推荐人" prop="referal">
          <Input v-model="formValidate.referal" />
        </FormItem>
        <div class="prompt">
          <p class="_t">报名成功后，主办方会以邮件形式和您取得联系。</p>
        </div>
        <FormItem>
          <Button type="primary" class="submit" @click="handleSubmit('formValidate')">提交</Button>
          <!-- <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button> -->
        </FormItem>
      </Form>
    </section>
  </div>
</template>

<script>
  import {
    signIn
  } from '../api/index.js'
  export default {
    data() {
      return {
        formValidate: {
          name: '',
          leader: '',
          referal: '',
          city: '',
          phone: '',
          wechat: '',
          telegram: '',
          facebook: '',
          twitter: ''
        },
        ruleValidate: {
          name: [{
            required: true,
            message: '名称不能为空',
            trigger: 'blur'
          }],
          phone: [{
            required: true,
            message: '电话不能为空',
            trigger: 'change'
          }],
          leader: [{
            required: true,
            message: '联系人不能为空',
            trigger: 'change'
          }]
        },
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
             signIn(this.formValidate).then(res => {
            if (res.code === 0) {
              this.$Message.success(res.message)
              setTimeout(() => {
                this.$router.push('/')
              }, 1000);
            }
          }).catch(error => {
            this.$Message.error('提交报名信息失败，不可重复提交！')
          })
          } else {
            this.$Message.error('请填写必填项!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }

</script>

<style scoped lang='less'>
.ivu-input-default {
  max-width: 320px !important;
}
  @media screen and (max-width: 860px) {
    .block-br {
      display: block;
    }

    .form_a {
      width: 80% !important;
      padding: 25px 40px !important;
    }
  }

  .team_t {
    font-size: 20px;
    font-weight: bold;
  }

  .must {
    &::after {
      content: '*';
      color: red;
    }
  }

  .container {
    position: relative;

    .sign_area {
      min-height: 390px;
      background: url('../assets/bg.png') no-repeat center;

      .sign_area_t {
        position: relative;
        top: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title_tit {
          padding: 5px 0;
          font-size: 30px;
          font-weight: 400;
          line-height: 40px;
          color: rgba(255, 255, 255, 1);
        }
      }
    }

    .form {
      display: flex;
      justify-content: center;

      .form_a {
        width: 60%;
        max-width: 600px;
        position: relative;
        top: -100px;
        padding: 25px 60px;
        // display: flex;
        // align-items: center;
        // flex-direction: column;
        // justify-content: space-around;
        border-radius: 20px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 20px 0px rgba(3, 31, 96, 0.1);
        .team_t {
          text-align: center;
          line-height: 50px;
        }
        .form_area {
          width: 60%;
          margin-top: 50px;

          li {
            display: flex;
            height: 50px;
            align-items: center;
            justify-content: space-around;

            .l_t {
              display: flex;
              flex-direction: column;
              line-height: 20px;
              min-width: 30%;
              float: left;

              .l_t_b {
                font-size: 20px;
                font-weight: 400;
                color: rgba(32, 50, 96, 1);
              }

              .l_t_s {
                font-size: 12px;
                font-weight: 400;
                color: rgba(98, 119, 146, 1);
              }
            }

            input {
              width: 70%;
            }
          }
        }

        .prompt {
          text-align: center;
          margin: 20px 0;
          ._t {
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(98, 119, 146, 1);
          }
        }

        .submit {
          text-align: center;
          // margin: auto;
          margin-left: 110px;
          width: 150px;
          height: 40px;
          background: rgba(30, 100, 180, 1);
          border-radius: 30px;
        }
      }
    }
  }

</style>
