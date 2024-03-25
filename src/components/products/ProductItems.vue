<template>
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-6 d-flex"
      v-for="(product, key) in props.products"
    >
      <ProductCard :product="product" />
    </div>
  </div>
</template>
<script setup>
import {defineProps} from "vue";
import ProductCard from './ProductCard.vue';

const props = defineProps({
  products: Array
})
</script>