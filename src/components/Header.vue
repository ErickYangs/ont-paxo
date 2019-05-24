<template>
  <div id="header">
    <div class="logo"></div>
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
#header {
  width: 100%;
  max-width: 1008px;
  overflow: hidden;
  margin: 0 auto;
  padding: 14px 0;
  .logo {
    width: 145px;
    height: 28px;
    background: url(../assets/images/ont_logo.png) center center;
    background-size: cover;
    float: left;
  }
  .select {
    float: right;
    margin-right: 20px;
    .el-select {
      width: 90px;
      height: 30px;
      line-height: 30px;
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
    .text-color {
      color: #469fdb;
    }
  }
}
@media only screen and (max-width: 960px) {
  #header {
    .logo {
      margin-left: 10px;
    }
  }
}
</style>
