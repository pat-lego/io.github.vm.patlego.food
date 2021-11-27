<template>
  <div class="flex w-full">
    <!-- Desktop -->
    <div class="hidden md:flex flex-col w-full">
      <div class="flex flex-row w-full justify-center">
        <p class="pb-2 text-2xl w-full text-center">Ingredients</p>
      </div>
      <ul class="flex flex-col w-full justify-center">
        <li class="flex flex-col items-center justify-start w-full p-2" v-for="ingredient in formatIngredients" :key="ingredient.name">
          <p class="font-bold">{{ ingredient.name }}</p>
          <p>
            <span class="italic">Amount:</span> {{ ingredient.amount }}
            {{ ingredient.unit }}
          </p>
          <p class="italic bold" v-if="ingredient.optional">
            Optional
          </p>
        </li>
      </ul>
    </div>
    <!-- Mobile -->
    <div class="pt-4 md:hidden flex flex-col w-full justify-center items-center">
      <div class="flex flex-row w-full justify-center" @click="collapse">
        <p class="flex w-1/2 justify-end pb-2 text-2xl text-center">Ingredients</p>
        <div class="w-1/5 p-2">
          <font-awesome-icon :icon="['fas', `arrow-${direction}`]" />
        </div>
      </div>
      <ul class="flex flex-col w-full justify-center" :class="{ hidden: direction === 'up' }">
        <li
          class="flex flex-col items-center justify-start w-full"
          v-for="ingredient in formatIngredients"
          :key="ingredient.name"
        >
          <p class="font-bold">{{ ingredient.name }}</p>
          <p>
            <span class="italic">Amount:</span> {{ ingredient.amount }}
            {{ ingredient.unit }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      direction: "up",
    };
  },
  computed: {
    formatIngredients: function () {
      for (let i = 0; i < this.ingredients.length; i++) {
        this.ingredients[i].name =
          this.ingredients[i].name.charAt(0).toUpperCase() +
          this.ingredients[i].name.slice(1).toLowerCase();
      }
      return this.ingredients;
    },
  },
  methods: {
    collapse: function () {
      if (this.direction === "up") {
        this.direction = "down";
      } else {
        this.direction = "up";
      }
    },
  },
};
</script>
