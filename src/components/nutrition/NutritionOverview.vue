<script lang="ts">
import { nutritionStore } from "../../store/store";
import SingleItem from "./SingleItem.vue";

export default {
  data() {
    return {
      nutritionStore,
    };
  },
  props: [],
  components: {
    SingleItem,
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <!-- <div v-for="item in items" :key="item.id">{{ item.name }}</div> -->
  <div class="row justify-content-evenly text-center mt-5">
    <!-- To loop through data with a component the loop has to be integrated in the component while the items within the loop have to be integrated as props in the respective component - v-bind: is identical to : -->
    <SingleItem
      v-for="item in nutritionStore.itemsData"
      :key="item.id"
      v-bind:product="item"
      data-aos="fade-up"
    />
  </div>

  <!-- 
  <div>
    Derzeit kann einem bestimmten Food-Item im Nachhinein nicht anerkannt
    werden, wie viel Nährwerte diesem Item zuzuweisen sind. Um eine solche Logik
    zu implementieren, bräuchte man einen state mit Array, das jedes Food-Item
    auflistet und jeweilig spezifisch/individuell die dazugehörigen Werte
    zuweist
    <h3>Es sollte von Kommazahlen abgewichen werden.</h3>
    <h3>Card-Design erstellen (background colors)</h3>
  </div> -->
</template>
