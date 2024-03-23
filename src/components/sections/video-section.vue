<template>
  <section class="flex items-center justify-center w-full">
    <div class="container bg-34363C text-white py-5 md:py-10">
      <div class="flex flex-col items-center justify-center p-5 md:px-10 gap-8 w-full">
        <div class="flex-col md:flex-row flex justify-between items-center w-full">
          <div class="md:w-1/2 h-[200px] md:h-[415px] w-full">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b0B1PMwjlmo" title="TUKLAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div class="md:w-1/2 md:pl-10 mt-5 md:mt-0">
            <h1 class="text-[5.5vw] md:text-5xl font-bold mb-4">WHY DO YOU NEED TO INVEST IN INFORMATION TECHNOLOGY FOR  YOUR BUSINESS?</h1>
            <h2 class="text-[5vw] md:text-3xl mb-5 md:mb-10 py-3 :py-[2rem]">Watch the video and find out</h2>
            <a href="/contact-us" class="bg-buttonColor text-white py-2 px-4 rounded hover:bg-darkerButtonColor transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
.bg-34363C {
  background-color: #34363C;
}
.bg-buttonColor {
  background-color: #C61407;
}
.hover\:bg-darkerButtonColor:hover {
  background-color: #960E05;
}
</style>
