<script lang="ts">
import { defineComponent } from 'vue'

type DataState = {
  email: string
}
export default defineComponent({
  data: (): DataState => ({
    email: ''
  }),
  methods: {
    submitEmail(): void {}
  }
})
</script>

<template>
  <form @submit.prevent="submitEmail">
    <label for="email">
      <input id="email" name="email" type="email" v-model="email" placeholder="NFT123@gmail.com" />
    </label>

    <label for="submit">
      <input id="submit" name="submit" type="submit" />
    </label>
  </form>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';

form {
  width: 100%;
  border: 2px solid $form;
  border-radius: 2px;
  padding: 0;
  margin: 0;
  #email {
    @include font(500, 0.875rem, $fontSecondary, 1.181rem);
    color: $white;
    padding: 0.844rem 1rem;
    border-radius: 2px 0px 0px 2px;
    background: $black;
    width: 65%;
  }
  #submit {
    @include font(500, 0.875rem, $fontSecondary, 1.181rem);
    background: $form;
    width: 35%;
    padding: 0.844rem 0.969rem;
  }
}
</style>
