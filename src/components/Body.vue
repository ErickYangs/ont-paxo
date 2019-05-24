<template>
  <div class="paxo">
    <div class="paxos_box">
      <img src="../assets/images/paxos.png" alt>
      <div class="paxos_desc">{{$t('paxo_.banner_desc')}}</div>
    </div>
    <div class="features">
      <div class="title">{{$t('paxo_.features_title')}}</div>
      <div class="item_box">
        <div class="item">
          <img src="../assets/images/feature1.png" alt>
          <div class="tips">{{$t('paxo_.features_trans')}}</div>
          <div class="desc">{{$t('paxo_.features_trans_d')}}</div>
        </div>
        <div class="item">
          <img src="../assets/images/feature2.png" alt>
          <div class="tips">{{$t('paxo_.features_month')}}</div>
          <div class="desc">{{$t('paxo_.features_month_d')}}</div>
        </div>
      </div>
    </div>
    <div class="reward">
      <div class="title">{{$t('paxo_.reward_title')}}</div>
      <div class="reward_box">
        <div class="left">
          <ul>
            <li>
              <div class="hex">{{$t('paxo_.reward_l_1')}}</div>
              <p class="source">{{$t('paxo_.reward_l_2')}}</p>
            </li>
            <li>
              <div class="hex">{{$t('paxo_.reward_l_3')}}</div>
              <p class="source">{{$t('paxo_.reward_l_4')}}</p>
            </li>
            <li>
              <div class="hex">{{$t('paxo_.reward_l_5')}}</div>
              <p class="source">{{$t('paxo_.reward_l_6')}}</p>
            </li>
            <li>
              <div class="hex">{{$t('paxo_.reward_l_7')}}</div>
              <p class="source">{{$t('paxo_.reward_l_8')}}</p>
            </li>
            <li>
              <div class="hex">{{$t('paxo_.reward_l_9')}}</div>
              <p class="source">{{$t('paxo_.reward_l_10')}}</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="line_box">
            <p>
              <i>{{$t('paxo_.reward_r_1')}}</i>
              <span>{{$t('paxo_.reward_r_2')}}</span>
            </p>
            <p class="center">
              <i>{{$t('paxo_.reward_r_3')}}</i>
              <span>{{$t('paxo_.reward_r_4')}}</span>
            </p>
            <p>
              <i>{{$t('paxo_.reward_r_5')}}</i>
              <span>{{$t('paxo_.reward_r_6')}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="touch_us">
      <p>{{$t('paxo_.touch1')}}</p>
      <p>
        {{$t('paxo_.touch2')}}
        <span>{{$t('paxo_.touch3')}}</span>
      </p>
    </div>
    <div class="get_paxos">
      <p>{{$t('paxo_.get')}}</p>
      <!-- <div class="link_paxos">{{$t('paxo_.click')}}</div> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.paxos_box {
  margin-top: 64px;
}
.paxos_box img {
  display: block;
  width: 169px;
  margin: 0 auto;
  margin-bottom: 44px;
}
.paxos_box .paxos_desc {
  margin: 0 auto;
  width: 100%;
  max-width: 624px;
  /* height: 66px; */
  font-size: 16px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(2, 16, 28, 1);
  line-height: 22px;
}
.features {
  margin-top: 64px;
  background: #f5fbff;
  padding-top: 80px;
  padding-bottom: 64px;
}
.features .title {
  margin: 0 auto;
  width: 127px;
  height: 43px;
  font-size: 32px;
  font-family: NunitoSans-Bold;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 43px;
  margin-bottom: 36px;
}
.features .item_box {
  width: 100%;
  max-width: 1008px;
  overflow: hidden;
  margin: 0 auto;
}
.features .item_box .item {
  width: 50%;
  float: left;
}
.features .item_box .item img {
  display: block;
  width: 64px;
  margin: 0 auto;
}
.features .item_box .item .tips {
  text-align: center;
  height: 32px;
  font-size: 24px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 32px;
  margin-top: 20px;
}
.features .item_box .item .desc {
  margin: 0 auto;
  padding: 0 10%;
  font-size: 16px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(74, 74, 74, 1);
  line-height: 22px;
  margin-top: 12px;
}
.reward {
  margin-top: 100px;
}
.reward .title {
  text-align: center;
  height: 43px;
  font-size: 32px;
  font-family: NunitoSans-Bold;
  font-weight: bold;
  color: rgba(2, 16, 28, 1);
  line-height: 43px;
}
.reward .reward_box {
  width: 100%;
  max-width: 1008px;
  overflow: hidden;
  margin: 40px auto;
}
.reward .reward_box .left,
.reward .reward_box .right {
  width: 50%;
  float: left;
}
.reward .reward_box .left ul li {
  margin-bottom: 16px;
  text-align: left;
}
.reward .reward_box .left ul li .hex {
  height: 24px;
  font-size: 16px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  line-height: 24px;
  margin-bottom: 8px;
}
.reward .reward_box .left ul li .source {
  font-size: 16px;
  font-family: NunitoSans-Bold;
  font-weight: bold;
  color: rgba(2, 16, 28, 1);
  line-height: 24px;
  padding-left: 32px;
}
.reward .reward_box .right .line_box {
  width: 336px;
  /* height: 144px; */
  border-radius: 2px;
  border: 1px solid rgba(183, 200, 206, 1);
  text-align: left;
  margin-left: 110px;
}
.reward .reward_box .right .line_box p {
  /* width:42px; */
  height: 48px;
  font-size: 16px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(2, 16, 28, 1);
  line-height: 48px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.reward .reward_box .right .line_box p.center {
  border-top: 1px solid rgba(183, 200, 206, 1);
  border-bottom: 1px solid rgba(183, 200, 206, 1);
}
.reward .reward_box .right .line_box p span {
  color: #076bdf;
  /* float: right; */
}
.reward .reward_box .right .line_box p i {
  font-style: normal;
}
.touch_us {
  width: 100%;
  /* max-width: 370px; */
  text-align: center;
  margin: 70px auto;
  font-size: 16px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  line-height: 22px;
}
.touch_us span {
  color: #076bdf;
  text-decoration: underline;
}
.get_paxos {
  display: none;
  margin-top: 40px;
  /* height: 158px; */
  height: 108px;
  background: linear-gradient(
    270deg,
    rgba(5, 36, 60, 1) 0%,
    rgba(2, 16, 28, 1) 100%
  );
  padding-top: 32px;
  margin-bottom: 40px;
}
.get_paxos p {
  text-align: center;
  font-size: 28px;
  font-family: NunitoSans-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 38px;
}
.get_paxos .link_paxos {
  width: 172px;
  height: 22px;
  font-size: 16px;
  font-family: NunitoSans-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  margin: 12px auto;
  text-decoration: underline;
  cursor: pointer;
}
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .reward .reward_box {
    padding: 0 24px;
  }
  .reward .reward_box .right .line_box {
    margin-left: 28px;
  }
}
@media only screen and (max-width: 767px) {
  .features .item_box .item {
    width: 100%;
    float: none;
  }
  .features .item_box .item .desc {
    padding: 0 32px;
  }
  .features .item_box .item:nth-of-type(1) {
    margin-bottom: 40px;
  }
  .reward .reward_box {
    padding: 0 32px;
  }
  .reward .reward_box .left,
  .reward .reward_box .right {
    width: 100%;
    float: none;
  }
  .reward .reward_box .right .line_box {
    margin-left: 0px;
    width: 100%;
  }
  .touch_us {
    display: none;
  }
}
@media only screen and (max-width: 623px) {
  .paxos_box .paxos_desc {
    padding: 0 32px;
  }
}
</style>
