import { createStore } from "vuex";

import products from "./products";

const Store = createStore({
  modules: {
    products,
  },
});

export default Store;
