<script lang="ts">
import { defineComponent } from 'vue'
import connect from '../images/connect.svg'
export default defineComponent({
  data: () => ({
    connect: connect
  })
})
</script>

<template>
  <section class="connect" id="community">
    <div class="connect-contents">
      <div class="text">
        <p class="join">JOIN OUR COMMUNITY</p>
        <h2>Are you ready to connect with the future talent of the tech world</h2>
        <p class="meet">Meet Up With Other Techstars And Grow Together</p>
      </div>
      <div class="connections">
        <img :src="connect" alt="connections" />
        <button>Join Our Community</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.connect {
  width: 100%;
  background: $primaryColor;
  padding: 0 1rem 2.688rem;
  &-contents {
    @include pageLayout();
    @include flex(column nowrap);
    gap: 23.9px;
    .text {
      @include flex(column nowrap);
      padding-top: 2.5rem;
      gap: 4px;
      width: 100%;
      h2,
      p {
        margin: 0px;
        padding: 0px;
        text-align: center;
        color: $white;
      }
      p {
        @include font(500, 0.5rem, $fontSecondary, 0.675rem);
      }
      h2 {
        @include font(700, 1.5rem, $fontPrimary, 1.845rem);
      }
    }
    .connections {
      @include flex(column nowrap);
      gap: 26.07px;
      img {
        @include img(100%, 12.945rem);
      }
      width: 100%;
      button {
        @include font(700, 0.5rem, $fontPrimary, 0.688rem);
        background: $white;
        border-radius: 2.19897px;
        color: $primaryColor;
        padding: 8px 16px;
      }
    }
  }
}

//For bigger screens
@media (min-width: 800px) {
  .connect {
    padding: 0 1rem 6.125rem;
    &-contents {
      gap: 23.9px;
      .text {
        padding-top: 5.375rem;
        gap: 31.74px;
        p {
          @include font(500, 1rem, $fontSecondary, 1.35rem);
        }
        h2 {
          @include font(700, 3.5rem, $fontPrimary, 4.18rem);
          max-width: 1203px;
        }
      }
      .connections {
        gap: 62px;
        img {
          @include img(100%, 32.484rem);
        }
        button {
          @include font(700, 1rem, $fontPrimary, 1.375rem);
          border-radius: 4px;
          padding: 16px 32px;
        }
      }
    }
  }
}
</style>
