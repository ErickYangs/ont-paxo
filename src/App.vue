<template>
  <div id="app" :class="'lang_'+isLocal">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$i18n.locale)
  },
  computed: {
    isLocal() {
      console.log(this.$store.state.Home.lang)
      return this.$store.state.Home.lang
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
