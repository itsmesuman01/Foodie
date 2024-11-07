<template>
  <section class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto text-center px-4">
      <h2 class="text-4xl font-bold text-blue-600">Contact Us</h2>
      <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Have questions or need assistance? Our customer support team is here to help you with any inquiries.
        Fill out the form below or reach out to us directly via phone or email.
      </p>
      <div class="mt-12 space-y-8">
        <form action="#" method="POST" class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-left text-gray-700 font-semibold">Full Name</label>
              <input type="text" id="name" name="name"
                class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required />
            </div>
            <div>
              <label for="email" class="block text-left text-gray-700 font-semibold">Email Address</label>
              <input type="email" id="email" name="email"
                class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required />
            </div>
          </div>
          <div class="mt-6">
            <label for="message" class="block text-left text-gray-700 font-semibold">Your Message</label>
            <textarea id="message" name="message" rows="4"
              class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required></textarea>
          </div>
          <div class="mt-6">
            <button type="submit"
              class="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div class="mt-12 space-y-6 text-center">
        <h3 class="text-2xl font-semibold text-blue-600">Reach Out Directly</h3>
        <p class="text-lg text-gray-600">If you prefer, you can also contact us through the following methods:</p>

        <div class="space-y-2">
          <p class="text-lg text-gray-600"><strong>Email:</strong> support@foodie.com</p>
          <p class="text-lg text-gray-600"><strong>Phone:</strong> +977 1234567890</p>
        </div>

        <div class="mt-6">
          <p class="text-lg text-gray-600">Our customer service team is available Monday to Friday, 9 AM to 6 PM (EST).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>