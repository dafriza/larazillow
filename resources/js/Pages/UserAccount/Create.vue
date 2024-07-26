<template>
    <form @submit.prevent="register">
        <div class="w-1/2 mx-auto">
            <div>
                <label for="name" class="label">Name</label>
                <input type="text" v-model="form.name" id="name" class="input" />
                <div class="text-error" v-if="form.errors.name">
                    {{ form . errors . name }}
                </div>
                <label for="email" class="label">Email</label>
                <input type="text" v-model="form.email" id="email" class="input" />
                <div class="text-error" v-if="form.errors.email">
                    {{ form . errors . email }}
                </div>
            </div>
            <div>
                <label for="password" class="label">Password</label>
                <input type="password" v-model="form.password" id="password" class="input" />
                <div class="text-error" v-if="form.errors.password">
                    {{ form . errors . password }}
                </div>
            </div>
            <div>
                <label for="password_confirmation" class="label">Password Confirmation</label>
                <input type="password" v-model="form.password_confirmation" id="password_confirmation" class="input" />
            </div>
            <div>
                <button type="submit" class="w-full btn-primary">
                    Register
                </button>
            </div>
            <div class="text-center">
                <Link :href="route('login')">Have an account? Login here!</Link>
            </div>
        </div>
    </form>
</template>
<script setup>
    import {
        useForm,
        Link
    } from "@inertiajs/inertia-vue3";
    const form = useForm({
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
    });
    const register = () => form.post(route("user_account.store"));
</script>
