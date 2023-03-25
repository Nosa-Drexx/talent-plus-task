<script lang="ts">
import { defineComponent } from 'vue'
import crown from '../images/crown.svg'
import audio from '../images/audio.svg'
import live from '../images/live.svg'
import record from '../images/record.svg'
import notes from '../images/notes.svg'
import main from '../images/main.svg'
import people from '../images/people.svg'
import zag from '../images/zag.svg'
import semicircle from '../images/semicircle.svg'

export default defineComponent({
  data: () => ({
    crown: crown,
    audio: audio,
    live: live,
    record: record,
    notes: notes,
    main: main,
    people: people,
    zag: zag,
    semicircle: semicircle
  })
})
</script>

<template>
  <section class="about" id="about">
    <div class="about-content">
      <img :src="zag" alt="background" class="zag" />
      <img :src="semicircle" alt="background" class="semicircle" />
      <div class="info">
        <div class="text-container">
          <img :src="crown" alt="crown" />
          <h2>High quality video, audio & live classes</h2>
          <p>
            High-defination Video Is Video Of Higher Resolution And Quality Than Standard
            Definition. While There’s No Standard Meaning For High Definition, Generally Any
            Standard Video Image
          </p>
        </div>
        <button class="view">View Courses</button>
        <div class="classes">
          <div class="audio"><img :src="audio" alt="audio" />Audio Classes</div>
          <div class="live"><img :src="live" alt="live" />Live Classes</div>
          <div class="record"><img :src="record" alt="record" />Recorded Classes</div>
          <div class="notes"><img :src="notes" alt="notes" />50+ Notes</div>
        </div>
      </div>
      <div class="image">
        <img class="people" :src="people" alt="people" />
        <img class="main" :src="main" alt="man-and-laptop" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.about {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: $aboutSection;
  .zag {
    @include img(2.794rem, 0.258rem);
    position: absolute;
    right: -0.5rem;
    top: 200.55px;
  }
  .semicircle {
    @include img(2.813rem, 2.956rem);
    position: absolute;
    right: -0.5rem;
    top: 365px;
  }
  &-content {
    @include pageLayout();
    @include flex(column nowrap, center);
    padding: 40px 1rem;
    gap: 40px;
    .info {
      @include flex(column nowrap, center);
      gap: 16px;
      .text-container {
        position: relative;
        @include flex(column nowrap);
        gap: 8px;
        img {
          position: absolute;
          left: -13px;
          top: -16px;
        }
        h2,
        p {
          margin: 0px;
          padding: 0px;
        }
        h2 {
          @include font(700, 1.5rem, $fontPrimary, 36px);
          text-align: center;
        }
        p {
          @include font(500, 8px, $fontSecondary, 15.39px);
          text-align: center;
          max-width: 20.753rem;
          color: $grayText;
        }
      }
      .view {
        @include button(5.188rem, 1.688rem, $primaryColor, 4px);
        @include font(700, 0.5rem, $fontSecondary, 10.8px);
        padding: 8px 16px;
        color: $white;
      }
      .classes {
        padding-top: calc(24px - 16px);
        @include flex(row wrap);
        gap: 13.19px;
        div {
          @include flex();
          //   min-width: 50%;
          @include font(700, 0.5rem, $fontSecondary, 11px);
          gap: 8px;
          background: $white;
          border-radius: 4px;
          padding: 8px 32px 8px 16px;
        }
      }
    }
    .image {
      @include flex(row nowrap, flex-start);
      position: relative;
      height: 272.66px;
      .main {
        @include img(100%, 100%);
      }
      .people {
        @include img(90px, 36px);
        position: absolute;
        left: 10%;
        top: 20%;
      }
    }
  }
}
//For bigger screens
@media (min-width: 800px) {
  .about {
    width: 100%;
    .zag {
      @include img(6.375rem, 0.943rem);
      position: absolute;
      right: -1.2rem;
      top: 54px;
    }
    .semicircle {
      @include img(10.25rem, 8.544rem);
      position: absolute;
      right: -3rem;
      top: 561.75px;
    }
    &-content {
      @include pageLayout();
      @include flex(row nowrap, space-between);
      padding: 148px 1rem 0px 1rem;
      // gap: 40px;
      .info {
        @include flex(column nowrap, center, flex-start);
        gap: 16px;
        width: 48%;
        .text-container {
          position: relative;
          @include flex(column nowrap, center, flex-start);
          gap: 8px;
          img {
            @include img(43.86px, 65.51px);
            position: absolute;
            left: -30px;
            top: -28px;
          }
          h2,
          p {
            margin: 0px;
            padding: 0px;
          }
          h2 {
            @include font(700, 3.5rem, $fontPrimary, 70px);
            text-align: unset;
          }
          p {
            @include font(500, 1rem, $fontSecondary, 28px);
            text-align: unset;
            max-width: 37.75rem;
            color: $grayText;
          }
        }
        .view {
          @include button(10.375rem, 3.375rem, $primaryColor, 4px);
          @include font(700, 1rem, $fontSecondary, 22px);
          padding: 16px 32px;
          color: $white;
        }
        .classes {
          @include flex(row wrap, flex-start);
          padding-top: calc(24px - 16px);
          width: 100%;
          max-width: 31.25rem;
          gap: 13.19px;
          div {
            @include flex();
            @include font(700, 1rem, $fontSecondary, 22px);
            gap: 8px;
            background: $white;
            border-radius: 4px;
            padding: 20px 56px 20px 24px;
          }
        }
      }
      .image {
        @include flex(row nowrap, flex-start);
        position: relative;
        height: 622px;
        width: 52%;
        max-width: 805px;
        .main {
          @include img(100%, 100%);
        }
        .people {
          @include img(12.813rem, 5.063rem);
          position: absolute;
          left: 5%;
          top: 20%;
        }
      }
    }
  }
}
</style>
