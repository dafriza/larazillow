<template>
    <form @submit.prevent="update">
        <div class="grid grid-cols-6">
            <div class="col-span-2">
                <label class="label">Beds</label>
                <input v-model="form.beds" class="input" type="text" />
                <div v-if="form.errors.beds" class="text-error">
                    {{ form.errors.beds }}
                </div>
            </div>
            <div class="col-span-2">
                <label class="label">Baths</label>
                <input v-model="form.baths" class="input" type="text" />
                <div v-if="form.errors.baths" class="text-error">
                    {{ form.errors.baths }}
                </div>
            </div>
            <div class="col-span-2">
                <label class="label">Area</label>
                <input v-model="form.area" class="input" type="text" />
                <div v-if="form.errors.area" class="text-error">
                    {{ form.errors.area }}
                </div>
            </div>
            <div class="col-span-4">
                <label class="label">City</label>
                <input v-model="form.city" class="input" type="text" />
                <div v-if="form.errors.city" class="text-error">
                    {{ form.errors.city }}
                </div>
            </div>
            <div class="col-span-2">
                <label class="label">Code</label>
                <input v-model="form.code" class="input" type="text" />
                <div v-if="form.errors.code" class="text-error">
                    {{ form.errors.code }}
                </div>
            </div>
            <div class="col-span-4">
                <label class="label">Street</label>
                <input v-model="form.street" class="input" type="text" />
                <div v-if="form.errors.street" class="text-error">
                    {{ form.errors.street }}
                </div>
            </div>
            <div class="col-span-2">
                <label class="label">Street Nr</label>
                <input v-model="form.street_nr" class="input" type="text" />
                <div v-if="form.errors.street_nr" class="text-error">
                    {{ form.errors.street_nr }}
                </div>
            </div>
            <div class="col-span-6">
                <label class="label">Price</label>
                <input v-model="form.price" class="input" type="text" />
                <div v-if="form.errors.price" class="text-error">
                    {{ form.errors.price }}
                </div>
            </div>
            <div class="col-span-6">
                <button type="submit" class="btn-primary px-5">Store</button>
            </div>
        </div>
    </form>
</template>
<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
const props = defineProps({
    listing: Object,
})
const form = useForm({
    beds: props.listing.beds,
    baths: props.listing.baths,
    area: props.listing.area,
    city: props.listing.area,
    code: props.listing.code,
    street: props.listing.street,
    street_nr: props.listing.street_nr,
    price: props.listing.price,
})
const update = () => form.put(route('listing.update', props.listing.id))
</script>
<style setup>
div * {
    margin: .5rem;
}
</style>
