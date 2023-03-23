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
  @include flex();
  gap: 21.95px;
  background: $logoBackground;
  height: 60px;
  width: 100%;
  .zoom {
    @include img(38.57px, 8.75px);
  }
  .stripe {
    @include img(38.59px, 16.1px);
  }
  .monday {
    @include img(59.37px, 10.81px);
  }
  .slack {
    @include img(47.35px, 12.02px);
  }
  .dropbox {
    @include img(59.37px, 11.68px);
  }
}

//For bigger screens
@media (min-width: 800px) {
  .logo {
    gap: 73.62px;
    height: 158px;
    .zoom {
      @include img(129.4px, 29.36px);
    }
    .stripe {
      @include img(129.52px, 54.03px);
    }
    .monday {
      @include img(199.26px, 36.27px);
    }
    .slack {
      @include img(158.95px, 40.33px);
    }
    .dropbox {
      @include img(199.26px, 39.19px);
    }
  }
}
</style>
