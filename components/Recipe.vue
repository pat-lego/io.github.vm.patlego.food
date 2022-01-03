<template>
  <div class="flex flex-col md:flex-row h-full">
    <Sidebar />
    <div class="md:pt-10 flex flex-col w-full md:border-l-4">
      <div class="flex w-full justify-start md:justify-end">
        <div class="pl-1 md:pr-4">
          <Home />
        </div>
      </div>
      <div class="flex flex-col w-full justify-center h-10">
        <h1 class="font-bold md:text-3xl underline text-center">
          {{recipe['title']}}
        </h1>
        <h4 v-if="recipe['author']" class="hidden md:inline text-sm md:text-md text-center">
          Author: {{recipe['author']}}
        </h4>
        <h4 v-if="recipe['published']" class="hidden md:inline w-full text-sm md:text-md text-center">
          Published: {{recipe['published']}}
        </h4>
        <h4 v-if="recipe['serves']" class="hidden md:inline w-full text-sm md:text-md text-center">
          Serves: {{recipe['serves']}} {{servesUnit()}}
        </h4>
         <h4 class="flex w-full text-sm md:text-md justify-center">
           <twitter-follow class="p-1" />
           <instagram-follow class="p-1 z-10"/>
        </h4>
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
import TwitterFollow from './TwitterFollow.vue';

export default {
    components: {
        Sidebar,
        Home,
        Ingredients,
        Steps,
        Suggestions,
        TwitterFollow,
    },
    props: {
        recipe: {
          type: Object,
          required: true
        },
    },
    methods: {
      servesUnit() {
        if (this.recipe['serves']) {
          if (this.recipe['serves'] > 1) {
            return 'people'
          }
          return 'person'
        }
        return undefined
      }
    }
}
</script>