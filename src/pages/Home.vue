<template>
  <div class="container">
    <section class='h_area'>
      <div class="_w">
        <img src="@/assets/logo.png" class="logo" alt="">
        <p class="title_tit">“HelloWorld”</p>
        <p class="title_tit">2018区块链 <span class="block-br">应用落地大赛</span></p>
        <p class="title_intr">指导单位：中国云体系产业战略创新联盟、清华大学互联网产业研究院</p>
        <p class="title_intr">主办方：TrueGlobal</p>
        <!-- <Button class="sign" @click="_sign">报名参赛</Button> -->
        <Login />
      </div>
      <!-- @click="isLogin = true" -->
    </section>
    <!-- introduction -->
    <section class="wrap" id='inter'>
      <div class="pu_dis">
        <p class="pu_t1">大赛简介</p>
        <p class="line"></p>
        <p class="in_t"> “HelloWorld”区块链应用落地大赛由中国云体系产业战略创新联盟、清华大学互联网产业研究院等指导并发起，TrueGlobal 主办，由清华启迪链网与初链、布洛克科技、火聘online协同主办。
          <br>
          <br>
          大赛立足全球区块链行业，致力于寻找全球区块链领域具备创新能力的优秀人才以及项目，关注并致力于促进区块链技术在现实生活的不同场景中应用落地，通过打造“全球区块链技术开源社区”的理念，区块链应用落地大赛应运而生。
          <br>
          <br>
          本次大赛涉及区块链场景包含但不限于“公益、人才、教育、农产品溯源、普惠金融、征信、智慧农业”等领域。对于开发的区块链应用以及产品等，最终提交作品需有Demo或完整产品进行演示。
          各报名团队可针对大赛提出的相关领域和场景范围，进行实际需求构建。专家会对参赛项目的源代码，构思，设计和作品进行评审，同时通过投票及评分系统，选出切合实际，符合优先落地的应用场景。
          <br>
          <br>
          关于主办方：TrueGlobal是由全球多个技术社群联合发起， 通过传播和教授新技术、扶持开发者社区、推动新技术的发展，共同建立一个由全球TRUE开发者和创业者组成的世界级生态系统。为了实现这一目标，我们在全球各地参加并组织线上线下的技术讨论、Hackathon、区块链应用落地大赛。
        </p>
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

    <!-- member -->
    <section class="wrap member" id='pw'>
      <div class="pu_dis">
        <p class="pu_t1">评委嘉宾团</p>
        <p class="line"></p>
        <!-- <p class="member_i">于佳宁 沈寓实 林垂宙 刘洋 张剑南 程小永 汪洋 叶雨</p> -->
        <ul>
          <li v-for="(item,index) in memberList" :key='index'>
            <div class="list-avatar">
              <img :src="item.imgSrc" alt="">
              <!-- <img :src="require(`@/assets/member/${item.imgSrc}.png`)" alt=""> -->
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
            <p class="rni_t1">帮助优秀项目对接地方政府的创投和孵化机会</p>
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

        <p class="pu_t1">奖金池实况</p>
        <p class="rni_i">参赛队伍项目奖暨应用落地孵化基金：大赛主办方优先注入大赛启动基金到奖金池中， 优胜团队会一起瓜分大赛奖金池， 奖金池会根据大赛参赛团队数量随之变化。</p>
        <p class="rni_i" style="font-size:45px">10000 TRUE +</p>

      </div>
    </section>

    <!-- Schedule -->
    <section class="wrap award schedule" id='schedule'>
      <div class="pu_dis award_area schedule_area">
        <p class="pu_t1">大赛流程</p>
        <p class="line"></p>
        <ul class="award_t_a">
          <li>1. 2018年11月15日起，接受报名。同时，大赛全球节点启动宣传，辐射韩国首尔、越南胡志明市、中国上海、中国成都、中国北京、中国长沙、美国硅谷等。</li>
          <li>2. 2018年12月15日-2019年1月5日，团体完善报名信息，提交项目简介及附件；</li>
          <li>3. 2019年12月15日-2019年1月10日，参赛团队深度开发，提交参赛作品代码；</li>
          <li>4. 团队提交代码后，团队进入拉票的最后阶段，专家及技术评委评审。</li>
          <li>5. 2019年1月底，总决赛和颁奖典礼</li>
        </ul>
      </div>
    </section>

    <!-- rule -->
    <section class="wrap award schedule rule" id='rule'>
      <div class="pu_dis award_area schedule_area rule_area">
        <p class="pu_t1">报名规则</p>
        <p class="line"></p>
        <div class="rule_t">
          <div>
            <ul>
              <li>采用节点推荐或自主报名机制; 成功报名之后， 主办方会以邮件形式，联系参赛团队确认相关细节。</li>
              <li>- 参赛对象报名需网上提交报名材料并以报名表规定形式提交。</li>
              <li>- 参赛团队需独立完成作品，无任何作弊以及侵犯他人知识产权的行为，如有违反，取消参赛资格和相应的成绩。</li>
              <li>- 各团队缴纳100个TRUE作为活动报名凭证沉淀到奖金池中锁定，融入到后续的大赛奖金（官方已经融入奖金池10000个TRUE作为初始奖金）。</li>
            </ul>
          </div>
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
        <p class="pu_t1">参赛作品要求</p>
        <p class="line"></p>
        <ul class="award_t_a">
          <li>参与大赛的作品，需基于初链进行智能合约的编写。</li>
          <li>源代码及可部署运行的目标应用系统。</li>
          <li>应用系统演示材料（PPT或Word）</li>
          <!-- <li>参赛须知和评审细则</li>
          <li>参考应用选题</li> -->
        </ul>
      </div>
    </section>

    <!-- mechanism -->
    <section class="wrap award mechanism co_hosting">
      <div class="pu_dis award_area">
        <p class="pu_t1">联合主办</p>
        <p class="line"></p>
        <ul class="mechanism_area co_hosting_cen">
          <li v-for="(item,index) in co_hosting" :key='index' class="mechanism_item">
            <img :src='item' alt="" class="mechanism_i">
          </li>
        </ul>
      </div>
    </section>

    <section class="wrap award mechanism community">
      <div class="pu_dis award_area">
        <p class="pu_t1">联盟社区</p>
        <p class="line"></p>
        <ul class="mechanism_area">
          <li v-for="(item,index) in mechanism" :key='index' class="mechanism_item">
            <img :src='item' alt="" class="mechanism_i">
          </li>
        </ul>
      </div>
    </section>

    <section class="wrap award mechanism contact" id='contact'>
      <div class="pu_dis award_area">
        <p class="pu_t1">联系我们</p>
        <p class="line"></p>
        <div class="contact_a">
          <div class="_t">
            <span>
              如您有任何疑问，欢迎通过大赛官方进行交流。也可以发送邮件至
            </span>
            <a href="mailto:helloworld@trueglobal.pro">helloworld@trueglobal.pro</a>
            <span>
              联系我们。
            </span>
          </div>
          <ul class="qr">
            <li>
              <img src="../assets/qr/weixin.png" alt="">
              <p>官方微信公众号</p>
            </li>
            <li>
              <img src="../assets/qr/twitter.png" alt="">
              <p>官方twitter</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { Button } from 'iview'
import Login from '@/pages/Login'
export default {
  data () {
    return {
      memberList: [
        {
          'name': '于佳宁',
          'imgSrc': require('@/assets/member/yujianing.png'),
          // 'imgSrc': 'yujianing',
          'introList': [
            '经济学博士',
            '《2018年中国区块链产业白皮书》编委会主任'
          ]
        },
        {
          'name': '沈寓实',
          'imgSrc': require('@/assets/member/shenyushi.png'),
          'introList': [
            '美国加州大学计算机博士',
            '国家千人计划评审专家',
            '微软公司战略顾问'
          ]
        },
        {
          'name': '林垂宙',
          'imgSrc': require('@/assets/member/linchuizhou.png'),
          'introList': [
            '瑞典皇家工程科学院院士',
            '香港工程科学院院士',
            '台湾工业技术研究院院长'
          ]
        },
        {
          'name': '刘洋',
          'imgSrc': require('@/assets/member/liuyang.png'),
          'introList': [
            '清华大学硕士',
            '十多年开发和系统架构经验',
            '密码学和算法专家'
          ]
        },
        {
          'name': '张剑南',
          'imgSrc': require('@/assets/member/zhangjiannan.png'),
          'introList': [
            '牛津大学计算机硕士',
            'TopHacker和Dorahacks创始人',
            '原欧洲核子研究组织CERN研究人员'
          ]
        },
        {
          'name': '程小永',
          'imgSrc': require('@/assets/member/chengxiaoyong.png'),
          'introList': [
            '清华大学兼职研究员',
            '云体系产业创新战略联盟执行理事',
            '长安俱乐部青年领袖成员'
          ]
        },
        {
          'name': 'Andy郑西平',
          'imgSrc': require('@/assets/member/zhengxiping.png'),
          'introList': [
            '布洛克科技合伙人&副总裁',
            '东南亚Beecast  CEO'
          ]
        },
        {
          'name': '叶雨',
          'imgSrc': require('@/assets/member/yeyu.png'),
          'introList': [
            '工学硕士学位',
            '启迪链网集团常务副总裁',
            '原启迪之星人工智能与大数据总经理'
          ]
        },
        {
          'name': '秋宣宇(秋婷南)',
          'imgSrc': require('@/assets/member/qiutingnan.png'),
          'introList': [
            '韩国Element CEO',
            '韩国国际金融学会中国委员会委员长',
            '韩国Money Today 亚洲事务负责人'
          ]
        },
        {
          'name': 'Hillary Nguyen',
          'imgSrc': require('@/assets/member/HillaryNguyen.png'),
          'introList': [
            '阿尔法鲸资本管理合伙人',
            '区块链、数字资产管理战略家、顾问',
            '为区块链时代新兴项目提供管理方案'
          ]
        }
      ],
      mechanism: [],
      co_hosting: [],
      isLogin: false
    }
  },
  mounted () {
    for (var i = 0; i < 14; i++) {
      var j = i + 1
      this.mechanism.push(require('../assets/cooperativeInstitution/' + j + '.png'))
    }
    for (var x = 0; x < 4; x++) {
      var p = x + 1
      this.co_hosting.push(require('../assets/co_hosting/' + p + '.png'))
    }
  },
  methods: {

  },
  components: {
    Button, Login
  }
}
</script>

<style scoped lang='less'>
@media screen and (max-width: 860px) {
  .block-br {
    display: block;
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
  width: 100%;
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
          text-align: center;
          font-size:44px;
          font-weight:600;
          line-height:60px;
          color:rgba(255,255,255,1);
        }
        .title_intr{
          font-size:16px;
          font-weight:400;
          line-height:24px;
          padding: 0 20px;
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

    .vertical-center-modal{
      display: flex;
      align-items: center;
      justify-content: center;
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
    background:rgba(242,245,250,1);
    .rni_area{
      width: 80%;
      .rni_info{
        display: flex;
        margin-top: 50px;
        flex-wrap: wrap;
        justify-content: center;
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
            min-height: 80px;
            font-size:12px;
            font-weight:400;
            line-height:30px;
            text-align: center;
            letter-spacing: 1px;
            font-family:PingFangSC-Regular;
            color:rgba(98,119,146,1);
          }
        }
      }
      .rni_i{
        margin-top: 50px;
        font-size:12px;
        font-weight:400;
        color:rgba(98,119,146,1);
      }
    }
  }
  .member{
    display: flex;
    ul{
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li{
          width: 200px;
          display: flex;
          flex-direction: column;
          margin: 0 40px 60px;
          .list-avatar{
              width: 100%;
              height: 200px;
              border-radius: 50%;
              overflow: hidden;
              position: relative;
              margin-bottom: 10px;
            img{
              vertical-align: bottom;
              width: 100%;
              height: 100%;
            }
          }
          .list-name{
            padding: 25px 0 5px;
            font-size: 20px;
            color:rgba(32,50,96,1);
            text-align: center;
          }
          .list-detail{
            text-align: center;
            font-size: 12px;
            line-height: 22px;
            color:rgba(98,119,146,1);
            position: relative;
          }
        }
    }
  }
  .award{
    .award_area{
      display: flex;
      justify-content: end;
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
    background:rgba(242,245,250,1);
    .rule_t{
      width: 100%;
      margin-top: 50px;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      ._t1{
        font-size:16px;
        font-weight:bold;
        color:#627792;
        line-height:30px;
      }
      p,li{
        font-size:13px;
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
  .mechanism{
    background:rgba(242,245,250,1);
    .mechanism_area{
      margin-top: 48px;
      display: flex;
      // width: 1205px;
      flex-wrap: wrap;
      justify-content: center;
      .mechanism_item{
        margin: 3px 10px;
          img{
            border: 1px solid #ccc;
            width: 220px;
            height: 100px;
          }

      }
    }
    .co_hosting_cen{
      justify-content: center;
    }
  }
  .community{
    background: #fff;
  }
  .contact{
    background:rgba(242,245,250,1);
    .contact_a{
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      ._t{
        font-size:16px;
        font-weight:400;
        color:rgba(98,119,146,1);
      }
      .qr{
        // display: flex;
        margin-top: 10px;
        width: 100%;
        justify-content: space-between;
        li{
          margin-top: 20px;
          text-align: center;
          p{
            // margin-top: 20px;
            line-height: 30px;
            font-size: 16px;
            color:rgba(98,119,146,1);
          }
        }
      }
    }
  }
}
</style>
