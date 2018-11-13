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
        <p class="pu_t1">大赛简介</p>
        <p class="line"></p>
        <p class="in_t">“HelloWorld”区块链应用落地大赛由中国云体系产业战略创新联盟、清华大学互联网产业研究院、瑞典皇家理工学院等指导并发起，由清华启迪链网与初链、布洛克科技、火聘online共同主办。大赛立足全球区块链行业，致力于寻找全球区块链领域具备创新能力的优秀人才以及项目，关注并致力于促进区块链技术在现实生活的不同场景中应用落地，通过打造“全球区块链技术开源社区”的理念，区块链应用落地大赛应运而生。
          本次大赛分为初赛、决赛两个阶段，初赛为线上赛，决赛为线下赛，涉及区块链场景包含但不限于“公益、人才、教育、农产品溯源、普惠金融、征信、智慧农业”等领域。对于开发的区块链应用以及产品等，最终提交作品需有Demo或完整产品进行演示。
          各报名团队可针对大赛提出的相关领域和场景范围，进行实际需求构建。专家会对参赛项目的源代码，构思，设计和作品进行评审，同时通过投票及评分系统，选出切合实际，符合优先落地的应用场景。</p>
      </div>
    </section>
    <!-- area -->
    <section class="wrap _area">
      <div class="_area_a">
        <p class="pu_t1">大赛区域</p>
        <p class="line"></p>
        <p class="_area_t">中国，韩国，泰国，越南，美国等国家和地区。</p>
        <img src="@/assets/map.png" class="_area_bg" alt="">
      </div>
    </section>
    <!-- rights and interests -->
    <section class="wrap rni" id="rni">
      <div class="pu_dis rni_area">
        <p class="pu_t1">参赛权益</p>
        <p class="line"></p>
        <ul class="rni_info">
          <li>
            <img src="../assets/excitation.png" alt="">
            <p class="rni_t">奖金激励</p>
            <p class="rni_t1">优胜者可获得丰富的奖金以及各种激励</p>
          </li>
          <li>
            <img src="../assets/incubation.png" alt="">
            <p class="rni_t">项目孵化</p>
            <p class="rni_t1">优秀项目帮助对接地方政府孵化器的创投和孵化机会</p>
          </li>
          <li>
            <img src="../assets/media.png" alt="">
            <p class="rni_t">媒体曝光</p>
            <p class="rni_t1">全平台流量+千万媒体曝光+媒体专访</p>
          </li>
          <li>
            <img src="../assets/community.png" alt="">
            <p class="rni_t">社区入驻</p>
            <p class="rni_t1">成为区块链开源技术社区专家，与全球开发者共享资源</p>
          </li>
        </ul>

      </div>
    </section>

    <!-- member -->
    <section class="wrap member">
      <div class="pu_dis">
        <p class="pu_t1">评委嘉宾团</p>
        <p class="line"></p>
        <p class="member_i">元道 李鸣 沈寓实 林垂宙 刘洋 张剑南 程小永 汪洋 叶雨</p>
      </div>
    </section>

    <!-- Award -->
    <section class="wrap award">
      <div class="award_area">
        <p class="pu_t1">大赛奖项</p>
        <p class="line"></p>
        <div class="award_t_a">
          <p>大赛设置伯乐奖和伯乐奖将给予各节点由大赛赞助商提供相关礼品的大礼包。</p>
          <p>参赛队伍项目奖暨应用落地孵化基金：</p>
          <p>大赛主办方会注入大赛启动基金到奖金池中， 优胜团队会一起瓜分大赛奖金池， 奖金池会根据大赛参赛团队数量随之变化。</p>
        </div>
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

 .pu_t1{
  font-size:36px;
  font-family:SourceHanSansSC-Heavy;
  font-weight:800;
  color:rgba(30,100,180,1);
}

.pu_dis{
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container{
  .h_area{
    height:650px;
    background: url('../assets/bg.png') no-repeat center;
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
    padding: 100px 0;
    .introduction_area{
      width: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
        .pu_t1{
          font-size:36px;
          font-family:SourceHanSansSC-Heavy;
          font-weight:800;
          color:rgba(30,100,180,1);
        }
    }
  }
  ._area{
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
  .rni{
    .rni_area{
      width: 80%;
      .rni_info{
        display: flex;
        margin-top: 50px;
        li{
          display: flex;
          height: 300px;
          padding: 0 10px;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .rni_t{
            font-size:24px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(30,100,180,1);
            line-height:30px;
          }
          .rni_t1{
            width: 223px;
            font-size:13px;
            font-weight:400;
            line-height:30px;
            text-align: center;
            letter-spacing: 1px;
            font-family:PingFangSC-Regular;
            color:rgba(98,119,146,1);
          }
        }
      }
    }
  }
  .member{
    background:rgba(242,245,250,1);
    .member_i{
      margin-top: 50px;
      font-size:24px;
      font-weight:800;
      color:rgba(30,100,180,1);
      font-family:SourceHanSansSC-Heavy;
    }
  }
  .award{
    .award_area{
      width: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .award_t_a{
        margin-top: 50px;
        width: 100%;
        p{
          font-size:16px;
          font-family:SourceHanSansSC-Heavy;
          font-weight:800;
          color:rgba(98,119,146,1);
          line-height:30px;
        }
      }
    }
  }
}
</style>
