<template>
  <div>
    <div class="md:flex hidden">
      <input v-model="search" type="text" placeholder="Search for recipe" />
    </div>
    <div class="flex md:hidden">
      <input
        v-model="search"
        @keydown="searchFn"
        type="text"
        placeholder="Search for recipe"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
  },
  methods: {
    searchFn: function (newSearch, oldSearch) {
      const array = [];

      if (typeof this.search === "undefined") {
        this.$emit("filtered-dt", this.data);
        return this.data;
      }

      if (this.search.trim() === "") {
        this.$emit("filtered-dt", this.data);
        return this.data;
      }

      for (let dt of this.data) {
        if (
          dt[this.field] &&
          dt[this.field].toLowerCase().includes(this.search.toLowerCase())
        ) {
          array.push(dt);
        }
      }
      this.$emit("filtered-dt", array);
      return array;
    },
  },
  watch: {
    search: function (newSearch, oldSearch) {
      this.searchFn(newSearch, oldSearch)
    },
  },
};
</script>
