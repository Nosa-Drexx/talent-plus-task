<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

type DataState = {
  showDropDown: boolean
}
export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      default: 'DropDown Title'
    }
  },
  data: (): DataState => ({
    showDropDown: false
  }),
  methods: {
    handleDropDown(value?: boolean, event?: MouseEvent) {
      if (event) event?.preventDefault()
      const dropDown = this.$refs.dropDown as HTMLDivElement
      const title = this.$refs.title as HTMLDivElement
      if (typeof value !== 'boolean') {
        this.showDropDown = !this.showDropDown
      } else {
        this.showDropDown = value
      }
      if (this.showDropDown) {
        title.className = 'title active'
        dropDown.style.height = '100px'
      } else {
        title.className = 'title'
        dropDown.style.height = '0px'
      }
    }
  }
})
</script>

<template>
  <section
    class="drop-down"
    @mousedown.prevent="(event) => handleDropDown(undefined, event)"
    @focus="() => handleDropDown(true)"
    @blur="() => handleDropDown(false)"
    tabindex="0"
  >
    <div class="title" ref="title">
      <h3>{{ title }}</h3>
      <span v-if="!showDropDown">+</span>
      <span v-else>-</span>
    </div>
    <div class="show" ref="dropDown">
      <slot
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente veniam, sint
        dicta alias recusandae quibusdam voluptas quam aspernatur quo. Reiciendis ipsam eligendi
        exercitationem numquam? Perferendis consectetur reprehenderit voluptatem dolores.</slot
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './colors';
@import './fonts';
@import './mixins';
.drop-down {
  @include font(column nowrap);
  width: 100%;
  padding: 0.76rem 0;
  border-bottom: 1px solid $border;
  gap: 6.08px;
  cursor: pointer;
  .title {
    @include flex(row nowrap, space-between);
    width: 100%;
    color: $secondaryColor;
    h3 {
      @include font(700, 0.875rem, $fontPrimary, 1.181rem);
    }
    span {
      @include font(500, 0.6rem, $fontPrimary, 1.181rem);
    }
  }
  .active {
    color: $primaryColor;
  }
  .show {
    @include font(500, 0.5rem, $fontPrimary, 1rem);
    @include flex(row wrap);
    width: 100%;
    color: $grayText;
    overflow: hidden;
    height: 0px;
    transition: height 0.5s;
  }
}
@media (min-width: 800px) {
  .drop-down {
    padding: 2rem 0;
    gap: 20px;
    .title {
      h3 {
        @include font(700, 1.5rem, $fontPrimary, 2.006rem);
      }
      span {
        @include font(500, 1.5rem, $fontPrimary, 1.181rem);
      }
    }
    .show {
      @include font(500, 1rem, $fontPrimary, 1.625rem);
    }
  }
}
</style>
