<template>
    <h1 class="text-2xl font-medium">Your Listings</h1>
    <section>
        Filters
    </section>
    <section class="grid grid-cols-2 gap-2">
        <Box v-for="listing in listings" :key="listing.id">
            <div class="flex items-center justify-between">
                <div class="flex flex-col">
                    <div>
                        <Price :price="listing.price" class="text-2xl font-medium" />
                        <ListingSpace :listing="listing" />
                    </div>
                    <div>
                        <ListingAddress :listing="listing" class="m-0 text-gray-500 text-md" />
                    </div>
                </div>
                <div class="flex items-center">
                    <Link class="m-0 btn-outline">Preview</Link>
                    <Link class="m-0 btn-outline">Edit</Link>
                    <Link class="m-0 btn-outline">Delete</Link>
                </div>
            </div>
        </Box>
    </section>
</template>
<script setup>
    import ListingAddress from '@/Components/ListingAddress.vue';
    import ListingSpace from '@/Components/ListingSpace.vue';
    import Price from '@/Components/Price.vue';
    import Box from '@/Components/UI/Box.vue';
import { Link } from '@inertiajs/inertia-vue3';
    defineProps({
        listings: Array
    })
</script>
