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
    <main class="mainPage">
      <LeftContainer :class="{darkMode : DartMode}"/>
      <RightContainer :class="{darkMode : DartMode}"/>
    </main>
</template>

<style scoped>

.mainPage{
    background-color: blanchedalmond;
    min-height: 80vh;
    margin-top: 5px;
    border: 1px solid rgb(255, 114, 114);
    border-radius: 4px;
    /* padding: 5px; */
    display: flex;
    justify-content: space-between;
    gap: 5px;
    box-shadow: 0px 4px 14px 4px rgba(0,0,0,0.19);
}

</style>