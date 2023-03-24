<script lang="ts">
import { defineComponent } from 'vue'
import zoom from '../images/zoom.svg'
import stripe from '../images/stripe.svg'
import monday from '../images/monday.svg'
import slack from '../images/slack.svg'
import dropbox from '../images/dropbox.svg'

export default defineComponent({
  data: () => ({
    zoom,
    stripe,
    monday,
    slack,
    dropbox
  })
})
</script>

<template>
  <section class="logo">
    <img class="zoom" :src="zoom" alt="zoom" />
    <img class="stripe" :src="stripe" alt="stripe" />
    <img class="monday" :src="monday" alt="monday" />
    <img class="slack" :src="slack" alt="slack" />
    <img class="dropbox" :src="dropbox" alt="dropbox" />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.logo {
  width: 100vw;
  @include flex();
  gap: 21.95px;
  background: $logoBackground;
  height: 60px;
  width: 100%;
  img {
    @include img(12%, auto);
  }
}

//For bigger screens
@media (min-width: 800px) {
  .logo {
    width: 100%;
    gap: 73.62px;
    height: 158px;
  }
}
</style>
