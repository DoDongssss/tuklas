<template>
  <div class="flex flex-col h-full items-start justify-center w-full bg-[#353448]">
    <div class="flex flex-col sm:flex-row items-center justify-between w-full px-5 sm:px-[10rem] bg-[#000000] py-[5rem]">
      <div class="flex flex-col text-white sm:w-[75%] sm:pr-[10rem]" >
        <h5 class="font-[900] text-[4.5rem] tracking-widest self-start">TUKLAS</h5>
        <p class="text-lg text-justify">Aims to discover innovation by simplifying processes and systems that ensure sustainable success for our business partners. We envision being the catalyst for development by embracing and empowering change.</p>
      </div>
      <!-- <div class="flex flex-col text-white text-lg w-full mt-5 sm:mt-0 sm:w-1/2" >
        <h5 class="font-bold mb-2 sm:mb-5 text-[6.5vw] sm:text-[1rem]">Products and Services</h5>
        <ul class="list-none">
          <li class="text-sm">Inventory and POS</li>
          <li class="text-sm">Website Development</li>
          <li class="text-sm">Social Media Management</li>
          <li class="text-sm">Events Management</li>
          <li class="text-sm">Internet-Of-Things</li>
        </ul>
      </div> -->
      <div class="flex flex-col text-white text-lg w-full mt-10 sm:mt-0 sm:w-[25%]">
        <h5 class="font-bold mb-2 text-[6.5vw] sm:text-lg self-start hidden sm:block ">Contact</h5>
        <p class="text-[4vw] sm:text-[1rem] flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-[#dc1102]"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span>tuklas.it@gmail.com</span>
        </p>
        <p class="text-[4vw] sm:text-[1rem] flex gap-3 items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-[#dc1102]"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <span>09105344829</span>
        </p>
        <p class="text-[4vw] sm:text-[1rem] flex gap-3 items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-5 h-5 fill-[#dc1102]"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
          <span>285 Haig St. Brgy. Daang Bakal, Mandaluyong City, 1550 Philippines</span>
        </p>
        <div class=" flex gap-4 mt-8 sm:mt-4 justify-center">
          <div class="p-4 rounded-md border"></div>
          <div class="p-4 rounded-md border"></div>
          <div class="p-4 rounded-md border"></div>
          <div class="p-4 rounded-md border"></div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between w-full px-[10rem] bg-[#2B293E]">
      <div>
      <a href="/"> 
        <img src="/images/logo.png" alt="" class="w-[100px]">
      </a>
    </div>
      <div class="hidden sm:flex gap-11">
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/">Home</a></li>
        <!-- <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/services">Services</a></li> -->
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/product">Product</a></li>
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/about">About</a></li>
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/contact">Contact us</a></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style  scoped>
</style>
