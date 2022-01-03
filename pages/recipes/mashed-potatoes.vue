<template>
  <Recipe :recipe="recipe" />
</template>
<script>
import Recipe from "../../components/Recipe.vue";

export default {
  head() {
    return {
      title: "Garlic Cloud Mashed Potatoes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Super fluffly garlic mashed potatoes that pairs well with any meat",
        },
      ],
      script: [
        {
          json: {
            "@context": "http://schema.org",
            "@type": "Recipe",
            cookTime: "PT1.5H",
            name: "Fluffly Garlic Mashed Potatoes",
            author: {
              "@type": "Person",
              name: "Patrique Legault",
            },
            datePublished: "2022-01-03",
            keywords:
              "cooking, home food, recipes, delicious, home meals, Patrique, Legault, fluffy, garlic, mashed, potatoes",
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
        title: "Fluffy Garlic Mashed Potatoes",
        author: "Patrique Legault",
        published: "January 3rd 2022",
        serves: 2,
        ingredients: [
          {
            name: "Garlic",
            amount: 5,
            unit: "cloves",
          },
          {
            name: "Butter",
            amount: 2,
            unit: "tablespoons"
          },
          {
            name: "Potatoes",
            amount: 4,
            unit: undefined
          },
          {
            name: "Salt",
            amount: 2,
            unit: "teaspoons"
          },
          {
            name: "Pepper",
            amount: 2,
            unit: "teaspoons"
          },
          {
            name: "Cream",
            amount: 0.25,
            unit: "cups"
          }
        ],
        steps: [
          {
            name: "Peel and cube the potatoes, once done then fill a pot with salted water and place on the stove top. Wait for the water to boil",
            number: 1
          },
          {
            name: "Once the water is boiling place the potatoes in the boiling water and make sure that they are fully submerged, let them boil for 8 minutes",
            number: 2
          },
          {
            name: "Once the potatoes can be broken with a fork, then drain them and place in a large bowl",
            number: 3
          },
          {
            name: "Mix in the butter, cream, garlic, salt and pepper in the bowl. Then using an immersion blender, blend the butter, cream and potatoes until soft",
            number: 4
          },
          {
            name: "Taste the potatoes if they require more salt, pepper, butter or cream then add and blend until the desired taste and consistency is reached",
            number: 5
          },
        ],
        suggestions: [
          {
            name: "Meat Loaf",
            route: "/recipes/meat-loaf",
          },
        ],
      },
    };
  },
};
</script>