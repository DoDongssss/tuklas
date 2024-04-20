<template>
    <section class="flex flex-col min-h-screen w-full">
      <div>
        <HeaderView />
      </div>
      <div class="flex justify-between items-center w-full bg-no-repeat bg-cover px-5 py-20 md:px-10" style="background-image: url('/images/tech.jpg')">
        <div class="py-10">
            <p class="text-red-700 text-lg sm:text-xl md:text-6xl lg:text-6xl">Technical Support</p>
        </div>
      </div>
  
      <div class="flex flex-col sm:flex-row w-full px-5 md:px-10 py-10 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-5">
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/event.png" alt="Events Management" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Events Management</h2>
              <p class="text-sm sm:text-base">A comprehensive approach to planning, organizing, and executing events, such as conferences, weddings, and parties.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/tabulation.png" alt="Tabulation System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Tabulation System</h2>
              <p class="text-sm sm:text-base">A web-based tool for collecting and organizing data, often used for tallying votes or scoring competitions like pageants.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/video.png" alt="Video Editing" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Video Editing</h2>
              <p class="text-sm sm:text-base">The process of manipulating and rearranging video clips to create a cohesive final product, often incorporating effects and transitions.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/photo.png" alt="Photo Editing" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Photo Editing</h2>
              <p class="text-sm sm:text-base">The practice of altering and enhancing images using software tools to improve visual appeal or correct imperfections.</p>
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
  