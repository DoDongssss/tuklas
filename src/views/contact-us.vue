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
              <option value="Appointment System">Appointment System</option>
              <option value="Booking System">Booking System</option>
              <option value="Document Management System">Document Management System</option>
              <option value="Enrollment System">Enrollment System</option>
              <option value="Landing Page">Landing Page</option>
            </optgroup>
            <optgroup label="Technical Support Editing Services">
              <option value="Events Management">Events Management</option>
              <option value="Tabulation System">Tabulation System</option>
              <option value="Company Logo Editing">Company Logo Editing</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Photo Editing">Photo Editing</option>
            </optgroup>
            <optgroup label="Home Automation Systems using IOT">
              <option value="Smart Home System">Smart Home System</option>
              <option value="Fire Alarm with UI">Fire Alarm with UI</option>
              <option value="Burglar Alarm System with UI">Burglar Alarm System with UI</option>
              <option value="Automated Appliances with UI">Automated Appliances with UI</option>
              <option value="Wifi Controlled Breaker Unit">Wifi Controlled Breaker Unit</option>
            </optgroup>
            <optgroup label="Educational Consultation">
              <option value="Educational Paper Consultation">Educational Paper Consultation</option>
              <option value="Capstone Paper and System Consultation">Capstone Paper and System Consultation</option>
              <option value="Thesis Consultation">Thesis Consultation</option>
              <option value="Feasibility Study Consultation">Feasibility Study Consultation</option>
            </optgroup>
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
      alert("Sorry we are under maintenance, for further inquiries you can message us on our Facebook: page Tuklas IT Creatives and Solution or you may call us at 09105344829");
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
