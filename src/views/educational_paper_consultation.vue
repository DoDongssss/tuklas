<template>
    <section class="flex flex-col min-h-screen w-full">
      <div>
        <HeaderView />
      </div>
      <div class="flex justify-between items-center w-full bg-no-repeat bg-cover px-5 py-20 md:px-10" style="background-image: url('/images/education.jpg')">
        <div class="py-10">
            <p class="text-red-700 text-lg sm:text-xl md:text-6xl lg:text-6xl">Educational consultation</p>
        </div>
      </div>
  
      <div class="flex flex-col sm:flex-row w-full px-5 md:px-10 py-10 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-5">
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/education.png" alt="Educational Paper Consultation" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Educational Paper Consultation</h2>
              <p class="text-sm sm:text-base">Guidance provided to students on writing academic papers, offering advice on structure, content, and research methods.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/capstone.png" alt="Capstone Paper Consultation" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Capstone Paper Consultation</h2>
              <p class="text-sm sm:text-base">Support and direction given to students completing a capstone project, including both the written paper and associated system.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/thesis.png" alt="Thesis Consultation" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Thesis Consultation</h2>
              <p class="text-sm sm:text-base">Personalized advice and feedback for students writing a thesis, focusing on research methodology, argument development, and academic writing.</p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
          <div class="card w-full bg-base-100 shadow-xl p-4">
            <figure>
              <img src="/images/feasibility.png" alt="Feasibility Study Consultation" class="w-1/2 sm:w-1/3 lg:w-auto h-40 mx-auto">
            </figure>
            <div class="card-body flex flex-col items-center text-center">
              <h2 class="card-title text-lg sm:text-xl">Feasibility Study Consultation</h2>
              <p class="text-sm sm:text-base"> Assessment and guidance on conducting feasibility studies, helping clients evaluate the viability of proposed projects or initiatives.</p>
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
  