<template>
  <Recipe :recipe="recipe" />
</template>
<script>
import Recipe from "../../components/Recipe.vue";

export default {
  head() {
    return {
      title: "Chicken Parmesan",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Crispy and cheesy chicken parm that will make you question why you have't done this before",
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
        title: "Chicken Parmesan",
        yields: 2,
        ingredients: [
          {
            name: "Bread Crumbs",
            amount: 2,
            unit: "cups",
          },
          {
            name: "Eggs",
            amount: 2,
          },
          {
            name: "Tomato Sauce",
            amount: 1,
            unit: "cup",
          },
          {
            name: "Gratted Cheddar Cheese",
            amount: 0.5,
            unit: "cup",
          },
          {
            name: "Flour",
            amount: 0.25,
            unit: "cup",
          },
          {
            name: "Boneless Skinless Chicken Breasts",
            amount: 2,
          },
          {
            name: "Vegetable Oil",
            amount: 0.25,
            unit: "cup",
          },
        ],
        steps: [
          {
            name: "Preheat your oven to 400 Fahrenheit",
            number: 1,
          },
          {
            name: "Butterfly one chicken breast at a time. I recommend using a fillet knife in order to do this. <a class='hover:text-blue-500' href='https://www.youtube.com/watch?v=F3ybkJoq6OU' target='_blank'>Here is a link that can help provide some guidance</a>",
            number: 2,
          },
          {
            name: "Once the chicken breasts are butterflied prepare your breading station. Take out 2 large bowls and 1 square dish, pour the flour in one of the two bowls. Crack the eggs into the other bowl and scramble them. Lastly pour the bread crumbs into the sqaure dish",
            number: 3,
          },
          {
            name: "Taking one butterflied chicken breast at a time, cover and dust the chicken breast in flour, then coat it in the egg mixture and then lastly cover completely in the bread crumbs. Do this process for the other chicken breast",
            number: 4,
          },
          {
            name: "Take a large pan and pour the vegetable oil in the pan. Place the pan on medium high heat and wait for the oil to get hot, about 2 to 3 minutes",
            number: 5,
          },
          {
            name: "Once the pan is hot place one chicken parm in the pan and let it fry one side at a time till golden brown (about 2 minutes per side). Do this for both chicken parms",
            number: 6,
          },
          {
            name: "Prepare a baking sheet with parchment paper and place your chicken parms on the pann. Once the chicken parms are placed on the pan put the pan in the oven for 20 minutes or until the parms are fully cooked",
            number: 7,
          },
          {
            name: "Cover the top of both chicken parms with tomato sauce and bake for another 5 minutes to let the sauce warm up",
            number: 8,
          },
          {
            name: "Cover the top of the chicken parms with cheddar cheese and bake for another 5 minutes on broil or until the cheese is golden brown",
            number: 9,
          },
          {
            name: "Remove from the oven and plate with your favorite pasta dish. Optionally you can sprinkle some parsley on your chicken parmesan for some additional color",
            number: 10,
          },
        ],
      },
    };
  },
};
</script>