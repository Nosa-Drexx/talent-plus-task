<script>
import { defineComponent } from 'vue'
import dropDown from '@/components/dropDown/dropDown.vue'
import orangeZag from '../images/orangeZag.svg'
import oval from '../images/oval.svg'
import greenhalfcircle from '../images/greenhalfcircle.svg'
import greenhalfcircle2 from '../images/greenhalfcircle2.svg'

export default defineComponent({
  data: () => ({
    orangeZag: orangeZag,
    oval: oval,
    greenhalfcircle: greenhalfcircle,
    greenhalfcircle2: greenhalfcircle2
  }),
  components: {
    dropDown
  }
})
</script>

<template>
  <section class="questions">
    <img :src="orangeZag" class="orange-zag" alt="background" />
    <img :src="oval" class="oval" alt="background" />
    <img :src="greenhalfcircle" class="green-half-circle" alt="background" />
    <img :src="greenhalfcircle2" class="green-half-circle2" alt="background" />
    <div class="questions-contents">
      <div class="info">
        <h2>Frequently Asked Questions</h2>
        <p>
          High-defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.
          While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
      </div>
      <div class="drop-down-container">
        <dropDown title="Is there a free trial available?">
          <p>
            High-defination video is video of higher resolution and quality than standard
            definition. high-defination video is video of higher resolution and quality than
            standard definition. hbuild your future with our quality education. the best and largest
            all-in-one online tutoring platform in the worldd definition.
          </p></dropDown
        >
        <dropDown title="Can i change my plan later?">
          <p>
            High-defination video is video of higher resolution and quality than standard
            definition. high-defination video is video of higher resolution and quality than
            standard definition. hbuild your future with our quality education. the best and largest
            all-in-one online tutoring platform in the worldd definition.
          </p></dropDown
        >
        <dropDown title="Are the courses lifetime?">
          <p>
            High-defination video is video of higher resolution and quality than standard
            definition. high-defination video is video of higher resolution and quality than
            standard definition. hbuild your future with our quality education. the best and largest
            all-in-one online tutoring platform in the worldd definition.
          </p></dropDown
        >
        <dropDown title="Do i get certified after taking courses?">
          <p>
            High-defination video is video of higher resolution and quality than standard
            definition. high-defination video is video of higher resolution and quality than
            standard definition. hbuild your future with our quality education. the best and largest
            all-in-one online tutoring platform in the worldd definition.
          </p></dropDown
        >
        <dropDown title="how do i reach out to mentors?">
          <p>
            High-defination video is video of higher resolution and quality than standard
            definition. high-defination video is video of higher resolution and quality than
            standard definition. hbuild your future with our quality education. the best and largest
            all-in-one online tutoring platform in the worldd definition.
          </p></dropDown
        >
        <dropDown title="Do we get job ready after taking courses?">
          <p>
            High-defination video is video of higher resolution and quality than standard
            definition. high-defination video is video of higher resolution and quality than
            standard definition. hbuild your future with our quality education. the best and largest
            all-in-one online tutoring platform in the worldd definition.
          </p></dropDown
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.questions {
  width: 100%;
  background: $white;
  padding: 2.5rem 1rem 4.116rem;
  overflow: hidden;
  position: relative;
  .orange-zag {
    @include img(24px, 4.87px);
    position: absolute;
    left: -3.04%;
    top: 21.45%;
  }
  .oval {
    @include img(9.87px, 7.62px);
    position: absolute;
    right: 2.83%;
    top: 4.88%;
  }
  .green-half-circle {
    display: none;
  }
  .green-half-circle2 {
    display: none;
  }
  &-contents {
    @include pageLayout();
    @include flex(column nowrap);
    gap: 24px;
    .info {
      @include flex(column nowrap);
      width: 100%;
      h2,
      p {
        margin: 0px;
        padding: 0px;
        text-align: center;
      }
      h2 {
        @include font(700, 1.5rem, $fontPrimary, 1.845rem);
      }
      p {
        @include font(500, 0.5rem, $fontSecondary, 1rem);
        color: $grayText;
        max-width: 290.5px;
      }
    }
    .drop-down-container {
      @include flex(column nowrap, flex-start, flex-start);
      gap: 12px;
    }
  }
}
@media (min-width: 800px) {
  .questions {
    padding: 5rem 1rem;
    .orange-zag {
      @include img(75px, 17.98px);
      position: absolute;
      left: -0.41%;
      top: 28.81%;
    }
    .oval {
      @include img(26px, 23.71px);
      position: absolute;
      right: 14.48%;
      top: 10.13%;
    }
    .green-half-circle {
      @include img(293px, 381px);
      display: unset;
      position: absolute;
      right: -100px;
      top: 100px;
    }
    .green-half-circle2 {
      @include img(293px, 381px);
      display: unset;
      position: absolute;
      left: -120px;
      top: calc(50% - 780px / 2 + 390.5px);
    }
    &-contents {
      gap: 82px;
      .info {
        h2 {
          @include font(700, 3.5rem, $fontPrimary, 4.305rem);
        }
        p {
          @include font(500, 1rem, $fontSecondary, 1.75rem);
          color: $grayText;
          max-width: 743px;
        }
      }
      .drop-down-container {
        @include flex(column nowrap, flex-start, flex-start);
        width: 70%;
        gap: 12px;
      }
    }
  }
}
</style>
