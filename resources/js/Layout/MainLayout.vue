<template>
    <header class="w-full bg-white border-b border-gray-200">
        <div class="container mx-auto">
            <nav class="flex items-center justify-between p-4">
                <div class="text-lg font-medium">
                    <Link :href="route('listing.index')">Listing Page</Link
                    >&nbsp;
                </div>
                <div class="text-xl font-bold text-center text-indigo-600">
                    LaraZillow
                </div>
                <div v-if="user" class="flex items-center">
                    <Link :href="route('realtor.listing.index')" class="text-sm text-gray-500">
                        {{ user.name }}
                    </Link>
                    <div class="btn-primary">
                        <Link :href="route('listing.create')">+ New List</Link>
                    </div>
                    <div class="text-gray-500">
                        <Link
                            :href="route('logout')"
                            method="delete"
                            as="button"
                            >Logout</Link
                        >
                    </div>
                </div>
                <div v-else class="flex-items-center">
                    <Link :href="route('login')" class="px-5 btn btn-primary"
                        >Sign in</Link
                    >
                    <Link
                        :href="route('user_account.create')"
                        class="px-5 btn btn-primary"
                        >Register</Link
                    >
                </div>
            </nav>
        </div>
    </header>
    <main class="container w-full p-4 mx-auto">
        <div
            v-if="flashSuccessMessage"
            class="p-4 mb-4 text-white bg-green-500 border-green-200 rounded-md shadow-md text-medium"
        >
            {{ flashSuccessMessage }}
        </div>
        <slot>Default</slot>
    </main>
</template>
<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";
const page = usePage();
const flashSuccessMessage = computed(() => page.props.value.flash.success);
const user = computed(() => page.props.value.user);
console.log(`user => ${JSON.stringify(page.props.value.user)}`);
</script>
