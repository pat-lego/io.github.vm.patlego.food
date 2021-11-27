<template>
    <div class="md:rounded-md md:border-2 md:border-indigo-600 md:hover:bg-indigo-300">
        <button @click="home" class="md:p-4">Home</button>
    </div>
</template>
<script>
export default {
   methods: {
       home() {
           this.$router.push('/');
       }
   }
}
</script>
