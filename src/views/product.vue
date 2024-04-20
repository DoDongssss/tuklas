<template>
  <section class="flex flex-col min-h-screen w-full">
    <div>
      <HeaderView />
    </div>
    <div class="flex justify-between items-center w-full bg-red-900 px-5 py-3 md:px-10">
      <div class="flex items-center">
        <p class="text-white text-4xl md:text-8xl">Services</p>
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
      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-200 rounded-lg p-4" @click="toggleService(0)" :class="{ 'cursor-pointer': !services[0].open, 'animate__animated animate__fadeIn': services[0].open }">
          <div class="flex justify-between items-center">
            <div class="text-xl font-medium">Business Development</div>
            <svg v-if="!services[0].open" class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <svg v-else class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul v-show="services[0].open" class="list-disc pl-5">
            <li>Inventory & POS System</li>
            <li>Telemedicine System</li>
            <li>Appointment System</li>
            <li>Landing Page</li>
          </ul>
          <a v-if="services[0].open" href="/inventory" class="block text-center mt-4 underline text-blue-500">Learn More</a>
        </div>
      </div>

      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-200 rounded-lg p-4" @click="toggleService(1)" :class="{ 'cursor-pointer': !services[1].open, 'animate__animated animate__fadeIn': services[1].open }">
          <div class="flex justify-between items-center">
            <div class="text-xl font-medium">Technical Support</div>
            <svg v-if="!services[1].open" class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <svg v-else class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul v-show="services[1].open" class="list-disc pl-5">
            <li>Events Management</li>
            <li>Tabulation System</li>
            <li>Video Editing</li>
            <li>Photo Editing</li>
          </ul>
          <a v-if="services[1].open" href="events_management" class="block text-center mt-4 underline text-blue-500">Learn More</a>
        </div>
      </div>

      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-200 rounded-lg p-4" @click="toggleService(2)" :class="{ 'cursor-pointer': !services[2].open, 'animate__animated animate__fadeIn': services[2].open }">
          <div class="flex justify-between items-center">
            <div class="text-xl font-medium">Internet of Things (IoT)</div>
            <svg v-if="!services[2].open" class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <svg v-else class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul v-show="services[2].open" class="list-disc pl-5">
            <li>Smart Home System</li>
            <li>Fire Alarm</li>
            <li>Burglar Alarm System</li>
            <li>Automated Appliances</li>
          </ul>
          <a v-if="services[2].open" href="smart_home_system" class="block text-center mt-4 underline text-blue-500">Learn More</a>
        </div>
      </div>

      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-200 rounded-lg p-4" @click="toggleService(3)" :class="{ 'cursor-pointer': !services[3].open, 'animate__animated animate__fadeIn': services[3].open }">
          <div class="flex justify-between items-center">
            <div class="text-xl font-medium">Educational Consultation</div>
            <svg v-if="!services[3].open" class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <svg v-else class="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul v-show="services[3].open" class="list-disc pl-5">
            <li>Educational Paper Consultation</li>
            <li>Capstone Paper and System Consultation</li>
            <li>Thesis Consultation</li>
            <li>Feasibility Study Consultation</li>
          </ul>
          <a v-if="services[3].open" href="educational_paper_consultation" class="block text-center mt-4 underline text-blue-500">Learn More</a>
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
        { open: false },
        { open: false },
        { open: false },
        { open: false }
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
