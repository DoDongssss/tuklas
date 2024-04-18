<template>
  <div class="hidden md:flex items-center justify-between h-[70px] w-full bg-gradient-to-b from-black to-transparent md:px-[4rem] px-[10rem] z-10 absolute top-0">
    <div>
      <a href="/">
        <img src="/images/logo.png" alt="" class="md:w-[100px] w-[125px] image-shadow">
      </a>
    </div>
    <div class="flex md:gap-8 gap-11">
      <li class="list-none md:text-sm text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/">Home</a></li>
      <li class="list-none md:text-sm text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/product">Services</a></li>
      <li class="list-none md:text-sm text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/about">About</a></li>
      <li class="list-none md:text-sm text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/contact">Contact us</a></li>
      <button class="submit-button"@click="showAlert" >Join us</button>
    </div>
    <div></div>
  </div>

  <div class="md:hidden relative flex items-center justify-between h-[55px] w-full bg-black px-5">
    <div class="">
      <a href="/">
        <img src="/images/logo.png" alt="" class="w-[20vw] image-shadow">
      </a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6 w-6 fill-white"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" @click="toggleMenu" /></svg>
    </div>

    <div class="absolute left-0 right-0 flex flex-col gap-2 w-full p-4 bg-black/90 z-10 overflow-hidden transition-all" :class="show_menu ? 'top-[55px]' : 'top-[-400px] z-0' ">
      <li class="list-none text-lg cursor-point text-white text-center p-2"><a href="/">Home</a></li>
      <li class="list-none text-lg cursor-point text-white text-center p-2"><a href="/product">Services</a></li>
      <li class="list-none text-lg cursor-point text-white text-center p-2"><a href="/about">About</a></li>
      <li class="list-none text-lg cursor-point text-white text-center p-2"><a href="/contact">Contact us</a></li>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const show_menu = ref(false);

    const toggleMenu = () => {
      show_menu.value = !show_menu.value;
      console.log(show_menu.value);
    };

    const showAlert = () => {
      alert("Sorry we are under maintenance, for further inquiries you can message us on our Facebook: page Tuklas IT Creatives and Solution or you may call us at +639638385017");
    };

    return {
      show_menu,
      toggleMenu,
      showAlert
    };
  }
}
</script>


<style scoped>
  .submit-button {
    background-color: #c61407;
    color: white;
    padding: 1px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    animation: lightShow 0.5s infinite alternate;
  }

  .image-shadow{
    filter: drop-shadow(0 0 5px rgb(170, 170, 170));
  }
  
  @keyframes lightShow {
    0% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }
</style>

