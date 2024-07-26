<template>
    <form @submit.prevent="filter">
        <div class="flex flex-wrap items-baseline gap-2 mt-4 mb-8">
            <div class="flex items-center flex-nowrap">
                <input type="text" v-model.number="filterForm.priceFrom" class="input-filter-l w-28"
                    placeholder="Price from">
                <input type="text" v-model.number="filterForm.priceTo" class="input-filter-r w-28" placeholder="Price to">
            </div>
            <div class="flex items-center flex-nowrap">
                <select class="input-filter-l w-28" v-model="filterForm.bed">
                    <option :value="null">Beds</option>
                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                    <option>6+</option>
                </select>
                <select class="input-filter-r w-28" v-model="filterForm.bath">
                    <option :value="null">Baths</option>
                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                    <option>6+</option>
                </select>
            </div>
            <div class="flex items-center flex-nowrap">
                <input type="text" v-model.number="filterForm.areaFrom" class="input-filter-l w-28" placeholder="Area from">
                <input type="text" v-model.number="filterForm.areaTo" class="input-filter-r w-28" placeholder="Area to">
            </div>

            <button class="btn-normal" type="submit">Filter</button>
            <button type="reset" @click="clear">Reset</button>
        </div>
    </form>
</template>
<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
const props = defineProps({
    filters: Object,
})
const filterForm = useForm({
    priceFrom : props.filters.priceFrom ?? null,
    priceTo : props.filters.priceTo ?? null,
    bed : props.filters.bed ?? null,
    bath : props.filters.bath ?? null,
    areaFrom: props.filters.areaFrom ?? null,
    areaTo : props.filters.areaTo ?? null,
})
const filter = () =>{
filterForm.get(
    route('listing.index'),
    {
        preserveScroll:true,
        preserveState:true
    },
)
}
const clear = () =>{
    filterForm.priceFrom = null
    filterForm.priceTo = null
    filterForm.bed = null
    filterForm.bath = null
    filterForm.areaFrom = null
    filterForm.areaTo = null
    filter()
}
</script>
