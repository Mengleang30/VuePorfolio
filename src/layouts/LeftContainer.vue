<script setup>
import { useStore } from '@/stores/State';
import { onMounted, ref, computed } from 'vue';
import imgaes from '../assets/images.jpg';
import { useUserStore } from '@/stores/UserState';

const store = useStore();
const myData = ref([]);

const userState = useUserStore();




// Dynamic computed profile information
const myInformation = computed(() => {
  if (!userState.user.length) return {};

  myData.value = userState.user[0];


  return {
    name: myData.value.name,
    position: myData.value.position,
    imgaes,
    email: myData.value.email,
    nationality: myData.value.nationality,

    contacts: userState.contact, 
    icons_contact2: [
      { icons: "https://img.icons8.com/?size=100&id=ufkkYBXJSuPy&format=png&color=000000", inform: myData.value.phone },
      { icons: "https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000", inform: myData.value.email },
      { icons: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000", inform: myData.value.address },
    ]
  };
});
// const cv = ref("");

const cv = computed(()=>{
  if (!userState.cv.length) return "";

  return userState.cv[0].link_cv;
})


onMounted(() => {
  userState.fetchUser();
  userState.fetchCVs();
  userState.fetchContact();
});

const downloadCV = () => {
  if (!cv.value) {
    console.log("CV is empty");
    return;
  }

  const link = document.createElement('a');
  link.href = cv.value;
  link.download = "Nov_Mengleang_CV.pdf";
  link.click();
};

</script>


<template>
  <div class="profile-card" :class="{ darkMode: store.dartMode }">
    <!-- Profile Image -->
     
    <div class="profile-image-wrapper">
      <img class="profile-image" :src="myInformation.imgaes" alt="me" />
    </div>

    <!-- Name & Position -->
    <h2 class="profile-name">{{ myInformation.name }}</h2>
    <p class="profile-role">{{ myInformation.position }}</p>

    <!-- CV Button -->
    <button class="btn-cv" @click="downloadCV">
      📄 Download CV
    </button>

    <!-- Social Icons -->
    <div class="social-icons">
      <a
        v-for="contact in myInformation.contacts"
        :key="contact.id"
        :href="contact.contact_link"
        class="social-btn"
        :title="contact.contact_name"
      >
        <img :src="contact.icons" />
      </a>
    </div>

    <!-- Contact Details -->
    <div class="contact-list">
      <div
        class="contact-item"
        v-for="icons in myInformation.icons_contact2"
        :key="icons.icons"
      >
        <img class="contact-icon" :src="icons.icons" alt="" />
        <div class="contact-info">
          <!-- <strong>{{ icons.type }}</strong> -->
          <span class="inform">{{ icons.inform }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .profile-card {
  width: 20rem;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: 0.3s ease;
}

/* Dark Mode */
.darkMode {
  background: #101010;
  color: #f0f0f0;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.inform {
  text-align: start;
}
/* Profile image */
.profile-image-wrapper {
  width: 120px;
  height: 120px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #007bff;
  padding: 3px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Name & Role */
.profile-name {
  margin-top: 15px;
  font-size: 1.4rem;
  font-weight: bold;
  background: linear-gradient(90deg, #6e8fff, #009dff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.profile-role {
  margin-top: 10px;
  font-size: 0.95rem;
  color: gray;
}

/* CV Button */
.btn-cv {
  margin-top: 12px;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.btn-cv:hover {
  background: #005ecb;
}

/* Social Icons */
.social-icons {
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 12px;
}
.social-icons img {
  width: 28px;
  height: 28px;
  transition: 0.2s;
}
.social-btn img {
  width: 28px;
  height: 28px;
  transition: 0.2s;
}

.social-btn:hover img {
  transform: scale(1.15);
}

/* Contact List */
.contact-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  background: rgba(0, 123, 255, 0.08);
  border-radius: 8px;
  transition: 0.3s;
}

.contact-item:hover {
  background: rgba(0, 123, 255, 0.18);
}

.contact-icon {
  width: 22px;
  height: 22px;
}

.contact-info span {
  font-size: 0.85rem;
  color: gray;
}

/* Mobile */
@media (max-width: 768px) {
  .profile-card {
    width: 95%;
    margin: auto;
  }

  .btn-cv {
    font-size: 0.9rem;
  }

  .contact-info span {
    font-size: 0.75rem;
  }
}


</style>