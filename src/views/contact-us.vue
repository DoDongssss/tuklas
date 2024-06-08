<template>
  <section>
    <div>
      <HeaderView/>
    </div>
    <div class="container">
      <div class="left-side hidden md:block">
        <img src="/images/Contact.jpg" alt="TUKLAS" class="left-image" />
      </div>
    
      <div class="right-side">
        <div class="chat-box">
          <h1 class="chat-heading text-4xl md:text-6xl mb-5">Let's Chat</h1>
          <p class="chat-paragraph mb-5">
            Our professional team is ready and willing to help evaluate your needs and find the best solution to your business process and IT needs
          </p>
          <input type="text" placeholder="Name" class="input-field" />
          <input type="text" placeholder="Company Name" class="input-field" />
          <div class="input-group">
            <input type="text" placeholder="Email Address" class="input-field email-field" />
            <input type="text" placeholder="Mobile Number" class="input-field mobile-field" oninput="this.value = this.value.replace(/[^0-9\+]/g, '')" />
          </div>

          <select class="input-field">
            <option value="" disabled selected>Select Product to Avail</option>
            <optgroup label="Business Development">
              <option value="Inventory System">Inventory System</option>
              <option value="Point-Of-Sale System">Point-Of-Sale System</option>
              <option value="Telemedicine System">Telemedicine System</option>
              <option value="Booking System">Booking System</option>
              <option value="Document Management System">Document Management System</option>
              <option value="Enrollment System">Enrollment System</option>
              <option value="Landing Page">Landing Page</option>
            </optgroup>
            <optgroup label="Technical Support Editing Services">
              <option value="Events Management">Events Management</option>
              <option value="Tabulation System">Tabulation System</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Photo Editing">Photo Editing</option>
            </optgroup>
            <optgroup label="Home Automation Systems using IOT">
              <option value="Smart Home System">Smart Home System</option>
              <option value="Fire Alarm with UI">Fire Alarm System</option>
              <option value="Burglar Alarm System with UI">Burglar Alarm System</option>
              <option value="Automated Appliances with UI">Automated Appliances</option>
            </optgroup>
            <!-- <optgroup label="Educational Consultation">
              <option value="Educational Paper Consultation">Educational Paper Consultation</option>
              <option value="Capstone Paper and System Consultation">Capstone Paper and System Consultation</option>
              <option value="Thesis Consultation">Thesis Consultation</option>
              <option value="Feasibility Study Consultation">Feasibility Study Consultation</option>
            </optgroup> -->
            <optgroup label="Other">
              <option value="Other">Other</option>
            </optgroup>
          </select>
          <textarea placeholder="Message" class="input-field"></textarea>
          <button class="submit-button" @click="showAlert">Send</button>
          <div class="arrow-animation"></div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col h-full items-start justify-center w-full bg-[#353448]">
    <div class="flex flex-col sm:flex-row items-center justify-between w-full px-5 lg:px-[10rem] bg-[#000000] py-[5rem]">
      <div class="flex flex-col text-white sm:w-[75%] sm:pr-[10rem] md:pr-10" >
        <h5 class="font-[900] text-[4.5rem] tracking-widest self-start">TUKLAS</h5>
        <p class="text-lg text-justify">Aims to discover innovation by simplifying processes and systems that ensure sustainable success for our business partners. We envision being the catalyst for development by embracing and empowering change.</p>
      </div>
      <div class="flex flex-col text-white text-lg w-full mt-10 sm:mt-0 sm:w-[25%] md:w-[50%]">
        <h5 class="font-bold mb-2 text-[6.5vw] sm:text-lg self-start hidden sm:block ">Contact</h5>
        <p class="text-[4vw] sm:text-[1rem] flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-[#dc1102]">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
          </svg>
          <a href="mailto:tuklas.it@gmail.com" class="text-[#dc1102] hover:underline">tuklas.it@gmail.com</a>
        </p>
        <p class="text-[4vw] sm:text-[1rem] flex gap-3 items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-[#dc1102]"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <span>+639638385017</span>
        </p>
        <p class="text-[4vw] sm:text-[1rem] flex gap-3 items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-5 h-5 fill-[#dc1102]"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
          <span>Koronadal City, South Cotabato, Philippines</span>
        </p>
        <div class=" flex gap-4 mt-8 sm:mt-4 justify-center">
          <div class="">
            <a href="https://web.facebook.com/profile.php?id=100090855373185" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7 fill-white">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
              </svg>
            </a>
          </div>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7 fill-white"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
          </div>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7 fill-white"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
          </div>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7 fill-white"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import HeaderView from '@/components/Header.vue';
export default {
  components:{
    HeaderView
  },
  setup() {
    return {};
  },
  methods: {
    showAlert() {
      alert("Sorry we are under maintenance, for further inquiries you can message us on our Facebook: page Tuklas IT Creatives and Solution or you may call us at +639638385017");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.left-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-side {
  position: relative;
  background: radial-gradient(circle, #bf5c5c, #520601);
  color: white;
  padding: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-box {
  position: relative;
  max-width: 500px;
}

.input-field {
  width: calc(100%);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: none;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

.email-field {
  width: calc(50% - 5px);
}

.mobile-field {
  width: calc(50% - 5px); 
}

.submit-button {
  background-color: #c61407;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  animation: lightShow 0.5s infinite alternate;
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

.chat-heading,
.chat-paragraph {
  padding-bottom: 20px;
}

.arrow-animation {
  position: absolute;
  top: 11%;
  width: 20px;
  height: 20px;
  background-color: #747474;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  animation: arrowMove 2s infinite;
}

@keyframes arrowMove {
  0% {
    left: calc(50% + 250px);
  }
  50% {
    left: calc(50% + 50px);
  }
  100% {
    left: calc(20% - 100px);
  }
}
</style>
