<template>
  <div>
    <!-- Medium Display Sidebar -->
    <div
      class="
        md:flex md:flex-col
        p-2
        w-60
        pt-4
        hidden
        overflow-y-scroll
      "
    >
      <p class="text-2xl font-extrabold">Recipes</p>
      <div class="flex flex-col items-center pt-8">
        <ul class="h-screen">
          <li
            class="break-words hover:text-blue-500 font-semibold p-2"
            v-for="item in list"
            :key="item.name"
          >
            <a :href="'recipes/' + item.link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Small Display Sidebar -->
    <div class="flex w-full md:hidden">
      <div class="flex flex-col w-full align-middle">
        <div class="bg-gray-100">
          <p
            class="w-min h-full p-1 text-2xl font-extrabold"
            @click="mobile.hovering = !mobile.hovering"
          >
            Recipes
          </p>
        </div>
        <ul
          class="pt-4 p-1 overflow-y-scroll m-h-32"
          :class="{ hidden: !mobile.hovering }"
        >
          <li
            class="break-words hover:text-blue-500 font-semibold"
            v-for="item in list"
            :key="item.name"
          >
            <a :href="'recipes/' + item.link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: {
        hovering: false,
      },
      list: [
        {
          link: "red-lentil-curry",
          name: "Red Lentil Curry",
          tags: ["curry", "indian", "lentils"],
        },
      ],
    };
  },
};
</script>
