<template>
    <Filters :filters="filters"/>
    <div class="grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-3">
        <Listing v-for="listing in listings.data" :key="listing.id" :listing="listing" />
    </div>
    <Pagination :links="listings.links"/>
</template>
<script setup>
import Filters from '@/Pages/Listing/Index/Components/Filters.vue'
import Listing from '@/Pages/Listing/Index/Components/Listing.vue'
import Pagination from '@/Components/UI/Pagination.vue'
defineProps({
    listings: Object,
    filters: Object,
})
</script>
