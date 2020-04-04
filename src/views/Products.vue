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
      <select id="product-selection" v-model="selectedProduct">
        <option
          v-for="product in products"
          :key="product.id"
          v-bind:value="product"
        >
          {{ product.name }}
        </option>
      </select>
    </div>

    <div v-if="selectedProduct" class="product-detail">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{{ selectedProduct.name }}</td>
          </tr>
          <tr>
            <th>Shop</th>
            <td>{{ selectedProduct.shop }}</td>
          </tr>
          <tr>
            <th>Price per 100g</th>
            <td>{{ selectedProduct.price | toCurrency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      selectedProduct: null
    };
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  computed: mapState(["products", "loading"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-detail {
  margin-top: 2em;

  table {
    margin-left: auto;
    margin-right: auto;

    td,
    th {
      border: solid #e2e2e2 1px;
      padding: 0.5em;
    }
  }
}
</style>
