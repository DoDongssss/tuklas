<template>
    <section class="flex flex-col h-[300px] sm:h-screen justify-center items-center">
      <div class="block__content" style="background-image: url('/images/catch.jpg');">
        <div class="hidden sm:block text-container">
          <h2 class="block__title"> WE WANT TO </h2>
            <h2 class="block__title"><span class="yellow"> SEE YOU SUCCEED</span>
          </h2>
        </div>
        <div class=" sm:hidden flex flex-col items-center justify-center">
          <h2 class="text-[9vw] font-bold text-white">WE WANT TO</h2>
          <h2 class="text-[9vw] font-bold text-yellow-500">SEE YOU SUCCEED</h2>
        </div>
        <div class="hidden sm:block button-container">
          <button class="pulsating-button" @click="redirectToContact">Connect with us</button>
        </div>
        <div class="sm:hidden button-container">
          <button class="pulsating-button " @click="redirectToContact">Connect with us</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    setup() {
      const redirectToContact = () => {
        window.location.href = "/contact";
      };
  
      return {
        redirectToContact
      };
    }
  };
  </script>
  
  <style scoped>
  .block__content {
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .block__title {
    color: #ffffff;
    font-size: 100px;
    font-weight: bold;
    text-align: center;
  }
  
  .yellow {
    color: #ff0000;
    font-weight: bold;
  }
  
  .button-container {
    margin-top: 20px;
  }
  
  .pulsating-button {
    padding: 5px 30px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    animation: pulsate 0.5s infinite alternate;
  }
  
  .pulsating-button:hover {
    background-color: red;
  }
  
  @keyframes pulsate {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  </style>
  