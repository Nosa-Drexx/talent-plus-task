<script lang="ts">
import { defineComponent } from 'vue'
import TechTime from '../images/techtime.svg'
import Menu from '../images/menu.svg'
export default defineComponent({
  data: () => ({
    logo: TechTime,
    menu: Menu,
    showNav: false
  }),
  methods: {
    showNavMobile() {
      const navMobile = this.$refs.navMobile as HTMLElement
      this.showNav = !this.showNav
      if (this.showNav) {
        navMobile.style.height = '190px'
      } else {
        navMobile.style.height = '0px'
      }
    }
  }
})
</script>

<template>
  <header class="header">
    <div class="header-contents">
      <img class="logo" :src="logo" alt="tech-time-logo" />
      <button class="nav-btn" @click="showNavMobile"><img :src="menu" alt="nav-menu" /></button>
      <nav class="nav-list">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses"> Courses</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
        <button class="enroll">Enroll Now</button>
      </nav>
      <nav class="nav-mobile" ref="navMobile">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses"> Courses</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
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
  position: sticky;
  top: 0;
  z-index: 100;
  // background: $primaryColor;
  backdrop-filter: blur(8px);
  padding: 1rem;
  padding-top: 48px;
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
    .nav-mobile {
      position: absolute;
      left: 0;
      top: 100%;
      transition: height 0.5s;
      width: 100%;
      background: $white;
      overflow: hidden;
      ul {
        @include flex(column nowrap, flex-start, flex-start);
        margin: 0px;
        padding: 0px;
        width: 100%;
        li {
          @include flex(column nowrap, flex-start, flex-start);
          list-style-type: none;
          width: 100%;
          a {
            @include font(700, 16px, $fontSecondary);
            width: 100%;
            text-decoration: none;
            padding: 0.5rem 1rem;
            color: $black;
          }
          a:hover {
            background: $lightBlue;
          }
        }
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
      .nav-mobile {
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
            a {
              @include button(auto, auto);
              @include font(700, 16px, $fontSecondary);
              color: $lightBlue;
              text-decoration: none;
            }
          }
          li:hover {
            a {
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
