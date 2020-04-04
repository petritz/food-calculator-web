<template>
  <div class="products">
    <h1>Products in the database</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Products",
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  computed: mapState(["products"])
};
</script>
