<template>
  <div class="flex flex-col md:flex-row h-full">
    <Sidebar />
    <div class="md:pt-10 flex flex-col w-full md:border-l-4">
      <div class="flex w-full justify-center">
        <p class="font-bold text-xl md:text-3xl underline text-center">
          Red Lentil Curry
        </p>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex w-full md:w-1/2 md:pt-10">
          <Ingredients :ingredients="ingredients" />
        </div>
        <div class="flex w-full md:w-1/2 md:pt-10">
          <Steps :steps="steps" />
        </div>
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
      steps: [
        {
          name: "Heat the coconut oil in a large pot or skillet over medium-high heat. Add the cumin and coriander seeds and toast until they start to brown, about 45 seconds. Add the garlic to the pot and let it brown, about 2 minutes.",
          number: 1,
        },
        {
          name: "Add the can of crushed tomatoes, ginger, turmeric, and sea salt to the pot and cook, stirring the pot a few times, for 5 minutes. Add the lentils and, if using, the cayenne powder, and the water to the pot and bring it to a boil. Reduce the heat to low, cover the pot, and let it simmer for 35-40 minutes, or until the lentils are soft. Stir the pot a few times to prevent the lentils from sticking to the bottom. If the curry starts to look dry, add an extra ½ – 1 cup of water.",
          number: 2,
        },
        {
          name: "Once the lentils are soft and the curry is thick, add the coconut milk and cherry tomatoes and bring the pot back to a simmer. Remove the pot from the heat and stir in the cilantro.",
          number: 3,
        },
      ],
    };
  },
};
</script>