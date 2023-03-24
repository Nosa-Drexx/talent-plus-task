<script lang="ts">
import { defineComponent } from 'vue'
import allCategory from './allCategory.vue'
import marketCategory from './marketCategory.vue'
import designCategory from './designCategory.vue'
import developmentCategory from './developmentCategory.vue'

export default defineComponent({
  data: () => ({
    active: 'all'
  }),
  methods: {
    toggleCategory(e: MouseEvent): void {
      const div = this.$refs.categoryList as HTMLDivElement
      const button = e.target as HTMLButtonElement

      const buttonName: string = button.dataset.name ? button.dataset.name : ''

      this.active = buttonName

      const buttonListInDiv: HTMLCollection = div.children
      for (let elem of buttonListInDiv) {
        const buttons = elem as HTMLButtonElement
        if (buttons.dataset.name !== buttonName) {
          buttons.className = 'categories-btn'
        } else {
          buttons.className = 'categories-btn active'
        }
      }
    }
  },
  components: {
    allCategory,
    marketCategory,
    designCategory,
    developmentCategory
  }
})
</script>

<template>
  <section class="courses">
    <div class="courses-contents">
      <div class="info">
        <h2>Browse Our Popular Courses</h2>
        <p>
          High-defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.
          While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
        <div class="categories" ref="categoryList">
          <button class="categories-btn active" data-name="all" @click="toggleCategory">
            All Categories
          </button>
          <button class="categories-btn" data-name="design" @click="toggleCategory">Design</button>
          <button class="categories-btn" data-name="development" @click="toggleCategory">
            Development
          </button>
          <button class="categories-btn" data-name="market" @click="toggleCategory">
            Marketing
          </button>
        </div>
      </div>

      <div class="category">
        <developmentCategory v-if="active === 'development'" />
        <marketCategory v-else-if="active === 'market'" />
        <designCategory v-else-if="active === 'design'" />
        <allCategory v-else />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';

.courses {
  width: 100%;
  background: $aboutSection;
  &-contents {
    @include pageLayout();
    @include flex(column nowrap);
    .info {
      @include flex(column nowrap);
      gap: 4px;
      padding: 4.536rem 1rem 0 1rem;
      h2,
      p {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      h2 {
        @include font(700, 1.5rem, $fontPrimary, 1.845rem);
      }
      p {
        @include font(500, 0.5rem, $fontSecondary, 1rem);
        width: 100%;
        max-width: 17.632rem;
        color: $grayText;
      }
      .categories {
        padding-top: calc(16px - 4px);
        @include flex();
        &-btn {
          @include flex();
          @include button(4.313rem, 1.188rem, transparent, 4px);
          padding: 4px, 8px;
          @include font(700, 0.5rem, $fontSecondary, 11px);
          color: $grayText;
        }
        .active {
          @include button(4.313rem, 1.188rem, $white, 4px);
          color: $primaryColor;
        }
      }
    }
    .category {
      width: 100%;
      border: 1px solid black;
    }
  }
}
</style>
