<script lang="ts">
import { defineComponent } from 'vue'
import TechTime from '../images/techtime.svg'
import Menu from '../images/menu.svg'
export default defineComponent({
  data: () => ({
    logo: TechTime,
    menu: Menu
  })
})
</script>

<template>
  <header class="header">
    <div class="header-contents">
      <img class="logo" :src="logo" alt="tech-time-logo" />
      <button class="nav-btn"><img :src="menu" alt="nav-menu" /></button>
      <nav class="nav-list">
        <ul>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Courses</button></li>
          <li><button>Testimonial</button></li>
          <li><button>Community</button></li>
        </ul>
        <button class="enroll">Enroll Now</button>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.header {
  width: 100vw;
  padding: 1rem;
  padding-top: 48px;
  background: $primaryColor;
  &-contents {
    @include pageLayout();
    @include flex(row nowrap, space-between);
    .logo {
      @include img(53px, 19px);
    }
    .nav-btn {
      @include button(18px, 12px);
      @include flex();
      img {
        @include img(100%, 100%);
      }
    }
    .nav-list {
      display: none;
    }
  }
}

//For larger screens
@media (min-width: 800px) {
  .header {
    width: 100%;
    &-contents {
      .logo {
        @include img(130px, 47px);
      }
      .nav-btn {
        display: none;
      }
      .nav-list {
        @include flex();
        gap: 40px;
        ul {
          @include flex();
          gap: 24px;
          margin: 0px;
          padding: 0px;
          li {
            margin: 0px;
            padding: 0px;
            list-style-type: none;
            button {
              @include button(auto, auto);
              @include font(700, 16px, $fontSecondary);
              color: $lightBlue;
            }
          }
          li:hover {
            button {
              color: $white;
            }
          }
          li:first-child {
            button {
              color: $white;
            }
          }
        }
        .enroll {
          @include flex();
          @include button(145px, 54px, $white, 4px);
          @include font(700, 16px, $fontSecondary);
          color: $primaryColor;
          padding: 16px 32px;
        }
      }
    }
  }
}
</style>
