<template>
  <div class="card w-100 my-2 shadow-2-strong"
    @click="handleClickedProduct"
  >
    <img
      :src="product?.category?.image"
      class="card-img-top"
      style="aspect-ratio: 1 / 1"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">
        {{ product.category?.name }} - {{ product.title }}
      </h5>
      <p class="card-text">${{ product.price }}</p>
      <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto bg-transparent">
        <a href="#!" class="btn btn-primary shadow-0 me-1">Add to cart</a>
        <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover">
          <font-awesome-icon icon="heart" class="fa-lg text-secondary px-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const { product } = defineProps({
  product: Object,
});

const router = useRouter();

const handleClickedProduct = () => {
  router.push({
    name: "product-details",
    params: {
      productId: product.id
    }
  })
}
</script>

<style lang="scss">
.icon-hover:hover {
  border-color: #3b71ca !important;
  background-color: white !important;
  i, svg {
    color: #3b71ca !important;
  }
}

.card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-15px);
  }
}
</style>