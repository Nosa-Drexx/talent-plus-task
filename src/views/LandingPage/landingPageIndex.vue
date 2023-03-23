<script lang="ts">
import { defineComponent } from 'vue'
import HeaderSection from './components/headerSection.vue'
import HeroSection from './components/heroSection.vue'
import LogoSection from './components/logoSection.vue'
export default defineComponent({
  data: () => ({}),
  components: {
    HeaderSection,
    HeroSection,
    LogoSection
  }
})
</script>

<template>
  <HeaderSection />
  <HeroSection />
  <LogoSection />
</template>

<style scoped lang="scss"></style>
