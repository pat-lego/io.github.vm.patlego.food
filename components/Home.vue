<template>
    <div class="rounded-md border-2 border-indigo-600 hover:bg-indigo-300">
        <button @click="home" class="p-4">Home</button>
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
