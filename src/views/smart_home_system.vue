<template>
    <section class="flex flex-col min-h-screen w-full">
      <div>
        <HeaderView />
      </div>
      <div class="flex justify-between items-center w-full bg-no-repeat bg-cover px-5 py-20 md:px-10" style="background-image: url('/images/iot.jpg')">
        <div class="py-10">
            <p class="text-red-700 text-lg sm:text-xl md:text-6xl lg:text-6xl">Internet of Things (IoT)</p>
        </div>
      </div>
  
      <div class="flex flex-col sm:flex-row w-full px-5 md:px-10 py-10 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-5">
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/home.png" alt="Smart Home System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Smart Home System</h2>
              <p class="text-sm sm:text-base">An interconnected network of devices and appliances that can be remotely controlled, monitored, and automated for convenience and efficiency.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/fire.png" alt="Fire Alarm System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Fire Alarm System</h2>
              <p class="text-sm sm:text-base">A safety device designed to detect smoke, heat, or fire and provide an alert to occupants, helping to prevent loss of life and property.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/burglar.png" alt="Burglar Alarm System" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Burglar Alarm System</h2>
              <p class="text-sm sm:text-base">A security system that uses sensors and alarms to detect unauthorized entry into a property, helping to deter theft and intrusion.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/appliances.png" alt="Automated Appliances" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Automated Appliances</h2>
              <p class="text-sm sm:text-base">Household devices that can operate autonomously or be controlled remotely, often integrated into a smart home system.</p>
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
  