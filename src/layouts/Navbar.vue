<script setup>

import { useStore } from '@/stores/State';
import { useRouter, useRoute } from 'vue-router';


const Router = useRouter();
const route = useRoute();

const navbar = [
    {
    navigate: "/",
    name: "Home",
    img: "https://img.icons8.com/?size=100&id=83326&format=png&color=000000"
    },
    {
    navigate: "/resume",
    name: "Resume",
    img: "https://img.icons8.com/?size=100&id=44091&format=png&color=000000"
    },
    {
    navigate: "/skill",
    name: "Skills",
    img: "https://img.icons8.com/?size=100&id=2333&format=png&color=000000"
    },
    {
    navigate: "/contact",   
    name: "Contact",
    img: "https://img.icons8.com/?size=100&id=aUyUNnSNjoAd&format=png&color=000000"
    },
]

const navigate = (path) => {
    Router.push(path);
}

const store = useStore();

</script>

<template>
    <div class="navbar" >
        <div class="eachBtn" :class="{active: route.path === Nav.navigate, darkMode : store.dartMode}" v-for="Nav in navbar" :key="Nav.name" @click="navigate(Nav.navigate)">
            <img :src="Nav.img" :alt="Nav.name">
            <span>{{ Nav.name }}</span>
        </div>
    </div>
</template>

<style scoped>

.eachBtn.active{
    background-color: rgb(224, 224, 224);
    border: 1px solid rgb(13, 84, 227);
    color: blue;
    font-weight: bold;
}
.eachBtn.darkMode{
    background-color: rgb(78, 76, 76);
    color: white;
}

.navbar{
    background-color: transparent;
    border: 1px solid rgb(255, 114, 114);
    border-radius: 4px;
    display: flex;
    padding: 10px;
    gap: 1.2rem;
    justify-content: end;
    float: right;
    margin-top: 5px;
}
.eachBtn{
    background-color: rgb(252, 252, 252);
    display: flex;
    border: 1px solid rgb(222, 222, 222);
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    width: 3rem;
    gap: 2.2px;
    cursor: pointer;
    transition: all .1s;
    
}
.eachBtn:hover{
    background-color:whitesmoke;
    color: blue;
    scale: 1.02;
}
.eachBtn span {
    font-size: 12px;
}
.eachBtn img{
 width: 1.5rem;
 height: 1.5rem;
}

@media (max-width: 600px) {
  .eachBtn{
    width: 3rem;
   
  }
  .eachBtn span{
    font-size: 10px;
  }
  .eachBtn img{
        width: 1rem;
        height: 1rem;
}
}
</style>