<script setup>
import LeftContainer from '@/layouts/LeftContainer.vue';
import RightContainer from '@/layouts/RightContainer.vue';

defineProps({
  DartMode: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <main class="main-page" :class="{ darkMode: DartMode }">
    <div class="layout-wrapper">
      <LeftContainer />
      <RightContainer />
    </div>
  </main>
</template>


<style scoped>
.main-page {
  padding: 1rem;
  display: flex;
  justify-content: center;
}

/* CENTERED WRAPPER (IMPORTANT) */
.layout-wrapper {
  display: flex;
  gap: 1rem;
  /* max-width: 1300px; */
  width: 100%;
  margin: auto;
}

/* MOBILE MODE: STACK */
@media (max-width: 780px) {
  .layout-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

/* Dark Mode */
.darkMode {
  background: #0f0f0f;
}


</style>