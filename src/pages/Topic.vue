<template>
  <section class="game-title">
    <div class="game-title-w">
      <!-- <h1 class="_title">{{$t('topic.title')}}</h1> -->
      <p class="introduction">
        {{$t('topic.description_1')}}
        <br>
        {{$t('topic.description_2')}}
        <br>
        <br>
        {{$t('topic.description_3')}}
      </p>
      <div class="content-area">
        <el-collapse @change="handleChange" class="content" v-for="(item,index) in $t('topic.list')" :key="index">
          <el-collapse-item :title='index+1+"、"+item.title' class="contentItem" :name="index+1">
            <div class="content-item-text">{{item.description}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: {

  },
  data () {
    return {
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  },
  components: {
  }
}
</script>

<style scoped lang='less'>
.game-title{
  background: rgba(242,245,250,1);;
  display: flex;
  justify-content: center;
  .game-title-w{
    margin: 150px 0 60px 0;
    padding: 0 30px;
    width: 80%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    ._title{
      margin: 60px 0;
      font-weight:500;
      color:rgba(32,50,96,1);
    }
    .introduction {
      font-size:12px;
      font-weight:400;
      padding-top: 30px;
      color:rgba(98,119,146,1);
      line-height:30px;
    }
    .content-area{
        width: 90%;
        margin: 30px 0;
      .content{
        margin-top: 15px;
        border: none;
        // .el-collapse-item{
          // margin: 5px 0;
        // }
        .content-item-text{
          font-size:12px;
          font-weight:400;
          color:rgba(98,119,146,1);
        }
      }
    }
  }
}

</style>
