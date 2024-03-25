<template>
  <div class="container my-5">
    <header class="mb-4">
      <h3>New products</h3>
    </header>
    <ProductItems :products="products" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import ProductItems from "../../components/products/ProductItems.vue";

const store = useStore();
const products = ref([]);

const findAllProducts = async () => {
  try {
    let params = {
      offset: 10,
      limit: 20,
    };
    const { data, status } = await store.dispatch(
      "products/findAllProducts",
      params
    );
    if ([200, 201].includes(status)) {
      console.log("data", data);
      products.value = data || []
    }
  } catch (error) {
    console.log("error", error);
  }
};

onMounted(() => {
  findAllProducts();
});
</script>
