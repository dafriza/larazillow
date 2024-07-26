<template>
    <div class="flex justify-center">
        <Link v-for="(link, index) in links" v-bind:key="index" :class="{ 'text-gray-300 bg-indigo-500': link.active }"
            :href="link.url" class="px-4 py-2 rounded-md" v-html="link.label" />
    </div>
</template>
<script setup>
import { Link } from '@inertiajs/inertia-vue3';
defineProps({ links: Array })
</script>
