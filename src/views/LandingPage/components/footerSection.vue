<script lang="ts">
import { defineComponent } from 'vue'
import TechTime from '../images/techtime.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import instagram from '../images/instagram.svg'
import discord from '../images/discord.svg'
import SubscribeInput from './subscribeInput.vue'

export default defineComponent({
  data: () => ({
    logo: TechTime,
    facebook: facebook,
    twitter: twitter,
    youtube: youtube,
    instagram: instagram,
    discord: discord
  }),
  components: {
    SubscribeInput
  }
})
</script>

<template>
  <footer class="footer">
    <div class="footer-contents">
      <div class="reach-out">
        <img :src="logo" alt="logo" class="logo" />
        <p>Reach out to us on any of our social media networks</p>
        <div class="socials">
          <a href="www.facebook.com" target="_blank">
            <img :src="facebook" alt="facebook" class="facebook" />
          </a>
          <a href="www.twitter.com" target="_blank">
            <img :src="twitter" alt="twitter" class="twitter" />
          </a>
          <a href="www.youtube.com" target="_blank">
            <img :src="youtube" alt="youtube" class="youtube" />
          </a>
          <a href="www.instagram" target="_blank">
            <img :src="instagram" alt="instagram" class="instagram" />
          </a>
          <a href="www.discord.com" target="_blank">
            <img :src="discord" alt="discord" class="discord" />
          </a>
        </div>
      </div>
      <div class="all-links">
        <div>
          <h3>Useful Links</h3>
          <div class="links">
            <a href="#home">Home</a>
            <a href="#about">AboutUs</a>
            <a href="#courses">Our Courses</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#community">Our Community</a>
          </div>
        </div>

        <div>
          <h3>Community</h3>
          <div class="links">
            <a href="#">Help Center</a>
            <a href="#">Connections</a>
            <a href="#">Suggestion</a>
            <a href="#">Blog</a>
            <a href="#">NewsLetter</a>
          </div>
        </div>
        <div class="subscribe">
          <h3>Subscribe Us</h3>
          <SubscribeInput />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.footer {
  width: 100%;
  padding: 2.5rem 1rem 10.25rem;
  background: $footerBackground;
  &-contents {
    @include pageLayout();
    @include flex(column nowrap);
    gap: 81.1px;
    .reach-out {
      @include flex(column nowrap, center, flex-start);
      width: 100%;
      gap: 24px;
      .logo {
        @include img(6.313rem, 2.25rem);
      }
      p {
        @include font(400, 1rem, $fontSecondary, 1.35rem);
        max-width: 17.563rem;
        color: $white;
      }
      .socials {
        @include flex(row nowrap, flex-start);
        gap: 30.38px;
        width: 100%;
        a {
          @include flex();
          text-decoration: none;
          img {
            @include img(2rem, 2rem);
          }
        }
      }
    }
    .all-links {
      @include flex(column nowrap, center, flex-start);
      width: 100%;
      gap: 32px;
      color: $white;
      h3 {
        @include font(600, 1.5rem, $fontPrimary, 1.845rem);
        padding: 0px;
        margin-bottom: 1.5rem;
      }
      .links {
        @include flex(column nowrap, center, flex-start);
        gap: 16px;
        a {
          @include font(400, 1rem, $fontSecondary, 1.35rem);
          color: $white;
          text-decoration: none;
        }
      }
      .subscribe {
        width: 100%;
      }
    }
  }
}
@media (min-width: 800px) {
  .footer {
    padding: 10.375rem 1rem 21.688rem;
    &-contents {
      @include flex(row nowrap, space-between, flex-start);
      gap: unset;
      .reach-out {
        width: 20%;
        gap: 26px;
        .logo {
          @include img(8.125rem, 2.938rem);
        }
        .socials {
          gap: 17px;
        }
      }
      .all-links {
        @include flex(row nowrap, space-between, flex-start);
        width: 70%;
        .subscribe {
          width: 40%;
        }
      }
    }
  }
}
</style>
