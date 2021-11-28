<template>
    <div v-if="visible" class="flex w-full justify-center">
        <div class="flex flex-col p-4">
            <p class="font-bold text-xl md:text-2xl underline text-center">Suggestions</p>
            <ul class="w-full text-center">
                <li v-for="suggestion in completeSuggestions" :key="suggestion.name" class="pt-2 h-5 md:h-10">
                    <font-awesome-icon style="font-size: 20px" class="pr-1" :icon="['fas', 'arrow-right']" /><nuxt-link class="hover:text-blue-500" :to="suggestion.route">{{suggestion.name}}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: true,
        }
    },
    props : {
        suggestions: {
            type: Array,
            required: false
        }
    },
    computed: {
        completeSuggestions: function() {
            this.visible = false;
            let cleanedSuggestion = [];
            if (typeof this.suggestions === 'undefined') {
                return [];
            }
            for (let i = 0; i < this.suggestions.length; i++) {
                if (this.suggestions[i].name && this.suggestions[i].route) {
                    this.visible = true;
                    cleanedSuggestion.push(this.suggestions[i]);
                }
            }
            return cleanedSuggestion;
        }
    }
}
</script>