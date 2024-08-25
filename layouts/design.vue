<template>
<div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Design Layout</NuxtLink>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/" class="font-bold">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/design">Design</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/design">Design</NuxtLink>
            </li>
        </ul>
    </footer>
</div>
</template>

<style scoped>
.router-link-exact-active {
    color: #eebc18;
}
</style>
