<template>
    <input v-model="search" @keydown="filter" type="text" placeholder="Search for recipe">
</template>
<script>

export default {
    data() {
        return {
            search: ''
        }
    },
    props: {
        data: {
            type: Array,
            required: true
        },
        field: {
            type: String,
            required: true
        }
    },
    methods: {
        filter: function() {
            const array = []
            
            if (typeof this.search  === 'undefined') {
                return this.data
            }

            if (this.search.trim() === '') {
                return this.data
            }

            for (let dt of this.data) {
                if (dt[this.field] && dt[this.field].toLowerCase().includes(this.search.toLowerCase())) {
                    array.push(dt)
                }
            }
            this.$emit('filtered-dt', array)
        }
    }
}
</script>
