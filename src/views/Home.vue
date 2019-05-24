<template>
  <div class="home">
    <TheHeader></TheHeader>
    <TheBody></TheBody>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/Header.vue'
import TheBody from '@/components/Body.vue'
import TheFooter from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    TheHeader, TheFooter, TheBody
  }
}
</script>
