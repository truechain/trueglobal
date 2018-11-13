<template>
  <div class="container" :style="{width:myWidth}">
    <section class='h_area'>
      <div class="_w">
        <img src="@/assets/logo.png" class="logo" alt="">
        <p class="title_tit">“HelloWorld”</p>
        <p class="title_tit">—2018区块链应用落地大赛</p>
        <p class="title_intr">指导单位：中国云体系产业战略创新联盟、清华大学互联网产业研究院 主办方：TrueGlobal </p>
        <p class="title_intr">联合主办：启迪链网、启迪之星、初链、布洛克科技火聘online 联盟社区：ITPUB、CocoChina、ITechPlus、极部落、链习堂、GeekSight</p>
        <Button class="sign" to='/signin'>报名参赛</Button>
      </div>
    </section>
    <!-- introduction -->
    <section class="wrap">
      <div class="pu_dis">
        <p class="pu_t1">大赛简介</p>
        <p class="line"></p>
        <p class="in_t">“HelloWorld”区块链应用落地大赛由中国云体系产业战略创新联盟、清华大学互联网产业研究院、瑞典皇家理工学院等指导并发起，由清华启迪链网与初链、布洛克科技、火聘online共同主办。大赛立足全球区块链行业，致力于寻找全球区块链领域具备创新能力的优秀人才以及项目，关注并致力于促进区块链技术在现实生活的不同场景中应用落地，通过打造“全球区块链技术开源社区”的理念，区块链应用落地大赛应运而生。
          本次大赛分为初赛、决赛两个阶段，初赛为线上赛，决赛为线下赛，涉及区块链场景包含但不限于“公益、人才、教育、农产品溯源、普惠金融、征信、智慧农业”等领域。对于开发的区块链应用以及产品等，最终提交作品需有Demo或完整产品进行演示。
          各报名团队可针对大赛提出的相关领域和场景范围，进行实际需求构建。专家会对参赛项目的源代码，构思，设计和作品进行评审，同时通过投票及评分系统，选出切合实际，符合优先落地的应用场景。</p>
      </div>
    </section>
    <!-- area -->
    <section class="wrap _area">
      <div class="pu_dis _area_a">
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
    <section class="wrap award" id='award'>
      <div class="pu_dis award_area">
        <p class="pu_t1">大赛奖项</p>
        <p class="line"></p>
        <div class="award_t_a">
          <p>大赛设置伯乐奖和伯乐奖将给予各节点由大赛赞助商提供相关礼品的大礼包。</p>
          <p>参赛队伍项目奖暨应用落地孵化基金：</p>
          <p>大赛主办方会注入大赛启动基金到奖金池中， 优胜团队会一起瓜分大赛奖金池， 奖金池会根据大赛参赛团队数量随之变化。</p>
        </div>
      </div>
    </section>

    <!-- Schedule -->
    <section class="wrap award schedule" id='schedule'>
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">时间安排</p>
        <p class="line"></p>
        <ul class="award_t_a">
          <li>1) 11月15日，大赛启动宣传，接收报名；</li>
          <li>2) 11月15日-12月20日，大赛全球节点举办宣传活动；</li>
          <li>3) 12月25日初赛结果公布，进入比赛下一个阶段；</li>
          <li>4) 12月26日-2019年1月16日，参赛队伍深度开发；</li>
          <li>5) 1月16日-21日，专家及技术评委评审，角逐进入总决赛赛队；</li>
          <li>6) 2019年2月，总决赛和颁奖典礼。</li>
          <li>成功报名之后， 主办方会以邮件形式，联系参赛团队确认相关细节，并送出本次大赛纪念品。</li>
        </ul>
      </div>
    </section>

    <!-- rule -->
    <section class="wrap award rule" id='rule'>
      <div class="pu_dis award_area rule_area">
        <p class="pu_t1">报名规则</p>
        <p class="line"></p>
        <div class="rule_t">
          <p>采用节点推荐或自主报名机制，各团队缴纳100个TRUE作为活动报名凭证沉淀到奖金池中锁定，融入到后续的大赛奖金（官方已经融入奖金池10000个TRUE作为初始奖金）。</p>
          <div>
            <p class="_t1">节点推荐：</p>
            <ul>
              <li>1. 节点可以由各个地区，组织，社区和机构构成。节点可以参与比赛，也可以积极的发现优质的团队，公司，个人，推荐其参赛。</li>
            </ul>
          </div>
          <div>
            <p class="_t1">自主报名：</p>
            <ul>
              <li>1. 大赛面向全社会开放,人数地域不限，欢迎个人、高等院校、科研单位、企业、创客团队等均欢迎报名参赛。</li>
              <li>2. 选手可以个人或组队形式参赛，组队人数不限，考虑项目完整性建议3人及以上组队。</li>
              <li>3. 参赛者可以选择区块链行业技术专家作为技术指导，也可以选择互联网公司技术高管作为技术顾问，参赛者初赛突围之后，给与顾问以“导师”称号。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Claim -->
    <section class="wrap award schedule claim" id='claim'>
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">参赛要求</p>
        <p class="line"></p>
        <ul class="award_t_a">
          <li>1. 参与大赛的作品，需基于初链进行智能合约的编写。</li>
          <li>2. 参赛对象报名需网上提交报名材料并以规定形式提交，提交材料要求在参赛通知中另行规定。</li>
          <li>3. 报名时间：2018年11月15日至2018年12月5日。</li>
          <li>4. 每人只能参加一支参赛队伍，并且参赛团队需独立完成作品，无任何作弊以及侵犯他人知识产权的行为，如有违反，取消参赛资格和相应的成绩。</li>
        </ul>
      </div>
    </section>

    <!-- works -->
    <section class="wrap award schedule works" id='works'>
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">参赛作品</p>
        <p class="line"></p>
        <ul class="award_t_a">
          <li>1. 源代码及可部署运行的目标应用系统；</li>
          <li>2. 应用系统演示材料(PPT或Word)。</li>
        </ul>
      </div>
    </section>

    <!-- recommend -->
    <section class="wrap award schedule recommend">
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">大赛官方推荐应用项目</p>
        <p class="line"></p>
        <ul class="award_t_a">
          <li>大赛官方推荐应用项目，作为指引供参赛团队参考:</li>
          <li>1. Dapp 仓库</li>
          <li>2. TrueInfo</li>
          <li>3. TRUE主网Token的多重签名钱包</li>
          <li>4. TRUE主网Token的硬件钱包</li>
          <li>5. 基于TRUE主网的去中心化用户身份验证系统</li>
          <li>6. 能和TrueChain智能合约进行数据交互的Oracle</li>
          <li>7.形式化验证服务和API</li>
          <li>8.基于TRUE主网一键发token/一键将token从以太坊转到TRUE主网</li>
          <li>9. GPU挖矿节点程序windows/linux版本</li>
          <li>10. 初链主网上的dapp，与正统交易所erc20对接系统之间的中间件（重要）</li>

        </ul>
      </div>
    </section>

    <!-- Schedule system -->
    <section class="wrap award rule scheSystem" id='scheSystem'>
      <div class="pu_dis award_area rule_area">
        <p class="pu_t1">赛程赛制</p>
        <p class="line"></p>
        <div class="rule_t scheSystem_t">
          <div>
            <p class="_t1">全球节点宣传：11月15日-12月20日</p>
            <ul>
              <li>举行大赛全球节点的宣传活动，辐射韩国首尔、越南胡志明市、中国上海、中国成都、中国北京、中国长沙、美国硅谷等。</li>
            </ul>
          </div>
          <div>
            <p class="_t1">初赛（2018年11月15日至2018年12月25日）</p>
            <ul>
              <li>1. 报名成功后，参赛队伍根据初赛题目要求完成方案制作和代码编写。</li>
              <li>2. 自11月20日起，选手可在线提交作业结果。每支队伍共有2次提交并参与评测的机会。参赛队伍在一天内多次提交结果，新结果版本将覆盖旧版本。</li>
              <li>3. 初赛提交截止时间为2018年12月20日中午12:00（北京时间），逾期提交将无法参与初赛评测。初赛最终成绩将在12月25日在大赛网站公布。</li>
            </ul>
          </div>
          <div>
            <p class="_t1">12月26日-2019年1月16日，参赛队伍深度开发</p>
          </div>
          <div>
            <p class="_t1">奖金池实况</p>
            <ul>
              <li>敬请期待</li>
            </ul>
          </div>
          <div>
            <p class="_t1">联系我们</p>
            <ul>
              <li>如您有任何疑问，欢迎通过大赛官方进行交流。也可以发送邮件至联系我们。大赛的最终解释权归大赛组委会所有。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Button } from 'iview'
export default {
  data () {
    return {
      myWidth: (window.innerWidth) + 'px'
    }
  },
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

.wrap{
  display: flex;
  justify-content: center;
  padding: 100px 0;
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
  .pu_t1{
    font-size:36px;
    font-family:SourceHanSansSC-Heavy;
    font-weight:800;
    color:rgba(30,100,180,1);
  }
  ._area{
    background:rgba(242,245,250,1);
    ._area_a{
      ._area_t{
        width: 100%;
        margin: 22px 0;
        font-size:16px;
        font-weight:400;
        line-height:30px;
        color:rgba(98,119,146,1);
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
  .schedule{
    background:rgba(242,245,250,1);
    .schedule_area{
      li{
        font-size:16px;
        font-weight:400;
        line-height:30px;
        color:rgba(98,119,146,1);
      }
    }
  }
  .rule{
    .rule_t{
      margin-top: 50px;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      ._t1{
        font-size:16px;
        font-weight:bold;
        color:#627792;
        line-height:30px;
      }
      p,li{
        font-size:16px;
        font-weight:400;
        line-height:30px;
        color:rgba(98,119,146,1);
      }
    }
  }
  .works{
    background: #fff;
  }
  .scheSystem{
    .scheSystem_t{
      min-height: 500px;
    }
  }
}
</style>
