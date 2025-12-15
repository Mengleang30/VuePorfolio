<script setup>
import { useStore } from '@/stores/State';
import { computed, onMounted, ref } from 'vue';
import { useSectionStore } from '@/stores/SectionState';
import { useUserStore } from '@/stores/UserState';

const store = useStore();
const sectionStore = useSectionStore();
const userState = useUserStore();

const userData = computed(() => {
  if (!userState.user.length) return {};

  return userState.user[0];
})



onMounted(() => {
  sectionStore.fetchSections();
  userState.fetchUser();
});


</script>
<template>
  <div v-if="userState.isUserLoading" class="loading-container">
    <div class="spinner"></div>
    <p>Loading user...</p>
  </div>

  <div v-else class="home" :class="{ darkMode: store.dartMode }">
    <h2 class="title">ABOUT ME</h2>

    <div class="about-text">
      <p>
        <strong>Hello,</strong> <span>my name is {{ userData.name }}.</span>
        {{ userData.background }}
      </p>
    </div>

    <h3 class="subtitle">What I do</h3>

   

    <!-- Main content -->
    <div  class="experience">
      <div v-for="section in sectionStore.sections" :key="section.id" class="box" :class="{ boxDark: store.dartMode }">
        <h4>{{ section.title }}</h4>
        <p>{{ section.details }}</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
.home {
  min-height: 100vh;
  padding: 1rem;
}

/* Title */
.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  background: linear-gradient(90deg, #6e8fff, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* About paragraph block */
.about-text {
  max-width: 800px;
  line-height: 1.6rem;
  font-size: 0.98rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.about-text span {
  font-weight: 600;
}

.portfolio-links a {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}

.portfolio-links a:hover {
  text-decoration: underline;
}

/* Subtitle */
.subtitle {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

/* Cards grid */
.experience {
  display: grid;
  gap: 1rem;
  margin-top: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

/* Each card */
.box {
  background-color: #f7fffc;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(230, 230, 230, 0.8);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;
  line-height: 1.4rem;
  font-size: 0.95rem;
}

.box h4 {
  text-align: left;
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
  font-weight: 600;
}

.box:hover {
  transform: translateY(-3px);
  background-color: #e5f0ff;
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.25);
}

/* Dark mode */
.home.darkMode .about-text {
  color: #d2d2d2;
}

.boxDark {
  background-color: #181818;
  border-color: #333;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.05);
  color: #e2e2e2;
}

.boxDark:hover {
  background-color: #202020;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.12);
}

/* Loading Spinner */
.loading-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem;
}

.spinner {
  width: 35px;
  height: 35px;
  border: 4px solid #cfd8dc;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-container p {
  margin-top: 10px;
  font-size: 0.95rem;
  color: gray;
}


/* Responsive */
@media (max-width: 600px) {
  .about-text {
    font-size: 0.9rem;
  }
}
</style>