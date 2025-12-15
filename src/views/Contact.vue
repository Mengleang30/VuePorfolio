<script setup>
import { useFeedbackStore } from '@/stores/Feedback';
import { useStore } from '@/stores/State';
import { ref } from 'vue';

const store = useStore();
const feedbackState = useFeedbackStore();

const name = ref("");
const email = ref("");
const message = ref("");

const loading = ref(false);
const success = ref(false);


const send = async () => {
  if (!name.value || !message.value) {
    alert("Please fill out required fields.");
    return;
  }

  loading.value = true;

  await feedbackState.submitFeedback({
    name: name.value,
    email: email.value,
    message: message.value
  });

  loading.value = false;
  success.value = true;

  name.value = "";
  email.value = "";
  message.value = "";
};


</script>
<template>
  <div class="contact-wrapper" :class="{ darkMode: store.dartMode }">
    
    <h2 class="contact-title">📬 FEEDBACK</h2>
    <p class="contact-desc">
      I'm always open to discussing new projects, ideas, or opportunities in tech.
    </p>

    <div class="contact-card">
      <form class="contact-form" @submit.prevent="send">
        
        <!-- Name -->
        <label>
          <span>Name</span>
          <input v-model="name" type="text" placeholder="Enter your name" />
        </label>

        <!-- Email -->
        <label>
          <span>Email</span>
          <input v-model="email" type="email" placeholder="yourname@example.com" />
        </label>

        <!-- Message -->
        <label>
          <span>Message</span>
          <textarea v-model="message" rows="5" placeholder="Write your message..."></textarea>
        </label>

        <!-- Submit Button -->
        <button class="submit-btn"  :class="{ darkBtn: store.dartMode }">
          Send Message
        </button>

        <p v-if="success" class="success-msg">Message sent successfully </p>
      </form>
    </div>

  </div>
</template>



<style scoped>
/* PAGE WRAPPER */
.contact-wrapper {
  min-height: 100vh;
  padding: 1rem;
}

/* Title */
.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  background: linear-gradient(90deg, #6e8fff, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Subtitle */
.contact-desc {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 1.5rem;
}

/* CARD */
.contact-card {
  width: 100%;
  max-width: 550px;
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 18px;
  box-shadow: 0 5px 28px rgba(0, 0, 0, 0.09);
  transition: 0.3s ease;
}

/* FORM */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* LABEL */
.contact-form label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #222;
}

/* INPUTS */
.contact-form input,
.contact-form textarea {
  margin-top: 6px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #cfd5e1;
  font-size: 1rem;
  outline: none;
  background: #f8fbff;
  transition: 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff;
  background: white;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

/* BUTTON */
.submit-btn {
  margin-top: 0.8rem;
  background: #007bff;
  color: white;
  font-weight: 600;
  padding: 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 40%;
  align-self: flex-end;
  transition: 0.25s ease;
}

.submit-btn:hover {
  background: #005ecb;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.35);
}

/* DARK MODE */
.darkMode .contact-desc {
  color: #cccccc;
}

.darkMode .contact-card {
  background: #1a1a1a;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
}

.darkMode .contact-form label {
  color: #e2e2e2;
}

.darkMode input,
.darkMode textarea {
  background: #1f1f1f;
  border-color: #333;
  color: #e0e0e0;
}

.darkMode input:focus,
.darkMode textarea:focus {
  border-color: #4d7bff;
  box-shadow: 0 0 0 3px rgba(77, 123, 255, 0.3);
}

.darkBtn {
  background: #4d7bff !important;
}

.darkBtn:hover {
  background: #3359ff !important;
}

.success-msg {
  color: green;
  margin-top: 10px;
  font-weight: 600;
}

/* MOBILE */
@media (max-width: 600px) {
  .contact-card {
    padding: 1.3rem;
  }

  .submit-btn {
    width: 100%;
  }
}

</style>