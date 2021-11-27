<template>
  <div class="flex">
    <!-- Desktop -->
    <div class="p-4 hidden md:flex flex-col w-full">
      <p class="pb-2 text-xl md:text-2xl">Ingredients</p>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient.name">
          <p class="font-bold">{{ formatIngredients(ingredient) }}</p>
          <p>
            <span class="italic">Amount:</span> {{ ingredient.amount }}
            {{ ingredient.unit }}
          </p>
        </li>
      </ul>
    </div>
    <!-- Mobile -->
    <div class="p-4 md:hidden flex flex-col w-full items-center">
      <div class="flex flex-row w-full h-10" @click="collapse">
        <p class="pb-2 text-2xl">Ingredients</p>
        <div class="p-2">
          <font-awesome-icon :icon="['fas', `arrow-${direction}`]" />
        </div>
      </div>
      <ul :class="{hidden : direction === 'up'}">
        <li v-for="ingredient in ingredients" :key="ingredient.name">
          <p class="font-bold">{{ formatIngredients(ingredient) }}</p>
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
        direction: 'up'
    };
  },
  methods: {
    collapse: function() {
        if (this.direction === 'up') {
            this.direction = 'down'
        } else {
            this.direction = 'up';
        }

    },
    formatIngredients: function (ingredient) {
      if (ingredient) {
        return (
          ingredient.name.charAt(0).toUpperCase() +
          ingredient.name.slice(1).toLowerCase()
        );
      }
    },
  },
};
</script>
