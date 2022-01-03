<template>
  <div>
    <!-- Medium Display Sidebar -->
    <div class="md:flex md:flex-col p-2 w-60 pt-4 hidden overflow-y-scroll">
      <div class="pt-2 pb-2">
        <Search :data="list" :field="'name'" @filtered-dt="filteredResult" />
      </div>
      <p class="text-2xl font-extrabold">Recipes</p>
      <div class="flex flex-col items-center pt-8">
        <ul class="h-screen">
          <li
            class="break-words hover:text-blue-500 font-semibold p-2"
            v-for="item in filteredList"
            :key="item.name"
          >
            <nuxt-link :to="'/recipes/' + item.link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Small Display Sidebar -->
    <div class="flex w-full md:hidden">
      <div class="flex flex-col w-full align-middle">
        <div class="flex flex-row w-full">
          <p
            class="w-min h-full p-1 pr-2 text-2xl font-extrabold"
            @click="mobile.hovering = !mobile.hovering"
          >
            Recipes
          </p>
        </div>
        <div class="flex">
          <ul
            class="
              absolute
              pt-4
              p-1
              z-30
              overflow-y-scroll
              m-h-32
              bg-blue-300
              rounded-md
              max-h-56
            "
            :class="{ hidden: !mobile.hovering }"
          >
            <li class="break-words hover:text-blue-500 font-semibold">
              <Search
                class="w-1/2 justify-end"
                :data="list"
                :field="'name'"
                @filtered-dt="filteredResult"
              />
            </li>
            <li
              class="
                m-1
                break-words
                hover:text-blue-500
                font-semibold
                border-t-2 border-black
                w-full
                h-6
              "
              v-for="item in filteredList"
              :key="item.name"
            >
              <nuxt-link class="h-full w-full" :to="'/recipes/' + item.link">{{
                item.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>
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
        {
          link: "naan-bread",
          name: "Naan Bread",
          tags: ["bread", "indian", "naan", "curry"],
        },
        {
          link: "chicken-parm",
          name: "Chicken Parmesan",
          tags: ["chicken", "italian", "parmesan"],
        },
        {
          link: "meat-loaf",
          name: "Meat Loaf",
          tags: ["meat", "loaf", "canadian"],
        },
        {
          link: "mashed-potatoes",
          name: "Fluffy Garlic Mashed Potatoes",
          tags: ["garlic", "mashed", "potatoes"],
        },
        {
          link: "lemon-garlic-beans",
          name: "Lemon Garlic Green Beans",
          tags: ["lemon", "garlic", "green beans"],
        },
      ],
      filteredList: [],
    };
  },
  mounted() {
    this.filteredList = this.list;
  },
  methods: {
    filteredResult: function (result) {
      this.filteredList = result;
    },
  },
};
</script>
