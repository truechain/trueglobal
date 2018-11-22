<template>
  <div class="container">
    <section class='h_area'>
      <div class="_w">
        <img src="@/assets/logo.png" class="logo" alt="">
        <p class="title_tit">“HelloWorld”</p>
        <!-- 2018区块链<span class="block-br">应用落地大赛</span> -->
        <p class="title_tit">{{ $t('root.slogan')}} </p>
        <p class="title_intr">{{ $t('root.subhead')}}</p>
        <p class="title_intr">{{ $t('root.host')}}：TrueGlobal</p>
        <!-- <Button class="sign" @click="_sign">报名参赛</Button> -->
        <Login :isLogin="Boolean($route.query.login)" />
      </div>
      <!-- @click="isLogin = true" -->
    </section>
    <!-- introduction -->
    <section class="wrap" id='inter'>
      <div class="pu_dis">
        <p class="pu_t1">{{ $t('intro.title')}}</p>
        <p class="line"></p>
        <p
          class="in_t"
          v-for="(item, index) in $t('intro.list')"
          :key="index">
          {{item}}
        </p>
      </div>
    </section>
    <!-- area -->
    <section class="wrap _area">
      <div class="pu_dis _area_a">
        <p class="pu_t1">{{ $t('irea.title')}}</p>
        <p class="line"></p>
        <p class="_area_t">{{ $t('irea.content')}}</p>
        <img src="@/assets/map.png" class="_area_bg" alt="">
      </div>
    </section>

    <!-- member -->
    <section class="wrap member" id='pw'>
      <div class="pu_dis">
        <p class="pu_t1">{{ $t('guest.title')}}</p>
        <p class="line"></p>
        <!-- <p class="member_i">于佳宁 沈寓实 林垂宙 刘洋 张剑南 程小永 汪洋 叶雨</p> -->
        <ul>
          <li v-for="(item,index) in $t('guest.list')" :key='index'>
            <div class="list-avatar">
              <img :src="require(`@/assets/member/${item.imgSrc}.png`)" alt="">
            </div>
            <div class="list-name">{{item.name}}</div>
            <div class="list-detail" v-for="(t,index) in item.introList" :key='index'>{{t}}</div>
          </li>
        </ul>
      </div>
    </section>

    <!-- rights and interests -->
    <section class="wrap rni" id="rni">
      <div class="pu_dis rni_area">
        <p class="pu_t1">{{ $t('rights.title')}}</p>
        <p class="line"></p>
        <ul class="rni_info">
          <li v-for="(item, index) in $t('rights.list')" :key='index'>
            <img :src="require(`@/assets/${item.icon}.png`)" alt="">
            <p class="rni_t">{{ item.title }}</p>
            <p class="rni_t1">{{ item.content }}</p>
          </li>
        </ul>
        <p class="pu_t1">{{ $t('rights.actual')}}</p>
        <p class="rni_i">{{ $t('rights.info')}}</p>
        <p class="rni_i" style="font-size:45px">10000 TRUE +</p>

      </div>
    </section>

    <!-- Schedule -->
    <section class="wrap award schedule" id='schedule'>
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">{{ $t('flow.title')}}</p>
        <p class="line"></p>
        <!-- <ul class="award_t_a">
          <li v-for="(item,index) in $t('flow.list')" :key='index'>
            {{ item }}
          </li>
        </ul> -->
        <Timeline class="award_t_a">
          <TimelineItem v-for="(item,index) in $t('flow.list')" :key='index'>
            <p class="time">{{item.time}}</p>
            <p class="content">{{item.event}}</p>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- rule -->
    <section class="wrap award schedule rule" id='rule'>
      <div class="pu_dis award_area schedule_area rule_area">
        <p class="pu_t1">{{ $t('rule.title')}}</p>
        <p class="line"></p>
        <div class="rule_t">
          <div v-for="(item,index) in $t('rule.list')" :key='index'>
            <p class="_t1">{{ item.title }}</p>
            <ul>
              <li v-for="(item,index) in item.list" :key='index'>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Claim -->
    <section class="wrap award schedule claim" id='claim'>
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">{{ $t('require.title')}}</p>
        <p class="line"></p>
        <ul class="award_t_a">
         <li v-for="(item,index) in $t('require.list')" :key='index'>
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- mechanism -->
    <section class="wrap award mechanism co_hosting">
      <div class="pu_dis award_area">
        <p class="pu_t1">{{ $t('sponsor.title')}}</p>
        <p class="line"></p>
        <ul class="mechanism_area co_hosting_cen">
          <li v-for="(item,index) in co_hosting" :key='index' class="mechanism_item">
            <img :src="item" alt="" class="mechanism_i">
          </li>
        </ul>
      </div>
    </section>

    <section class="wrap award mechanism community">
      <div class="pu_dis award_area">
        <p class="pu_t1"> {{ $t('alliance.title')}}</p>
        <p class="line"></p>
        <ul class="mechanism_area">
          <li v-for="(item,index) in mechanism" :key='index' class="mechanism_item">
            <img :src='item' alt="" class="mechanism_i">
          </li>
        </ul>
      </div>
    </section>

    <!-- Media -->
    <section class="wrap award mechanism">
      <div class="pu_dis award_area">
        <p class="pu_t1"> {{ $t('media.title')}}</p>
        <p class="line"></p>
        <ul class="mechanism_area">
          <li v-for="(item,index) in media" :key='index' class="mechanism_item">
            <img :src='item' alt="" class="mechanism_i">
          </li>
        </ul>
      </div>
    </section>

    <section class="wrap award mechanism contact" id='contact'>
      <div class="pu_dis award_area">
        <p class="pu_t1">{{ $t('we.title')}}</p>
        <p class="line"></p>
        <div class="contact_a">
          <div class="_t">
            <span>
              {{ $t('we.content')}}
            </span>
            <a href="mailto:helloworld@trueglobal.pro">helloworld@trueglobal.pro</a>
            <span v-show="$t('language') !== 'EN'">
              {{ $t('we.title')}}
            </span>
          </div>
          <ul class="qr">
            <li>
              <img src="../assets/qr/weixin.png" alt="">
              <p>{{ $t('we.qr1')}}</p>
            </li>
            <li>
              <img src="../assets/qr/twitter.png" alt="">
              <p>{{ $t('we.qr2')}}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Login from '@/pages/Login'
export default {
  data () {
    return {
      mechanism: [],
      co_hosting: [],
      media: [],
      isLogin: false
    }
  },
  mounted () {
    for (var i = 0; i < 16; i++) {
      var j = i + 1
      this.mechanism.push(require('../assets/cooperativeInstitution/' + j + '.png'))
    }
    for (var x = 0; x < 4; x++) {
      var p = x + 1
      this.co_hosting.push(require('../assets/co_hosting/' + p + '.png'))
    }
    for (var m = 0; m < 8; m++) {
      var d = m + 1
      this.media.push(require('../assets/media/' + d + '.png'))
    }
  },
  components: {
    Login
  }
}

</script>

<style scoped lang='less'>
  @media screen and (max-width: 860px) {
    .block-br {
      display: block;
    }
    .qr {
      flex-direction: column;
      align-items: center;
    }
  }

  .ivu-tabs-nav {
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
  }

  .qqwximg {
    height: 38px;
  }

  .error-text {
    color: #fa8341;
  }

  .line {
    width: 100px;
    height: 6px;
    margin-top: 20px;
    border-radius: 3px;
    background: rgba(30, 100, 180, 1);
  }

  .in_t {
    font-size: 16px;
    font-weight: 400;
    color: rgba(98, 119, 146, 1);
    line-height: 30px;
    margin-top: 30px;
  }

  .pu_t1 {
    font-size: 36px;
    font-family: SourceHanSansSC-Heavy;
    font-weight: 800;
    color: rgba(30, 100, 180, 1);
  }

  .wrap {
    display: flex;
    justify-content: center;
    padding: 100px 0;
  }

  .pu_dis {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .container {
    width: 100%;

    .h_area {
      height: 650px;
      background: url('../assets/bg.png') no-repeat center;

      ._w {
        position: relative;
        top: 90px;
        height: 540px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        .logo {
          width: 100px;
          height: 100px;
        }

        .title_tit {
          text-align: center;
          font-size: 44px;
          font-weight: 600;
          line-height: 60px;
          color: rgba(255, 255, 255, 1);
        }

        .title_intr {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          padding: 0 20px;
          color: rgba(255, 255, 255, 1);
          font-family: PingFangSC-Regular;
        }

        .sign {
          width: 150px;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          border-radius: 25px;
          color: rgba(32, 50, 96, 1);
          font-family: PingFangSC-Regular;
          background: rgba(255, 255, 255, 1);
        }
      }

      .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .pu_t1 {
      font-size: 36px;
      font-family: SourceHanSansSC-Heavy;
      font-weight: 800;
      color: rgba(30, 100, 180, 1);
    }

    ._area {
      background: rgba(242, 245, 250, 1);

      ._area_a {
        ._area_t {
          width: 100%;
          margin: 22px 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 30px;
          color: rgba(98, 119, 146, 1);
        }

        ._area_bg {
          width: 100%;
        }
      }
    }

    .rni {
      background: rgba(242, 245, 250, 1);

      .rni_area {
        width: 80%;

        .rni_info {
          display: flex;
          margin-top: 50px;
          flex-wrap: wrap;
          justify-content: center;

          li {
            display: flex;
            height: 300px;
            padding: 0 10px;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .rni_t {
              font-size: 24px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(30, 100, 180, 1);
              line-height: 30px;
            }

            .rni_t1 {
              width: 223px;
              min-height: 80px;
              font-size: 12px;
              font-weight: 400;
              line-height: 30px;
              text-align: center;
              letter-spacing: 1px;
              font-family: PingFangSC-Regular;
              color: rgba(98, 119, 146, 1);
            }
          }
        }

        .rni_i {
          margin-top: 30px;
          font-size: 12px;
          line-height: 50px;
          font-weight: 400;
          color: rgba(98, 119, 146, 1);
        }
      }
    }

    .member {
      display: flex;

      ul {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
          width: 200px;
          display: flex;
          flex-direction: column;
          margin: 0 40px 60px;

          .list-avatar {
            width: 100%;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            margin-bottom: 10px;

            img {
              vertical-align: bottom;
              width: 100%;
              height: 100%;
            }
          }

          .list-name {
            padding: 25px 0 5px;
            font-size: 20px;
            color: rgba(32, 50, 96, 1);
            text-align: center;
          }

          .list-detail {
            text-align: center;
            font-size: 12px;
            line-height: 22px;
            color: rgba(98, 119, 146, 1);
            position: relative;
          }
        }
      }
    }

    .award {
      .award_area {
        display: flex;
        justify-content: end;

        .award_t_a {
          margin-top: 50px;
          width: 100%;

          p {
            font-size: 16px;
            font-family: SourceHanSansSC-Heavy;
            font-weight: 800;
            color: rgba(98, 119, 146, 1);
            line-height: 30px;
          }
        }
      }
    }

    .schedule {
      .schedule_area {
        li {
          font-size: 16px;
          font-weight: 400;
          line-height: 30px;
          color: rgba(98, 119, 146, 1);
        }
      }
    }

    .rule {
      background: rgba(242, 245, 250, 1);

      .rule_t {
        width: 100%;
        margin-top: 50px;
        min-height: 280px;
        display: flex;
        flex-direction: column;

        ._t1 {
          font-size: 16px;
          font-weight: bold;
          color: #627792;
          line-height: 30px;
        }

        p,
        li {
          font-size: 13px;
          font-weight: 400;
          line-height: 30px;
          color: rgba(98, 119, 146, 1);
        }
      }
    }

    .works {
      background: #fff;
    }

    .scheSystem {
      .scheSystem_t {
        min-height: 500px;
      }
    }

    .mechanism {
      background: rgba(242, 245, 250, 1);

      .mechanism_area {
        margin-top: 48px;
        display: flex;
        // width: 1205px;
        flex-wrap: wrap;
        justify-content: center;

        .mechanism_item {
          margin: 3px 10px;

          img {
            border: 1px solid #ccc;
            width: 220px;
            height: 100px;
          }

        }
      }

      .co_hosting_cen {
        justify-content: center;
      }
    }

    .community {
      background: #fff;
    }

    .contact {
      background: #fff;

      .contact_a {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;

        ._t {
          font-size: 16px;
          font-weight: 400;
          color: rgba(98, 119, 146, 1);
        }

        .qr {
          display: flex;
          margin-top: 10px;
          width: 100%;
          justify-content: center;
          li {
            margin: 20px 20px 0;
            text-align: center;
            width: 150px;
            img {
              width: 100%;
            }
            p {
              // margin-top: 20px;
              line-height: 30px;
              font-size: 16px;
              color: rgba(98, 119, 146, 1);
            }
          }
        }
      }
    }
  }

</style>
