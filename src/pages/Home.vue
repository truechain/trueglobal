<template>
  <div class="container">
    <section class='h_area'>
      <div class="_w">
        <img src="@/assets/logo.png" class="logo" alt="">
        <p class="title_tit">“HelloWorld”</p>
        <p class="title_tit">—2018区块链应用落地大赛</p>
        <p class="title_intr">指导单位：中国云体系产业战略创新联盟、清华大学互联网产业研究院 主办方：TrueGlobal </p>
        <p class="title_intr">联合主办：启迪链网、启迪之星、初链、布洛克科技火聘online 联盟社区：ITPUB、CocoChina、ITechPlus、极部落、链习堂、GeekSight</p>
        <Button class="sign">报名参赛</Button>
      </div>
    </section>
    <!-- introduction -->
    <section class="wrap">
      <div class="introduction_area">
        <p class="introduction_t">大赛简介</p>
        <p class="line"></p>
        <p class="in_t">“HelloWorld”区块链应用落地大赛由中国云体系产业战略创新联盟、清华大学互联网产业研究院、瑞典皇家理工学院等指导并发起，由清华启迪链网与初链、布洛克科技、火聘online共同主办。大赛立足全球区块链行业，致力于寻找全球区块链领域具备创新能力的优秀人才以及项目，关注并致力于促进区块链技术在现实生活的不同场景中应用落地，通过打造“全球区块链技术开源社区”的理念，区块链应用落地大赛应运而生。
          本次大赛分为初赛、决赛两个阶段，初赛为线上赛，决赛为线下赛，涉及区块链场景包含但不限于“公益、人才、教育、农产品溯源、普惠金融、征信、智慧农业”等领域。对于开发的区块链应用以及产品等，最终提交作品需有Demo或完整产品进行演示。
          各报名团队可针对大赛提出的相关领域和场景范围，进行实际需求构建。专家会对参赛项目的源代码，构思，设计和作品进行评审，同时通过投票及评分系统，选出切合实际，符合优先落地的应用场景。</p>
      </div>
    </section>
    <!-- area -->
    <section class="wrap _area">
      <div class="_area_a">
        <p class="introduction_t">大赛区域</p>
        <p class="line"></p>
        <p class="_area_t">中国，韩国，泰国，越南，美国等国家和地区。</p>
        <img src="@/assets/map.png" class="_area_bg" alt="">

      </div>
    </section>
  </div>
</template>

<script>
import { Button } from 'iview'
export default {
  methods: {
  },
  components: {
    Button
  }
}
</script>

<style scoped lang='less'>
.line{
  width:100px;
  height:6px;
  margin-top: 20px;
  border-radius:3px;
  background:rgba(30,100,180,1);
}
.in_t{
  font-size:16px;
  font-family:SourceHanSansSC-Regular;
  font-weight:400;
  color:rgba(98,119,146,1);
  line-height:30px;
  margin-top: 70px;
}
.container{
  .h_area{
    height:650px;
    background-size: 100% 100%;
    background: url('../assets/bg.png') no-repeat;
    ._w{
      position: relative;
      top: 90px;
      height:540px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      .logo{
          width:100px;
          height:100px;
        }
        .title_tit{
          font-size:44px;
          font-weight:600;
          line-height:60px;
          color:rgba(255,255,255,1);
          font-family:PingFangSC-Semibold;
        }
        .title_intr{
          font-size:16px;
          font-weight:400;
          line-height:24px;
          color:rgba(255,255,255,1);
          font-family:PingFangSC-Regular;
        }
        .sign{
          width:150px;
          font-size:18px;
          font-weight:400;
          line-height:24px;
          border-radius:25px;
          color:rgba(32,50,96,1);
          font-family:PingFangSC-Regular;
          background:rgba(255,255,255,1);
        }
    }
    .introduction{
      border: 1px solid red;
    }
  }
  .wrap{
    display: flex;
    justify-content: center;
    .introduction_area{
      width: 80%;
      display: flex;
      padding: 50px 0;
      align-items: center;
      flex-direction: column;
        .introduction_t{
          font-size:36px;
          font-family:SourceHanSansSC-Heavy;
          font-weight:800;
          color:rgba(30,100,180,1);
        }
    }
  }
  ._area{
    padding: 50px 0;
    background:rgba(242,245,250,1);
    ._area_a{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 80%;
      ._area_t{
        width: 100%;
        margin: 22px 0;
        font-size:16px;
        font-weight:400;
        line-height:30px;
        color:rgba(98,119,146,1);
        font-family:SourceHanSansSC-Regular;
      }
      ._area_bg{
        width: 100%;
      }
    }
  }
}
</style>
