<template>
  <div class="flex w-full">
    <!-- Desktop -->
    <div class="hidden md:flex flex-col w-full">
      <div class="flex flex-row w-full justify-center">
        <p class="pb-2 text-2xl w-full text-center">Steps</p>
      </div>
      <div class="flex w-full justify-center">
        <ul class="flex flex-col w-2/3">
          <li
            class="flex flex-row w-full p-4 break-words"
            v-for="step in steps"
            :key="step.name"
          >
            <i class="pr-2">{{ step.number }}</i>
            <p class="font-bold"><span v-html="step.name"></span></p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Mobile -->
    <div
      class="pt-4 md:hidden flex flex-col w-full justify-center items-center"
    >
      <div class="flex flex-row w-full justify-center" @click="collapse">
        <p class="flex w-1/3 pb-2 text-2xl justify-end">Steps</p>
        <div class="w-1/5 p-2">
          <font-awesome-icon :icon="['fas', `arrow-${direction}`]" />
        </div>
      </div>
      <div class="flex w-full justify-center">
        <ul
          class="flex flex-col w-full"
          :class="{ hidden: direction === 'up' }"
        >
          <li
            class="flex flex-row w-full p-4"
            v-for="step in steps"
            :key="step.name"
          >
            <i class="pr-2">{{ step.number }}</i>
            <p class="font-bold"><span v-html="step.name"></span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      required: false,
      default: 'down'
    }
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
