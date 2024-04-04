<template>
    <section class="justify-center w-full py-[5rem] px-5 sm:px-[1rem]">
      <div class="justify-center w-full gap-5">
        <h1 class=" text-[7vw] sm:text-4xl md:text-5xl text-6xl font-bold text-center">
          Core Products We Make
        </h1>
        <p class="text-[4vw] sm:text-lg md:text-xl text-center mb-10 mt-4 sm:mt-10">
          Our core products encompass a diverse array of solutions meticulously crafted to meet your specific needs.
        </p>
        <div class="flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-4 md:flex-wrap lg:flex-nowrap">
            <div class="product-card min-w-[40%] lg:min-w-min" @click="redirectToProduct">
                <div class="flex flex-col items-center text-center p-4">
                    <ProductInventory class="w-[50vw] h-[50vw] sm:w-[13rem] sm:h-[13rem]"/>
                    <h3 class="font-bold text-[4vw] sm:text-lg">INVENTORY AND POINT-OF-SALE SYSTEM</h3>
                    <p class="text-[4vw] sm:text-[1rem] text-justify sm:text-normal">A comprehensive Inventory Point-of-Sale system that smoothly manages stock levels, sales transactions, and customer interactions for efficient retail operations.</p>
                </div>
            </div>
            <div class="product-card min-w-[40%] lg:min-w-min"  @click="redirectToProduct">
                <div class="flex flex-col items-center text-center p-4 ">
                    <ProductWebsite class="w-[50vw] h-[50vw] sm:w-[13rem] sm:h-[13rem]"/>
                    <h3 class="font-bold text-[4vw] sm:text-lg">WEBSITE DEVELOPMENT</h3>
                    <p class="text-[4vw] sm:text-[1rem] text-justify sm:text-normal">Tailored Website Development services creating visually appealing and functionally robust online platforms that effectively represent and elevate businesses.</p>
                </div>
            </div>
            <div class="product-card min-w-[40%] lg:min-w-min"  @click="redirectToProduct">
                <div class="flex flex-col items-center text-center p-4">
                    <ProductSocmed class="w-[50vw] h-[50vw] sm:w-[13rem] sm:h-[13rem]"/>
                    <h3 class="font-bold text-[4vw] sm:text-lg">SOCIAL MEDIA MANAGEMENT</h3>
                    <p class="text-[4vw]  sm:text-[1rem] text-justify sm:text-normal">Strategic Social Media Management, crafting engaging and impactful online presence to enhance brand visibility, customer engagement, and overall digital influence.</p>
                </div>
            </div>
            <div class="product-card min-w-[40%] lg:min-w-min"  @click="redirectToProduct">
                  <div class="flex flex-col items-center text-center p-4">
                    <ProductEvents class="w-[50vw] h-[50vw] sm:w-[13rem] sm:h-[13rem]"/>
                    <h3 class="font-bold text-[4vw] sm:text-lg">EVENTS TECHNICAL SUPPORT</h3>
                    <p class="text-[4vw]  sm:text-[1rem] text-justify sm:text-normal">Events Technical Support offering seamless audio-visual solutions and technical assistance to ensure the success of events, conferences, and gatherings.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import ProductInventory from '../svg/product-inventory.vue';
import ProductWebsite from '../svg/product-website.vue';
import ProductSocmed from '../svg/product-socmed.vue';
import ProductEvents from '../svg/product-events.vue';
export default {
  setup() {
    return {};
  },
  components: {
    ProductInventory,
    ProductWebsite,
    ProductSocmed,
    ProductEvents
  },
  methods: {
    redirectToProduct() {
      this.$router.push('/product');
    }
  }
}
</script>

<style scoped>
.product-card {
  flex: 1;
  background-color: #ffffff;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  background-color: #C61407;
}
</style>