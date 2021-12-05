<template>
  <div class="flex flex-col md:flex-row h-full">
    <Sidebar />
    <div class="md:pt-10 flex flex-col w-full md:border-l-4">
      <div class="flex w-full justify-start md:justify-end">
        <div class="pl-1 md:pr-4">
          <Home />
        </div>
      </div>
      <div class="flex flex-col w-full justify-center h-5 md:h-10">
        <p class="font-bold text-xl md:text-3xl underline text-center">
          {{recipe['title']}}
        </p>
        <p v-if="recipe['author']" class="hidden md:inline text-sm md:text-md text-center">
          Author: {{recipe['author']}}
        </p>
        <p v-if="recipe['published']" class="hidden md:inline w-full text-sm md:text-md text-center">
          Published: {{recipe['published']}}
        </p>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex w-full md:w-1/2 md:pt-10">
          <Ingredients :ingredients="recipe['ingredients']" :direction="'down'" />
        </div>
        <div class="flex w-full md:w-1/2 md:pt-10">
          <Steps :steps="recipe['steps']" :direction="'up'" />
        </div>
      </div>
      <div class="flex w-full">
        <Suggestions :suggestions="recipe['suggestions']" />
      </div>
    </div>
  </div>
</template>
<script>
import Ingredients from './Ingredients.vue';
import Steps from './Steps.vue';
import Home from './Home.vue';
import Sidebar from './Sidebar.vue';
import Suggestions from './Suggestions.vue'

export default {
    components: {
        Sidebar,
        Home,
        Ingredients,
        Steps,
        Suggestions,
    },
    props: {
        recipe: {
          type: Object,
          required: true
        },
    }
}
</script>