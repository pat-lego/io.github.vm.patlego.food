<template>
  <Recipe :recipe="recipe" />
</template>
<script>
import Recipe from "../../components/Recipe.vue";

export default {
  head() {
    return {
      title: "Simple Meat Loaf",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "An easy to cook dinner that can serve a whole family",
        },
      ],
      script: [
        {
          json: {
            "@context": "http://schema.org",
            "@type": "Recipe",
            cookTime: "PT1.5H",
            name: "Simple Meat Loaf",
            author: {
              "@type": "Person",
              name: "Patrique Legault",
            },
            datePublished: "2022-01-03",
            keywords:
              "cooking, home food, recipes, delicious, home meals, Patrique, Legault, meat, loaf, harty, meat loaf",
          },
          type: "application/ld+json",
        },
      ],
    };
  },
  components: {
    Recipe,
  },
  data() {
    return {
      recipe: {
        title: "Meat Loaf",
        author: "Patrique Legault",
        published: "January 3rd 2022",
        ingredients: [
          {
            name: "Onion",
            amount: 1,
            unit: undefined,
          },
          {
            name: "Garlic",
            amount: 3,
            unit: "cloves",
          },
          {
            name: "Ground Beef",
            amount: 1.5,
            unit: "lbs",
          },
          {
            name: "Egg",
            amount: 1,
            unit: undefined,
          },
          {
            name: "Brown Sugar",
            amount: 2,
            unit: "tablespoons",
          },
          {
            name: "Dijon Mustard",
            amount: 2,
            unit: "tablespoons",
          },
          {
            name: "Bread Crumbs",
            amount: 0.75,
            unit: "cups",
          },
          {
            name: "Milk",
            amount: 0.75,
            unit: "cups",
          },
          {
            name: "sea salt",
            amount: 2,
            unit: "teaspoons",
          },
          {
            name: "pepper",
            amount: 2,
            unit: "teaspoons",
          },
          {
            name: "cayenne powder",
            amount: 1,
            unit: "teaspoon",
            optional: true,
          }
        ],
        steps: [
          {
            name: "Preheat the over to 350 degrees",
            number: 1
          },
          {
            name: "Chop the onion into small cubes, and mince the garlic",
            number: 2
          },
          {
            name: "Mix the ground beef, bread crumbs, milk, eggs, onion and garlic, salt, pepper and cayenne until fully incorporated",
            number: 3
          },
          {
            name: "Place the mix in a oven safe rectangular cockware",
            number: 4
          },
          {
            name: "Mix the brown sugar, keytchup and dijon mustard in a bowl and cover the meatloaf",
            number: 5
          },
          {
            name: "Place the meatloaf in the oven for 1 hour and let cool for 10 minutes",
            number: 6
          }
        ],
        suggestions: [
        ],
      },
    };
  },
};
</script>