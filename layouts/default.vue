<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <div></div>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="font-bold">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="bg-blue-600 text-white text-center py-6">
            <p>&copy; Design And Develop By Suman Pandey</p>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #eebc18;
}
</style>
