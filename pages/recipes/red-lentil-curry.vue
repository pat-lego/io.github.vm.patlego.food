<template>
  <div class="flex flex-col md:flex-row h-full">
    <Sidebar />
    <div class="pt-10 flex flex-col w-full">
      <div class="flex w-full justify-center">
        <p class="font-bold text-xl md:text-3xl underline text-center">Red Lentil Curry</p>
      </div>
      <div class="flex w-full md:w-1/2 justify-center">
        <Ingredients :ingredients="ingredients" />
      </div>
    </div>
  </div>
</template>
<script>
import Ingredients from "../../components/Ingredients.vue";
export default {
  components: { Ingredients },
  head() {
    return {
      title: "Red Lentil Curry",
    };
  },
  data() {
    return {
      ingredients: [
        {
          name: "Coconut oil",
          amount: 1,
          unit: "tablespoon",
        },
        {
          name: "Cumin seeds",
          amount: 1,
          unit: "tablespoon",
        },
        {
          name: "Coriander seeds",
          amount: 11,
          unit: "tablespoon",
        },
        {
          name: "Garlic",
          amount: 12,
          unit: "cloves",
        },
        {
          name: "crushed tomatoes",
          amount: 28,
          unit: "ounces",
        },
        {
          name: "chooped ginger",
          amount: 2,
          unit: "tablespoons",
        },
        {
          name: "turmeric",
          amount: 1,
          unit: "tablespoon",
        },
        {
          name: "sea salt",
          amount: 2,
          unit: "teaspoons",
        },
        {
          name: "Dried brown lentils",
          amount: 1,
          unit: "cup",
        },
        {
          name: "cayenne powder",
          amount: 1,
          unit: "teaspoon",
          optional: true,
        },
        {
          name: "water",
          amount: 3,
          unit: "cups",
        },
        {
          name: "coconut milk",
          amount: 15,
          unit: "ounces",
        },
        {
          name: "cherry tomatoes",
          amount: 15,
          unit: undefined,
        },
        {
          name: "cilantro",
          amount: 1,
          unit: "cup",
        },
      ],
    };
  },
};
</script>