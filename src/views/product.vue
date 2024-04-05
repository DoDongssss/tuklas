<template>
  <section class="flex flex-col min-h-screen w-full">
    <div>
      <HeaderView />
    </div>
    <div class="flex justify-between items-center w-full bg-blue-900 px-5 py-3 md:px-10">
      <div class="flex items-center">
        <p class="text-white text-4xl md:text-6xl">Services</p>
      </div>
      <div>
        <img src="/images/services.png" alt="Services Image" class="w-full md:w-[400px]">
      </div>
    </div>

    <div class="flex flex-col items-center w-full px-5 md:px-10 py-5">
      <h1 class="text-3xl md:text-5xl italic text-center">
        "A solution for every need"
      </h1>
      <p class="text-lg md:text-xl text-center mt-3">
        At TUKLAS we recognize that a Business needs to be flexible as its customers are unique, and that's the challenge we readily embrace. So whatever kind of company you have, TUKLAS IT Creatives and Solutions has the enterprise to get you on your way.
      </p>
    </div>

    <div class="flex flex-wrap justify-center px-5 md:px-10 py-5">
      <div v-for="(service, index) in services" :key="index" class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-200 rounded-lg p-4" @click="toggleService(index)" :class="{ 'cursor-pointer': !service.open, 'animate__animated animate__fadeIn': service.open }">
          <div class="flex justify-between items-center">
            <div class="text-xl font-medium">{{ service.title }}</div>
            <svg v-if="service.open" class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            <svg v-else class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          <ul v-show="service.open" class="list-disc pl-5">
            <li v-for="(item, i) in service.items" :key="i">{{ item }}</li>
          </ul>
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
  data() {
    return {
      services: [
        { title: 'Business Development', items: ['Inventory System & POS System', 'Telemedicine System', 'Appointment System', 'Booking System', 'Landing Page'], open: false },
        { title: 'Technical Support', items: ['Events Management', 'Tabulation System', 'Company Logo Editing', 'Video Editing', 'Photo Editing'], open: false },
        { title: 'Internet of Things (IoT)', items: ['Smart Home System', 'Fire Alarm with UI', 'Burglar Alarm System with UI', 'Automated Appliances with UI', 'Wifi Controlled Breaker Unit'], open: false },
        { title: 'Educational Consultation', items: ['Educational Paper Consultation', 'Capstone Paper and System Consultation', 'Thesis Consultation', 'Feasibility Study Consultation'], open: false }
      ]
    };
  },
  methods: {
    toggleService(index) {
      this.services[index].open = !this.services[index].open;
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate__fadeIn {
  animation-name: fadeIn;
  animation-duration: 0.5s;
}
</style>
