<template>
    <form @submit.prevent="login">
        <div class="w-1/2 mx-auto">
            <div>
                <label for="email" class="label">Email</label>
                <input
                    type="text"
                    v-model="form.email"
                    id="email"
                    class="input"
                />
                <div class="text-error" v-if="form.errors.email">
                    {{ form.errors.email }}
                </div>
            </div>
            <div>
                <label for="password" class="label">Password</label>
                <input
                    type="password"
                    v-model="form.password"
                    id="password"
                    class="input"
                />
                <div class="text-error" v-if="form.errors.password">
                    {{ form.errors.password }}
                </div>
            </div>
            <div>
                <button type="submit" class="w-full btn-primary">Login</button>
            </div>
            <div class="text-center">
                <Link :href="route('user_account.create')">Don't have an account? Click here!</Link>
            </div>
        </div>
    </form>
</template>
<script setup>
import { useForm, Link} from "@inertiajs/inertia-vue3";
const form = useForm({
    email: null,
    password: null,
});
const login = () => form.post(route("login.store"));
</script>
