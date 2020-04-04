<template>
  <div class="products">
    <h1>Products in the database</h1>

    <div v-if="loading" class="loading">
      <span>Loading.</span>
    </div>

    <div v-if="products" class="product-selection-box">
      <label for="product-selection">
        Choose
      </label>
      <select id="product-selection">
        <option
          v-for="product in products"
          :key="product.id"
          :value="product.id"
        >
          {{ product.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Products",
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  computed: mapState(["products", "loading"])
};
</script>
