<template>
    <form @submit.prevent="create">
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
const form = useForm({
    beds: 0,
    baths: 0,
    area: null,
    city: null,
    code: 0,
    street: null,
    street_nr: null,
    price: 0,
})
const create = () => form.post(route('listing.store'))
</script>
<style setup>
div * {
    margin: .5rem;
}
</style>
