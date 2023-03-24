<script lang="ts">
import { defineComponent } from 'vue'
import HeaderSection from './components/headerSection.vue'
import HeroSection from './components/heroSection.vue'
import LogoSection from './components/logoSection.vue'
import AboutSection from './components/aboutSection.vue'
import WhySection from './components/whySection.vue'
import CourseSection from './components/courseSection.vue'
import ReviewSection from './components/reviewsSection.vue'
import ConnectSection from './components/connectSection.vue'
import QuestionsSection from './components/questionsSection.vue'
export default defineComponent({
  data: () => ({}),
  components: {
    HeaderSection,
    HeroSection,
    LogoSection,
    AboutSection,
    WhySection,
    CourseSection,
    ReviewSection,
    ConnectSection,
    QuestionsSection
  }
})
</script>

<template>
  <HeaderSection />
  <HeroSection />
  <LogoSection />
  <AboutSection />
  <WhySection />
  <CourseSection />
  <ReviewSection />
  <ConnectSection />
  <QuestionsSection />
</template>

<style scoped lang="scss"></style>
