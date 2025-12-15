<script setup>
import Navbar from './layouts/Navbar.vue';
import Main from './views/Main.vue';
import { useStore } from './stores/State';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const store = useStore();
const toggleDark = () => store.setDarkMode();

const isOffline = ref(!navigator.onLine);

function handleOffline() {
  isOffline.value = true;
}

function handleOnline() {
  isOffline.value = false;
}

onMounted(() => {
  window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);
});

onBeforeUnmount(() => {
  window.removeEventListener("offline", handleOffline);
  window.removeEventListener("online", handleOnline);
});


</script>

<template>
  <div v-if="isOffline" class="network-warning">
    ⚠️ You are offline — check your internet connection.
  </div>

  <div class="app-wrapper" :class="{ dark: store.dartMode }">
    <header class="app-header">
      <div class="header-left">
        <h2 class="logo">My <strong>Portfolio</strong></h2>
      </div>

      <header class="header-right">
        <button class="toggle-theme" @click="toggleDark">
          <img v-if="store.dartMode" src="https://img.icons8.com/?size=100&id=bLKTySEY4GIL&format=png&color=FFFFFF" />
          <img v-else src="https://img.icons8.com/?size=100&id=28rO6I0klOD8&format=png&color=000000" />
        </button>
      </header>
    </header>

    <Navbar />

    <main class="app-main">
      <Main />
    </main>
  </div>
</template>

<style>
/* App wrapper */
.app-wrapper {
  min-height: 100vh;
  background: #f5f7fa;
  color: #333;
  padding: 1.3rem;
  transition: 0.3s ease;
  font-family: "Inter", sans-serif;

}

/* Dark mode */
.app-wrapper.dark {
  background: #0e0e0e;
  color: #d4d4d4;
}

/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo strong {
  color: #ff6b61;
}

.toggle-theme img {
  width: 1.4rem;
}

.toggle-theme {
  background: transparent;
  border: 1.5px solid currentColor;
  padding: 6px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}

.toggle-theme:hover {
  background: rgba(0, 0, 0, 0.08);
}

/* Main content */
.app-main {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .app-main {
    flex-direction: column;
    justify-content: center;
  }
}

.network-warning {
  background: #ff4d4d;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  animation: fadeIn 0.3s ease-in-out;
}

/* Smooth fade animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
