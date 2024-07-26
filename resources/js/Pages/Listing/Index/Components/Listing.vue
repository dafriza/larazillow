<template>
    <Box>
        <div class="m-0 mb-2">
            <Link :href="route('listing.show', listing.id)">
                <div class="flex items-center gap-1">
                    <Price :price="listing.price" class="text-2xl font-bold" />
                    <div class="text-xs text-gray-500">
                        <Price :price="monthlyPayment" />
                    </div>
                </div>
                <ListingSpace :listing="listing" />
                <ListingAddres :listing="listing" />
            </Link>
        </div>
        <div class="m-0">
            <Link :href="route('listing.edit', listing.id)">Edit</Link>
        </div>
        <div>
            <Link
                :href="route('listing.destroy', listing.id)"
                method="DELETE"
                as="button"
                >Delete</Link
            >
        </div>
    </Box>
</template>
<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import ListingAddres from "@/Components/ListingAddress.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import Price from "@/Components/Price.vue";
import Box from "@/Components/UI/Box.vue";
import { useMonthlyPayment } from "@/Composable/useMonthlyPayment";
const props = defineProps({
    listing: Object,
});
const { monthlyPayment } = useMonthlyPayment(props.listing.price, 2.5, 25);
</script>
