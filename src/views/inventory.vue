<template>
  <section class="flex flex-col min-h-screen w-full">
    <div>
      <HeaderView />
    </div>
    <div class="flex justify-between items-center w-full bg-no-repeat bg-cover px-5 py-20 md:px-10" style="background-image: url('/images/404.jpg')">
      <div class="py-10">
          <p class="text-red-700 text-lg sm:text-xl md:text-6xl lg:text-6xl">Business Development</p>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row w-full px-5 md:px-10 py-10 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-5">

      <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div class="card w-full bg-base-100 shadow-xl p-4">
          <figure>
            <img src="/images/pos.png" alt="Inventory & POS System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
          </figure>
          <div class="card-body flex flex-col items-center text-center">
            <h2 class="card-title text-lg sm:text-xl">Inventory & POS System</h2>
            <p class="text-sm sm:text-base">A software solution that tracks and manages inventory levels and facilitates point-of-sale transactions.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div class="card w-full bg-base-100 shadow-xl p-4">
          <figure>
            <img src="/images/doc.png" alt="Telemedicine System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
          </figure>
          <div class="card-body flex flex-col items-center text-center">
            <h2 class="card-title text-lg sm:text-xl">Telemedicine System</h2>
            <p class="text-sm sm:text-base">A platform that enables remote medical consultations and treatment though the use of internet.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div class="card w-full bg-base-100 shadow-xl p-4">
          <figure>
            <img src="/images/booking.png" alt="Booking System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
          </figure>
          <div class="card-body flex flex-col items-center text-center">
            <h2 class="card-title text-lg sm:text-xl">Booking System</h2>
            <p class="text-sm sm:text-base">A software application that allows users to reserve and confirm appointments or services online.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div class="card w-full bg-base-100 shadow-xl p-4">
          <figure>
            <img src="/images/web.png" alt="Landing Page" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
          </figure>
          <div class="card-body flex flex-col items-center text-center">
            <h2 class="card-title text-lg sm:text-xl">Landing Page</h2>
            <p class="text-sm sm:text-base">A web page designed specifically to capture visitor's attention and prompt them to take specific actions.</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import HeaderView from '@/components/Header.vue';

export default {
  components: {
    HeaderView
  },
};
</script>

<style scoped>
.card-container {
  flex: 1;
  width: 0;
}

.card img {
  transition: transform 0.3s;
}

.card:hover img {
  transform: scale(1.05);
}
</style>
