<template>
  <div class="right-box" :class="{ dark: store.dartMode }">
    <RouterView />
  </div>
</template>

<script setup>
import { useStore } from '@/stores/State';
const store = useStore();
</script>

<style>
.right-box {    
  background: #ffffff;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 25px rgba(0,0,0,0.06);
  transition: 0.3s;
  flex-grow: 1;
}

.right-box.dark {
  background: #151515;
  color: #e0e0e0;
  box-shadow: 0 0 20px rgba(255,255,255,0.06);
}
@media (max-width: 768px) {
  .right-box {
    /* width: 95%; */
    margin-top: .4rem;
    
  }
}

</style>
