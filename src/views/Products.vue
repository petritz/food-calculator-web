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
            <th>Number</th>
            <td>
              <a
                target="_blank"
                :href="
                  'https://www.billa.at/produkte/' + selectedProduct.item_number
                "
                >{{ selectedProduct.item_number }}</a
              >
            </td>
          </tr>
          <tr>
            <th>Fetched from Shop</th>
            <td>{{ selectedProduct.shop }}</td>
          </tr>
          <tr>
            <th>Price per 100g</th>
            <td>{{ selectedProduct.price | currency }}</td>
          </tr>
          <tr>
            <th>Calories per 100g</th>
            <td>{{ selectedProduct.calories }} kcal</td>
          </tr>
          <tr>
            <th colspan="2" class="center">Nutrition</th>
          </tr>
          <tr>
            <th>Fat</th>
            <td>{{ (selectedProduct.nutrition_fat / 100) | percent }}</td>
          </tr>
          <tr>
            <th><span class="spacer"></span> of which saturated fatty acids</th>
            <td>
              {{
                (selectedProduct.nutrition_saturated_fatty_acids / 100)
                  | percent
              }}
            </td>
          </tr>
          <tr>
            <th>
              <span class="spacer"></span> of which mono unsaturated fatty acids
            </th>
            <td>
              {{
                (selectedProduct.nutrition_mono_unsaturated_fatty_acids / 100)
                  | percent
              }}
            </td>
          </tr>
          <tr>
            <th>
              <span class="spacer"></span> of which poly unsaturated fatty acids
            </th>
            <td>
              {{
                (selectedProduct.nutrition_poly_unsaturated_fatty_acids / 100)
                  | percent
              }}
            </td>
          </tr>
          <tr>
            <th>Carbohydrates</th>
            <td>
              {{ (selectedProduct.nutrition_carbohydrates / 100) | percent }}
            </td>
          </tr>
          <tr>
            <th><span class="spacer"></span> of which sugar</th>
            <td>{{ (selectedProduct.nutrition_sugar / 100) | percent }}</td>
          </tr>
          <tr>
            <th>Protein</th>
            <td>{{ (selectedProduct.nutrition_protein / 100) | percent }}</td>
          </tr>
          <tr>
            <th>Salt</th>
            <td>{{ (selectedProduct.nutrition_salt / 100) | percent }}</td>
          </tr>
          <tr>
            <th>Fiber</th>
            <td>{{ (selectedProduct.nutrition_fiber / 100) | percent }}</td>
          </tr>
          <tr>
            <th>Calcium</th>
            <td>{{ (selectedProduct.nutrition_calcium / 100) | percent }}</td>
          </tr>
          <tr>
            <th>Natrium</th>
            <td>{{ (selectedProduct.nutrition_natrium / 100) | percent }}</td>
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
    border-spacing: 0;
    border-collapse: collapse;

    td,
    th {
      border: solid #e2e2e2 1px;
      padding: 0.5em;
      text-align: left;

      &.center {
        text-align: center;
        font-size: 1.1em;
      }

      span.spacer {
        padding-right: 1em;
      }
    }
  }
}
</style>
