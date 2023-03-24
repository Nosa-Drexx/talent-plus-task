<script lang="ts">
import { defineComponent } from 'vue'
import manWork from '../images/manwork.svg'
import experience from '../images/experience.svg'
import affordable from '../images/affordable.svg'
import affordableMoney from '../images/affordableMoney.svg'
import elearning from '../images/eLearning.svg'
import orangeZag from '../images/orangeZag.svg'
import triangle from '../images/triangle.svg'
import circleBackground from '../images/circleBackground.svg'

export default defineComponent({
  data: () => ({
    manWork: manWork,
    experience: experience,
    affordable: affordable,
    affordableMoney: affordableMoney,
    elearning: elearning,
    orangeZag: orangeZag,
    triangle: triangle,
    circleBackground: circleBackground
  })
})
</script>

<template>
  <section class="why">
    <div class="why-contents">
      <img :src="orangeZag" alt="orangeZag" class="orange-zag" />
      <img :src="triangle" alt="triangle" class="triangle" />
      <img :src="circleBackground" alt="circleBackground" class="circle-background" />
      <div class="info">
        <h2>This Is Why We Are Best From Others</h2>
        <p>
          High-defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.
          While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
        <img :src="manWork" alt="man-working" />
      </div>
      <div class="offers">
        <div class="offer-card">
          <img :src="experience" alt="experience" />
          <h3>Experienced Mentors</h3>
          <p>
            High-defination Video Is Video Of Higher Resolution And Quality Than Standard
            Definition. While There’s No Standard Meaning For High Definition, Generally Any
            Standard Video Image
          </p>
        </div>
        <div class="offer-card">
          <img :src="affordable" alt="affordable" />
          <h3>Affordable Prices</h3>
          <p>
            High-defination Video Is Video Of Higher Resolution And Quality Than Standard
            Definition. While There’s No Standard Meaning For High Definition, Generally Any
            Standard Video Image
          </p>
        </div>
        <div class="offer-card">
          <img :src="affordableMoney" alt="affordableMoney" />
          <h3>Affordable Prices</h3>
          <p>
            High-defination Video Is Video Of Higher Resolution And Quality Than Standard
            Definition. While There’s No Standard Meaning For High Definition, Generally Any
            Standard Video Image
          </p>
        </div>
        <div class="offer-card">
          <img :src="elearning" alt="elearning" />
          <h3>Flexible Learning</h3>
          <p>
            High-defination Video Is Video Of Higher Resolution And Quality Than Standard
            Definition. While There’s No Standard Meaning For High Definition, Generally Any
            Standard Video Image
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.why {
  position: relative;
  padding: 7.188rem 1rem 0 1rem;
  width: 100%;
  background: $aboutSection;
  .orange-zag {
    display: none;
    position: absolute;
    right: 40%;
    top: 41px;
  }
  .triangle {
    position: absolute;
    bottom: 5%;
    left: 2.5%;
  }
  .circle-background {
    @include img(0.5rem, 0.5rem);
    position: absolute;
    bottom: 243px;
    right: 2.5%;
  }
  &-contents {
    @include pageLayout();
    @include flex(column nowrap);
    .info {
      @include flex(column nowrap);
      gap: 8px;
      h2,
      p {
        margin: 0px;
        padding: 0px;
        text-align: center;
      }
      h2 {
        @include font(700, 1.5rem, $fontPrimary, 2.25rem);
      }
      p {
        @include font(7500, 0.5rem, $fontSecondary, 1rem);
        width: 100%;
        max-width: 20.661rem;
        color: $grayText;
      }
      img {
        @include img(100%, 260px);
        max-width: 390px;
        margin-top: calc(24px - 8px);
      }
    }
    .offers {
      @include flex(row wrap);
      gap: 10px;
      width: 100%;
      padding-top: 32px;
      .offer-card {
        @include flex(column nowrap, flex-start, flex-start);
        gap: 8px;
        width: 48%;
        border-radius: 4px;
        background: $white;
        padding: 24px 16px;
        h3,
        p {
          margin: 0px;
          padding: 0px;
        }
        h3 {
          @include font(700, 0.75rem, $fontSecondary, 1.013rem);
        }
        p {
          @include font(500, 0.5rem, $fontSecondary, 1rem);
          color: $grayText;
        }
      }
    }
  }
}

//For bigger Screens
@media (min-width: 800px) {
  .why {
    padding: 4.506rem 1rem 0 1rem;
    .orange-zag {
      display: unset;
      position: absolute;
      right: 40%;
      top: 41px;
    }

    .triangle {
      @include img(1.876rem, 1.758rem);
      position: absolute;
      bottom: 5%;
      left: 2.5%;
    }
    .circle-background {
      @include img(1.625rem, 1.625rem);
      position: absolute;
      bottom: 0;
      right: 1%;
    }
    &-contents {
      @include flex(row nowrap);
      .info {
        @include flex(column nowrap, center, flex-start);
        width: 50%;
        gap: 16px;
        h2,
        p {
          text-align: unset;
        }
        h2 {
          @include font(700, 3.5rem, $fontPrimary, 4.375rem);
        }
        p {
          @include font(7500, 1rem, $fontSecondary, 1.75rem);
          width: 100%;
          max-width: 37.75rem;
          color: $grayText;
        }
        img {
          @include img(100%, 260px);
          max-width: 712.57px;
          margin-top: calc(24px - 8px);
        }
      }
      .offers {
        @include flex(row wrap);
        width: 50%;
        padding-top: 32px;
        .offer-card {
          @include flex(column nowrap, flex-start, flex-start);
          gap: 8px;
          width: 48%;
          border-radius: 4px;
          background: $white;
          padding: 24px 32px;
          h3,
          p {
            margin: 0px;
            padding: 0px;
          }
          h3 {
            @include font(700, 1rem, $fontSecondary, 1.35rem);
          }
          p {
            @include font(500, 0.75rem, $fontSecondary, 1.75rem);
            color: $grayText;
          }
        }
      }
    }
  }
}
</style>
