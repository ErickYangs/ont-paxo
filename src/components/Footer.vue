<template>
  <div class="foot_bg">
    <div id="footer">
      <div class="footer-logo">
        <img class="footlogo" src="../assets/images/logo-footer.png" alt>
        <span></span>Paxo
      </div>
      <div class="foot-link">
        <div class="sg">
          <ul>
            <li>{{$t('footer.1-1')}}</li>
            <li>
              <a href="https://developer.ont.io/" target="_blank">{{$t('footer.1-2')}}</a>
            </li>
            <li>
              <a href="https://bounty.ont.io/" target="_blank">{{$t('footer.1-3')}}</a>
            </li>
            <li>
              <a
                href="https://ontio.github.io/documentation/wp_download_en.html"
                target="_blank"
              >{{$t('footer.1-4')}}</a>
            </li>
          </ul>
          <ul>
            <li>{{$t('footer.2-1')}}</li>
            <li>
              <a href="https://dapp.ont.io/" target="_blank">{{$t('footer.2-2')}}</a>
            </li>
            <li>
              <a href="https://ont.io/dapp" target="_blank">{{$t('footer.2-3')}}</a>
            </li>
          </ul>
        </div>
        <div class="sg">
          <ul>
            <li>{{$t('footer.3-1')}}</li>
            <li>
              <a href="https://github.com/ontio/owallet" target="_blank">{{$t('footer.3-2')}}</a>
            </li>
            <li>
              <a href="https://onto.app/" target="_blank">{{$t('footer.3-3')}}</a>
            </li>
          </ul>
          <ul>
            <li>{{$t('footer.4-1')}}</li>
            <li>
              <a href="https://info.ont.io/trust-anchor/en" target="_blank">{{$t('footer.4-2')}}</a>
            </li>
            <li>
              <a href="https://info.ont.io/listtriones/en" target="_blank">{{$t('footer.4-3')}}</a>
            </li>
            <li>
              <a href target>{{$t('footer.4-4')}}</a>
            </li>
          </ul>
          <ul>
            <li>{{$t('footer.5-1')}}</li>
            <li>
              <a href="https://ont.io/aboutus" target="_blank">{{$t('footer.5-2')}}</a>
            </li>
            <li>
              <a href="https://ont.io/contactUs" target="_blank">{{$t('footer.5-3')}}</a>
            </li>
            <li>
              <a
                href="https://ontio.github.io/documentation/wp_download_en.html"
                target="_blank"
              >{{$t('footer.5-4')}}</a>
            </li>
            <li>
              <a href="https://explorer.ont.io/" target="_blank">{{$t('footer.5-5')}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav_change">
        Copyright &#169; 2019 The Ontology Team
        <div class="select">
          <el-select
            v-model="$i18n.locale"
            size="mini"
            :placeholder="$t('common.lang')"
            popper-class="text-color"
            @change="handlechange"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangStorage from '../helpers/lang'
export default {
  data() {
    return {
      options: [{
        value: 'en',
        label: 'English'
      }, {
        value: 'zh',
        label: '中文'
      }],
      value: ''
    }
  },
  methods: {
    handlechange(val) {
      this.$i18n.locale = val
      LangStorage.setLang(this.$i18n.locale)
    }
  },
}
</script>

<style lang='less' scoped>
.foot_bg {
  width: 100%;
  padding-top: 40px;
  background: rgba(238,244,247,1);
  // background: red;
}
#footer {
  width: 100%;
  max-width: 1008px;
  margin: 0 auto;
  // padding-top: 100px;
  overflow: hidden;
  .footer-logo {
    text-align: left;
    width: 100%;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-family: NunitoSans-Regular;
    font-weight: 400;
    color: rgba(2, 16, 28, 1);
    margin-bottom: 24px;
    .footlogo {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      background: url(../assets/images/clg.png) center center;
      background-size: 16px;
      // margin: 6px 10px 0;
      margin:0 10px;
    }
  }

  .foot-link {
    overflow: hidden;
    border-bottom: 1px solid #d0dde5;
    padding-bottom: 40px;
    .sg {
      float: left;
      overflow: hidden;
      //   width: 50%;
      ul {
        // width: 33.33%;
        float: left;
        text-align: left;
        li {
          margin-bottom: 17px;
          a {
            height: 16px;
            font-size: 12px;
            font-family: NunitoSans-Regular;
            font-weight: 400;
            color: rgba(89, 89, 89, 1);
            line-height: 16px;
          }
        }
        li:nth-of-type(1) {
          height: 22px;
          font-size: 16px;
          font-family: NunitoSans-SemiBold;
          font-weight: 600;
          color: rgba(2, 16, 28, 1);
          line-height: 22px;
        }
      }
    }
    .sg:nth-of-type(1) {
      width: 40%;
      ul {
        width: 50%;
      }
    }
    .sg:nth-of-type(2) {
      width: 60%;
      ul {
        width: 33.33%;
      }
    }
  }

  .nav_change {
    font-size: 14px;
    font-family: NunitoSans-Regular;
    font-weight: 400;
    color: rgba(89, 89, 89, 1);
    line-height: 19px;
    margin: 28px 0;
    position: relative;
    div.select {
      position: absolute;
      right: 10px;
      top: 0;
      width: 90px;
      height: 30px;
      /deep/ .el-input {
        .el-input__inner {
          border: 1px solid #469fdb;
          color: #469fdb;
        }
        .el-select__caret {
          color: #469fdb;
        }
        input::-webkit-input-placeholder {
          color: #469fdb;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #469fdb;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #469fdb;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #469fdb;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  #footer {
    .footer-logo {
      padding-left: 10px;
    }
    .foot-link {
      padding-left: 10px;
    }
  }
}

@media only screen and (max-width: 767px) {
  #footer {
    .footer-logo {
      padding-left: 10px;
    }
    .foot-link {
      padding-left: 10px;
      div.sg:nth-of-type(1),
      div.sg:nth-of-type(2) {
        float: none;
        width: 100%;
        ul {
          width: 100%;
        }
      }
    }
    .nav_change {
      div.select {
        position: relative;
        text-align: center;
        margin-top: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
