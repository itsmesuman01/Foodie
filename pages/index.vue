<template>
  <div>
    <section class="bg-yellow-400 text-center py-20">
      <h2 class="text-4xl font-bold text-white">Delicious Food Delivered to Your Doorstep</h2>
      <p class="text-xl text-white mt-4">Order your favorite meals from local restaurants in just a few clicks!</p>
      <button class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Order Now</button>
    </section>
    <section id="features" class="py-20 bg-gray-100">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold">Our Features</h2>
        <p class="text-lg text-gray-600 mt-4">Why choose Foodie for your food delivery needs?</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold">Fast Delivery</h3>
            <p class="text-gray-600 mt-4">Get your food delivered in under 30 minutes, hot and fresh!</p>
            <div class="flex justify-center items-center"><img
                class="w-[250px] h-[250px] object-cover rounded-[10px] mt-5" :src="food.first" alt="first.jpeg"></div>
          </div>
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold">Wide Selection</h3>
            <p class="text-gray-600 mt-4">Choose from thousands of local restaurants and cuisines.</p>
            <div class="flex justify-center items-center"><img
                class="w-[250px] h-[250px] object-cover rounded-[10px] mt-5" :src="food.second" alt="second.jpeg"></div>
          </div>
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold">Easy Ordering</h3>
            <p class="text-gray-600 mt-4">Order with just a few clicks on our user-friendly app.</p>
            <div class="flex justify-center items-center"><img
                class="w-[250px] h-[250px] object-cover rounded-[10px] mt-5" :src="food.third" alt="third.jpeg"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" class="py-20 bg-gray-100">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold">Our Dishes</h2>
        <p class="text-lg text-gray-600 mt-4">We have variety of foods available. Fast order and get your dish.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold">Momo</h3>
            <p class="text-gray-600 mt-4">Thakali Momos are the best in the World where people are ready to buy
              everytime.</p>
            <div class="flex justify-center items-center"><img
                class="w-[250px] h-[250px] object-cover rounded-[10px] mt-5" :src="food.first" alt="first.jpeg"></div>
          </div>
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold">Chowmin</h3>
            <p class="text-gray-600 mt-4">We have chowmin that are delicious. Once you taste we will never leave our
              dish.</p>
            <div class="flex justify-center items-center"><img
                class="w-[250px] h-[250px] object-cover rounded-[10px] mt-5" :src="food.second" alt="second.jpeg"></div>
          </div>
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold">Mix Food</h3>
            <p class="text-gray-600 mt-4">We have other variety types of dish available too.</p>
            <div class="flex justify-center items-center"><img
                class="w-[250px] h-[250px] object-cover rounded-[10px] mt-5" :src="food.third" alt="third.jpeg"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="py-20">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold">About Us</h2>
        <p class="text-lg text-gray-600 mt-4 mb-5">We are a passionate team dedicated to making food delivery easy and
          fast. Our goal is to provide customers with the best food options from their favorite local restaurants.</p>
        <NuxtLink to="/about" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Visit
        </NuxtLink>
      </div>
    </section>
    <section id="contact" class="py-20 bg-gray-200">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold">Contact Us</h2>
        <p class="text-lg text-gray-600 mt-4 mb-5">Have questions? Feel free to reach out to us!</p>
        <NuxtLink to="/contact" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Get
          in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>
<script>
import { food } from '~/assets/images/images.js';
export default {
  data() {
    return {
      food
    };
  }
};
</script>