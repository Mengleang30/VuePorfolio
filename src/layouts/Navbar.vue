<template>
  <nav class="nav-bar" :class="{ dark: store.dartMode }">
    <div
      class="nav-btn"
      :class="{ active: route.path === Nav.navigate }"
      v-for="Nav in navbar"
      :key="Nav.name"
      @click="navigate(Nav.navigate)"
    >
      <!-- <img :src="Nav.img" /> -->
      {{ Nav.name }}
    </div>
  </nav>
</template>

<script setup>
import { useStore } from '@/stores/State';
import { useRouter, useRoute } from 'vue-router';

const store = useStore();
const router = useRouter();
const route = useRoute();

const navbar = [
  { navigate: "/", name: "Home"},
  { navigate: "/resume", name: "Resume" },
  { navigate: "/skill", name: "Skills"},
  { navigate: "/contact", name: "Contact"},
];

const navigate = (path) => router.push(path);
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(7px);
  border: 1px solid #ddd;
  transition: 0.3s;
}

/* Dark mode */
.nav-bar.dark {
  background: rgba(30, 30, 30, 0.5);
  border-color: #444;
}

/* Buttons */
.nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  width: 4.4rem;
  border-radius: 8px;
  font-size: .9rem;
  cursor: pointer;
  transition: 0.2s;
}

.nav-btn:hover {
  transform: scale(1.03);
  background: rgba(80, 80, 255, 0.1);
}

.nav-btn.active {
  background: #e2e8ff;
  border: 2px solid #4d6bff;
  color: #3350ff;
}

.nav-btn img {
  width: 1.4rem;
}

.nav-btn span {
  font-size: 11px;
  margin-top: 4px;
}
</style>
