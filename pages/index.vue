<template>
  <div class="flex flex-col md:flex-row h-full">
    <Sidebar />
    <div class="flex flex-col w-full md:border-l-4">
      <p
        class="
          flex
          w-full
          font-extrabold
          justify-center
          md:text-3xl
          text-xl
          p-2
          md:p-8
          uppercase
        "
      >
        Welcome to my recipe book
      </p>
      <div class="flex md:flex-row flex-col">
        <div class="w-1/2 flex flex-col justify-center items-center w-full">
          <img
            class="
              md:h-110
              object-contain
              md:object-scale-down
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-105
            "
            :src="require(`~/assets/index/pat_kitchen.jpg`)"
          />
          <p class="text-2xl">This is me (Pat)</p>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center w-full">
          <img
            class="
              md:h-110
              object-contain
              md:object-scale-down
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-105
            "
            :src="require(`~/assets/index/pepper_assistant.jpg`)"
          />
          <p class="text-2xl">This is my assistant</p>
        </div>
      </div>
      <div class="flex w-full justify-center p-2 md:p-8">
        <p class="text-2xl uppercase">Together we build this....</p>
      </div>
      <div class="flex flex-col w-full h-auto">
        <div
          class="flex flex-row w-full justify-center p-1 md:p-2"
          v-for="pic in food"
          :key="pic.row.name"
        >
          <img
            v-for="name in pic.row"
            :key="name"
            class="w-1/3 object-contain md:object-scale-down pl-1 pr-1"
            :src="require(`~/assets/index/food/${name}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "PatLego Recipes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The digital recipe book of Patrique Legault, find healthy and easy to make recipes, from Italian to Indian cuisine there is something for everyone.",
        },
      ],
      script: [
        {
          json: {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "PatLego Recipes",
            author: {
              "@type": "Person",
              name: "Patrique Legault",
            },
            image: `https://food.pat-lego.com${require("~/assets/index/food/20210824_193539.jpg")}`,
            thumbnail: `https://food.pat-lego.com${require("~/assets/index/food/20210824_193539.jpg")}`,
            keywords: "cooking, home food, recipes, delicious, home meals, Patrique, Legault, simple",
          },
          type: "application/ld+json",
        },
      ],
    };
  },
  data() {
    return {
      food: [
        {
          row: [
            "20200621_184505.jpg",
            "20200731_200116.jpg",
            "20200927_194448.jpg",
          ],
        },
        {
          row: [
            "20201213_175242.jpg",
            "20201225_183903.jpg",
            "20210123_105527.jpg",
          ],
        },
        {
          row: [
            "20210330_190042.jpg",
            "20210511_182730.jpg",
            "20210722_200052.jpg",
          ],
        },
        {
          row: [
            "20210815_190343.jpg",
            "20210824_193539.jpg",
            "20211023_183442.jpg",
          ],
        },
        {
          row: ["20211024_172139.jpg"],
        },
      ],
    };
  },
};
</script>
<style scoped>
p {
  font-family: "Oswald", sans-serif;
}
</style>
