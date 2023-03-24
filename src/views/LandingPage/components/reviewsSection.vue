<script lang="ts">
import { defineComponent } from 'vue'
import bella from '../images/bella.png'
import fortune from '../images/fortune.png'
import bryce from '../images/bryce.png'

export default defineComponent({
  data: () => ({
    bella: bella,
    fortune: fortune,
    bryce: bryce
  })
})
</script>

<template>
  <section class="reviews">
    <div class="reviews-contents">
      <h2>What Our Clients Are Saying</h2>
      <p>
        High-defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.
        While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
      </p>
    </div>
    <div class="reviews-carousel">
      <v-carousel cycle height="auto" hide-delimiter-background :show-arrows="false">
        <v-carousel-item>
          <div class="review-container">
            <div class="review-info">
              <div class="info">
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition. hbuild your future with our quality education. the best and
                largest all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality than standard
                definition. build your future with our quality education. the best and largest
                all-in-one online tutoring platform in the world
              </div>
              <div class="author">
                <img :src="bella" alt="customer" />
                <div>
                  <h3>Bella Moon</h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>

        <!-- Second Review -->
        <v-carousel-item>
          <div class="review-container">
            <div class="review-info">
              <div class="info">
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition. hbuild your future with our quality education. the best and
                largest all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality than standard
                definition. build your future with our quality education. the best and largest
                all-in-one online tutoring platform in the world
              </div>
              <div class="author">
                <img :src="fortune" alt="customer" />
                <div>
                  <h3>Samuel Fortune</h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>

        <!-- Third Review -->
        <v-carousel-item>
          <div class="review-container">
            <div class="review-info">
              <div class="info">
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition. hbuild your future with our quality education. the best and
                largest all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality than standard
                definition. build your future with our quality education. the best and largest
                all-in-one online tutoring platform in the world
              </div>
              <div class="author">
                <img :src="bryce" alt="customer" />
                <div>
                  <h3>Bryce Jason</h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>

        <!-- Forth Review -->
        <v-carousel-item>
          <div class="review-container">
            <div class="review-info">
              <div class="info">
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition. hbuild your future with our quality education. the best and
                largest all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality than standard
                definition. build your future with our quality education. the best and largest
                all-in-one online tutoring platform in the world
              </div>
              <div class="author">
                <img :src="fortune" alt="customer" />
                <div>
                  <h3>Samuel Fortune</h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.reviews {
  width: 100%;
  background: $aboutSection;
  padding-bottom: 25px;
  &-contents {
    @include flex(column nowrap);
    gap: 3.1px;
    @include pageLayout();
    padding-top: 62px;
    h2,
    p {
      margin: 0px;
      padding: 0px;
      text-align: center;
    }
    h2 {
      @include font(700, 1.5rem, $fontPrimary, 1.875rem);
    }
    p {
      @include font(500, 0.5rem, $fontSecondary, 1rem);
      max-width: 288.12px;
      color: $grayText;
    }
  }
  &-carousel {
    padding-top: 32px;
    .review-container {
      width: 100%;
      height: 217.96px;
    }
    .review-info {
      @include flex(column nowrap, center, flex-start);
      gap: 16px;
      background: $white;
      padding: 24px 16px;
      border-radius: 16px;
      width: 90%;
      height: 75%;
      margin: 0 auto;
      .info {
        @include font(500, 0.625rem, $fontSecondary, 0.844rem);
        color: $grayText;
        width: 100%;
      }
      .author {
        @include flex(row nowrap flex-start, flex-start);
        width: 100%;
        gap: 1.92px;
        img {
          @include img(1.5rem, 1.5rem);
          border-radius: 50%;
        }
        div {
          @include flex(column nowrap, flex-start, flex-start);
          h3,
          p {
            margin: 0px;
            padding: 0px;
          }
          h3 {
            @include font(700, 0.625rem, $fontSecondary, 0.844rem);
          }
          p {
            @include font(400, 0.5rem, $fontSecondary, 0.675rem);
          }
        }
      }
    }
  }
}
@media (min-width: 800px) {
  .reviews {
    &-contents {
      gap: 8px;
      padding-top: 119px;
      h2 {
        @include font(700, 3.5rem, $fontPrimary, 4.305rem);
      }
      p {
        @include font(500, 1rem, $fontSecondary, 1.75rem);
        max-width: 743px;
      }
    }
    &-carousel {
      padding-top: 48px;
      .review-container {
        width: 100%;
        height: 296px;
      }
      .review-info {
        gap: 24.5px;
        padding: 40px 24px;
        border-radius: 24px;
        width: 70%;
        .info {
          @include font(500, 0.875rem, $fontSecondary, 1.625rem);
          color: $grayText;
          width: 100%;
        }
        .author {
          @include flex(row nowrap flex-start, flex-start);
          gap: 8px;
          img {
            @include img(3rem, 3rem);
          }
          div {
            h3 {
              @include font(700, 0.875rem, $fontSecondary, 1.181rem);
            }
            p {
              @include font(400, 0.75rem, $fontSecondary, 1.013rem);
            }
          }
        }
      }
    }
  }
}
</style>
