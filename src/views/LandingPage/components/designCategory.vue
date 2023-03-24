<script lang="ts">
import { defineComponent } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import rating from '../images/rating.svg'
import clock from '../images/clock.svg'
import statusbook from '../images/statusbook.svg'

export default defineComponent({
  setup: () => {
    const categoryList = useCategoryStore()
    return {
      categoryList
    }
  },
  data: () => ({
    rating: rating,
    clock: clock,
    statusbook: statusbook
  }),
  computed: {
    getDesignCategories() {
      return this.categoryList.categories.filter((elem) => elem.category === 'Design')
    }
  }
})
</script>

<template>
  <div class="card-container">
    <div className="card" v-for="category in getDesignCategories" :key="category.id">
      <div class="img-container">
        <img :src="category.lessonImage" alt="lesson" />
        <div class="status">
          <span class="category">{{ category.category }}</span>
          <div class="rating">4.7k<img :src="rating" alt="star" /> (32.7k+)</div>
        </div>
      </div>
      <div class="name">
        <h3>{{ category.name }}</h3>
        <div class="time-lesson">
          <div class="time">
            <img :src="clock" alt="clock" /> <span>{{ category.time }}</span>
          </div>
          <div class="lesson">
            <img :src="statusbook" alt="statusbook" /> <span>{{ category.lesson }}</span>
          </div>
        </div>
        <div class="instructor-price">
          <div class="instructor">
            <img :src="category.instructorImage" alt="instructor" /><span>{{
              category.instructor
            }}</span>
          </div>
          <h3>{{ category.price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.card-container {
  width: 100%;
  padding: 1.651rem 1rem 0;
  @include flex(row wrap, space-between);
  gap: 8px;
  .card {
    width: 48%;
    padding: 0.988rem 0.5rem;
    border-radius: 4px;
    background: $white;
    .img-container {
      @include flex(column nowrap);
      gap: 3.12px;
      img {
        @include img(100%, 117.88px, cover);
      }
      .status {
        @include flex(row nowrap, space-between);
        width: 100%;
        .category {
          @include flex();
          @include font(700, 0.25rem, $fontSecondary, 0.313rem);
          text-align: center;
          padding: 2px 8px;
          color: $primaryColor;
          border-radius: 6.44444px;
          background: $status;
        }
        .rating {
          @include flex();
          @include font(700, 0.25rem, $fontPrimary, 0.338rem);
          color: $grayText;
          img {
            @include img(0.208rem, 0.198rem);
          }
        }
      }
    }
    .name {
      @include flex(column nowrap, center, flex-start);
      padding-top: 0.5rem;
      gap: 4.64px;
      h3 {
        @include font(700, 0.5rem, $fontPrimary, 0.615rem);
        margin: 0;
        padding: 0;
      }
      .time-lesson {
        @include flex(row nowrap, space-between);
        width: 100%;
        div {
          @include flex();
          gap: 4.67px;
          img {
            @include img(0.417rem, 0.417rem);
          }
          span {
            @include font(500, 0.25rem, $fontSecondary, 0.338rem);
          }
        }
      }
      .instructor-price {
        @include flex(row nowrap, space-between);
        width: 100%;
        padding: 16.2px 0;
        .instructor {
          @include flex();
          gap: 3.22px;
          img {
            @include img(1rem, 1rem);
            border-radius: 50%;
          }
          span {
            @include font(700, 0.375rem, $fontSecondary, 0.506rem);
          }
        }
        h3 {
          @include font(600, 0.5rem, $fontPrimary, 0.615rem);
          margin: 0px;
          padding: 0px;
          color: $primaryColor;
        }
      }
    }
  }
}
@media (min-width: 800px) {
  .card-container {
    padding: 4.25rem 1rem 0;
    gap: 24px;
    .card {
      width: calc((100% / 3) - (24px * 2));
      padding: 1rem 1.25rem;
      border-radius: 4px;
      background: $white;
      .img-container {
        gap: 15.33px;
        img {
          @include img(100%, 292.67px, cover);
        }
        .status {
          .category {
            @include font(700, 0.75rem, $fontSecondary, 1.013rem);
            padding: 4px 20px;
            border-radius: 16px;
          }
          .rating {
            @include flex();
            @include font(700, 0.75rem, $fontPrimary, 1rem);
            img {
              @include img(0.833rem, 0.792rem);
            }
          }
        }
      }
      .name {
        @include flex(column nowrap, center, flex-start);
        padding-top: 1.5rem;
        gap: 16px;
        h3 {
          @include font(600, 1.5rem, $fontPrimary, 1.875rem);
        }
        .time-lesson {
          div {
            gap: 10px;
            img {
              @include img(1.25rem, 1.25rem);
            }
            span {
              @include font(500, 1rem, $fontSecondary, 1.375rem);
            }
          }
        }
        .instructor-price {
          padding: 32px 0;
          .instructor {
            gap: 8px;
            img {
              @include img(2.5rem, 2.5rem);
            }
            span {
              @include font(700, 1rem, $fontSecondary, 1.375rem);
            }
          }
          h3 {
            @include font(600, 1.25rem, $fontPrimary, 1.563rem);
          }
        }
      }
    }
  }
}
</style>
