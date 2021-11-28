<template>
  <div class="flex flex-col md:flex-row h-full">
    <Sidebar />
    <div class="md:pt-10 flex flex-col w-full md:border-l-4">
      <div class="flex w-full justify-start md:justify-end">
        <div class="pl-1 md:pr-4">
          <Home />
        </div>
      </div>
      <div class="flex w-full justify-center h-5 md:h-10">
        <p class="font-bold text-xl md:text-3xl underline text-center">
          {{title}}
        </p>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex w-full md:w-1/2 md:pt-10">
          <Ingredients :ingredients="ingredients" :direction="'down'" />
        </div>
        <div class="flex w-full md:w-1/2 md:pt-10">
          <Steps :steps="steps" :direction="'up'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Ingredients from './Ingredients.vue';
import Steps from './Steps.vue';
import Home from './Home.vue';
import Sidebar from './Sidebar.vue';

export default {
    components: {
        Sidebar,
        Home,
        Ingredients,
        Steps
    },
    props: {
        title: {
          type: String,
          required: true
        },
        ingredients: {
            type: Array,
            required: true
        },
        steps: {
            type: Array,
            required: true
        }
    }
}
</script>