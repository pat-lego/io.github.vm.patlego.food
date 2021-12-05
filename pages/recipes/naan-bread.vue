<template>
  <Recipe :recipe="recipe"/>
</template>
<script>
import Recipe from "../../components/Recipe.vue";

export default {
  head() {
    return {
      title: "Naan Bread",
    };
  },
  components: {
    Recipe,
  },
  data() {
    return {
      recipe:{
        title: 'Naan Bread',
        ingredients: [
        {
          name: "Warm water (95 ~ 100 Fahrenheit)",
          amount: 0.5,
          unit: "cup",
        },
        {
          name: "instant yeast",
          amount: 2,
          unit: "teaspoons",
        },
        {
          name: "sugar",
          amount: 1,
          unit: "tablespoon",
        },
        {
          name: "olive oil",
          amount: 3,
          unit: "tablespoon",
        },
        {
          name: "plain yogurt",
          amount: 0.25,
          unit: "cup",
        },
        {
          name: "egg",
          amount: 1,
          unit: undefined,
        },
        {
          name: "sea salt",
          amount: 0.5,
          unit: "tablespoons",
        },
        {
          name: "all purpose flour",
          amount: 2.5,
          unit: "cups",
        },
        {
          name: "melted butter",
          amount: 2,
          unit: "tablespoons",
        },
        {
          name: "garlic",
          amount: 2,
          unit: "tablesppons",
        },
      ],
      steps: [
        {
          name: "Combine warm water, yeast, and sugar in a large bowl; let sit for five minutes or till bubbly. Add olive oil, yogurt, egg, salt and 2 cups of flour. Stir till smooth.",
          number: 1,
        },
        {
          name: "Add enough flour to make a soft dough. Knead a few times on a floured counter until smooth.",
          number: 2,
        },
        {
          name: "Place dough in a greased bowl. Cover and let rise in a warm place until doubled.",
          number: 3,
        },
        {
          name: "Preheat a skillet to medium heat.",
          number: 4,
        },
        {
          name: 'Cut dough into eight pieces. On a floured surface, roll out each piece into a 6" circle.',
          number: 5,
        },
        {
          name: "Add a little oil or non-stick spray to the skillet. Cook each circle for 2-3 minutes or until bubbly and golden brown on the bottom. Flip over and cook for another 2-3 minutes.",
          number: 6,
        },
        {
          name: "Brush the top (the bubbly side) of each naan with melted butter. I added garlic to my butter, but that is optional.",
          number: 7,
        },
      ],
      suggestions: [
        {
          name: 'Red Lentil Curry',
          route: '/recipes/red-lentil-curry'
        }
      ]
      },
    };
  },
};
</script>