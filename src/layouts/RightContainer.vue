<script setup>
import { useStore } from '@/stores/State';

const store = useStore();

</script>

<template>
       <div class="right_container" :class="{darkMode : store.dartMode}" >
           <RouterView />
        </div>
</template>

<style >

.right_container{
    background-color: rgb(248, 248, 248);
    /* background-color: black; */
    flex-grow: 1;
    padding: 5px;
}
.darkMode{
    background-color: black;
}
</style>