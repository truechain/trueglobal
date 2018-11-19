<template>
  <div class="container">
    <section class='sign_area'>
      <div class="sign_area_t">
        <p class="title_tit">{{ status }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { active } from '@/api'
console.log(active)

export default {
  data () {
    return {
      status: ''
    }
  },
  async mounted () {
    const res = await active({
      hash: this.$route.query.hash
    })
    if (res) {
      this.status = '账户已激活, 请前往登录'
      this.$Message.success('2秒钟后, 跳转登录页')
      setTimeout(() => {
        this.$router.push({
          path: '/',
          query: {
            login: true
          }
        })
      }, 2000)
    } else {
      this.status = '激活地址已失效'
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
        .submit-c {
            width: 150px;
            height: 40px;
            line-height: 40px;
            color: white;
            text-align: center;
            margin: 0 auto;
            background: rgba(30, 100, 180, 1);
            border-radius: 30px;
          }
      }
    }
  }

</style>
