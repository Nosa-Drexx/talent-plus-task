<script lang="ts">
import { defineComponent } from 'vue'
import Arrow from '../images/arrow.svg'
import Customers from '../images/customers.svg'
import HeroImage from '../images/hero-image.svg'
import downArrow from '../images/downArrow.svg'
export default defineComponent({
  data: () => ({
    arrow: Arrow,
    customers: Customers,
    heroImage: HeroImage,
    downArrow: downArrow
  })
})
</script>

<template>
  <section class="hero">
    <div class="hero-contents">
      <div class="info">
        <h1>
          Grow your skills to <br />
          advance your career <br />
          path
        </h1>
        <p>
          build your future with our quality education. the best and largest all-in-one online
          tutoring platform in the world
        </p>
        <div class="action-btn">
          <button class="start">Get Started Now <img :src="arrow" alt="arrow" /></button
          ><button class="enroll">Enroll Now</button>
        </div>
        <img class="customers" :src="customers" alt="customers" />
        <div class="down-arrow">
          <img :src="downArrow" alt="pointer" />
        </div>
      </div>
      <div class="hero-image"><img :src="heroImage" alt="hero" /></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.hero {
  width: 100%;
  background: $primaryColor;
  padding-top: calc(46px - 1rem);
  &-contents {
    @include pageLayout();
    @include flex(column nowrap, flex-start, center);
    .info {
      position: relative;
      @include flex(column nowrap, flex-start, center);
      gap: 8.93px;
      h1,
      p {
        margin: 0px;
        padding: 0px;
      }
      h1 {
        @include font(700, 32px, $fontPrimary, 46px);
        text-align: center;
        color: $white;
      }
      p {
        @include font(500, 8px, $fontSecondary, 15px);
        width: 297.58px;
        text-align: center;
        color: $grey;
      }
      .action-btn {
        @include flex();
        gap: 12px;
        padding-top: calc(18.37px - 8.93px);
        .start {
          @include flex();
          @include font(500, 8px, $fontSecondary, 15px);
          justify-content: space-between;
          @include button(110px, 27px, transparent, 4px);
          color: $white;
          padding: 8px 16px;
          border: 0.55831px solid $white;
          img {
            @include img(6.5px, 6.5px);
          }
        }
        .enroll {
          @include button(73px, 27px, $white, 4px);
          @include font(500, 8px, $fontSecondary, 11px);
          color: $primaryColor;
        }
      }
      .customers {
        margin-top: calc(18px - 8.93px);
        @include img(176px, 32px);
      }

      .down-arrow {
        position: absolute;
        right: 0;
        bottom: -60px;
        img {
          @include img(54.41px, 109.19px);
        }
      }
    }
    .hero-image {
      width: 100%;
      padding: calc(47.2px - 8.93px);
      img {
        @include img(100%, 456px);
      }
    }
  }
}

//For bigger screens
@media (min-width: 800px) {
  .hero {
    width: 100%;
    padding: 1rem;
    padding-top: calc(30px - 1rem);
    &-contents {
      @include flex();
      .info {
        width: 50%;
        @include flex(column nowrap, flex-start, flex-start);
        gap: 16px;
        h1 {
          @include font(700, 64px, $fontPrimary, 82px);
          text-align: unset;
          color: $white;
        }
        p {
          @include font(500, 16px, $fontSecondary, 26px);
          width: 533px;
          text-align: unset;
          color: $grey;
        }
        .action-btn {
          @include flex();
          gap: 22px;
          padding-top: calc(32px - 16px);
          .start {
            @include flex();
            @include font(500, 16px, $fontSecondary, 22px);
            justify-content: space-between;
            @include button(216px, 54px, transparent, 4px);
            padding: 16px 32px;
            border: 1px solid $white;
            img {
              @include img(10.32px, 10.32px);
            }
          }
          .enroll {
            @include button(145px, 54px, $white, 4px);
            @include font(500, 16px, $fontSecondary, 22px);
          }
        }
        .customers {
          margin-top: calc(31px - 16px);
          @include img(311px, 64px);
        }
        .down-arrow {
          position: absolute;
          right: -50px;
          bottom: -30px;
          transform: matrix(0.46, -0.89, 0.82, 0.57, 0, 0);
          img {
            @include img(111.08px, 222.87px);
          }
        }
      }

      .hero-image {
        width: 50%;
        padding: calc(47.2px - 8.93px);
        img {
          @include img(100%, 886px);
        }
      }
    }
  }
}
</style>
