<script setup>

import Navbar from './layouts/Navbar.vue';
import Main from './views/Main.vue';
import { useStore } from './stores/State';



const store = useStore();


// const onDarkMode = ()=>{
//   darkMode.value = !darkMode.value 
// }

const onDarkMode = () => {
  store.setDarkMode();
};


</script>

<template>
<div class="myApp" :class="{darkMode : store.dartMode}" >
    <header class="header" :class="{darkMode : store.dartMode}">
    
    <div class="align_header">
      <h2>My <strong>Portfolio</strong></h2>
      <div class="circle" @click="onDarkMode" >
        <img v-if="store.dartMode" src="https://img.icons8.com/?size=100&id=bLKTySEY4GIL&format=png&color=FFFFFF" alt="dark-mode">
        <img v-else src="https://img.icons8.com/?size=100&id=28rO6I0klOD8&format=png&color=000000" alt="no-dark-mode">
      </div>
    </div>
    
    <Navbar />
  </header>
  <Main :-dart-mode="store.dartMode" />
</div>
 
</template>

<style >

.darkMode{
    background-color: black;
    color: rgb(117, 117, 117);
}

.myApp.darkMode{
  background-color: black;
  color: rgb(85, 85, 85);
}

.header{

  
}
.myApp{
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.align_header{
  /* background-color: antiquewhite; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 5px 10px;
  border: 1px solid rgb(255, 114, 114);
  border-radius: 5px;
  box-shadow: 0px 4px 14px 4px rgba(0,0,0,0.19); */
}
.align_header strong{
  color: tomato;
}
.circle img{
  width: 1.5rem;
  height: 1.5rem;
}
.circle {
  background-color: transparent;
  border: 1.2px solid black;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

@media (max-width: 600px) {
  *{
    font-size: 12px;
  }

}
</style>
