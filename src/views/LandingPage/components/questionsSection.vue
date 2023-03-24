<script>
import { defineComponent } from 'vue'
import dropDown from './dropDown/dropDown.vue'
export default defineComponent({
  data: () => ({}),
  components: {
    dropDown
  }
})
</script>

<template>
  <section class="questions">
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
  padding: 2.5rem 1rem;
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
  }
}
</style>
