<template>
  <section class="game-title">
    <div class="game-title-w">
      <!-- <h1 class="_title">{{$t('vote.title')}}</h1> -->
      <div class='condition_area'>
        <p class="introduction" v-for="(item,index) in $t('vote.condition')" :key='index'>
          {{item}}
        </p>
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
  },
  components: {
  }
}
</script>

<style scoped lang='less'>
.game-title{
  background: rgba(242,245,250,1);
  display: flex;
  justify-content: center;
  height: 90vh;
  .game-title-w{
    margin: 150px 0 60px 0;
    padding: 30px;
    width: 80%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-around;
    ._title{
      margin: 60px 0;
      font-weight:500;
      color:rgba(32,50,96,1);
    }
    .condition_area{
      .introduction {
        font-size:12px;
        font-weight:400;
        color:rgba(98,119,146,1);
        line-height:40px;
      }
    }
  }
}
</style>
