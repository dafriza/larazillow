<template>
    <div class="p-4 border rounded-md shadow-md border-grey-500">
        <div class="font-medium text-gray-500">
            <slot name="header"></slot>
        </div>
        <slot />
    </div>
</template>
