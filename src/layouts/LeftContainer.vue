<script setup>

import imgaes from '../assets/images.jpg'

import { useStore } from '@/stores/State';

const store = useStore();
const myInformation = {
    name: "Nov Mengleang",
    position: "Web Developer",
    imgaes: imgaes,
    email: "novmengleang14@gmail.com",
    icons_contact: [
        {
            icons: "https://img.icons8.com/?size=100&id=63306&format=png&color=000000",
            link: ""
        },
        {
            icons: "https://img.icons8.com/?size=100&id=iEBcQcM9rnZ9&format=png&color=000000",
            link: ""
        },
        {
            icons: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
            link: ""
        },
    ],
    icons_contact2: [
        {
            type : "Phone",
            icons: "https://img.icons8.com/?size=100&id=ufkkYBXJSuPy&format=png&color=000000",
            inform: "060654575"
        },
        {
            type : "Email",
            icons: "https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000",
            inform: "novmengleang14@gmail.com"
        },
        {
            type : "Location",
            icons: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
            inform: "Phnom Penh"
        },
    ],
    
}

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '../../public/CV (MengLeang).pdf'
    link.download = "MengleangCV.pdf"
    link.click();
}



</script>

<template>
      <div class="left_container" v-if="myInformation" :class="{darkMode : store.dartMode}" >
            <img class="img_me" :src="myInformation.imgaes" alt="">
            <h3 class="myname">{{ myInformation.name }}</h3>
            <button class="cv" @click="downloadCV">Download CV</button>
            <h4 class="position">{{ myInformation.position }}</h4>
            <div class="contact" >
                <button v-for="icons in myInformation.icons_contact" :key="icons.icons">
                    <a :href="icons.link">
                    <img  :src="icons.icons" alt="">
                    </a>    
                </button>
            </div>
            <div class="contact_box">
                
                <div class="each_contact" v-for="icons in myInformation.icons_contact2" :key="icons.icons">
                    <img :src="icons.icons" :alt="icons.inform">
                    
                    <div class="contact_way">
                        <strong>{{ icons.type }}</strong>
                        <br>
                        <span :title="icons.inform">{{ icons.inform }}</span>
                    </div>
                </div>
               
            </div>
    </div>
</template>

<style scoped>
.left_container{
    background-color: rgb(248, 248, 248);
    /* background-color: black; */
    width: 18rem;
    padding: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.darkMode{
    background-color: black;
    color: white;
}
.cv{
    margin: 5px;
    width: 50%;
    background-color: tomato;
    border: none;
    color: white;
    transition: all .1s;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    height: 3rem;
}
.cv:hover{
    background-color: blue;

}

.contact_box {
    width: 100%;
    padding: 2px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.contact_box .each_contact{
    display: flex;
    gap: 5px;
    font-size: 14px;
    align-items: center;
    line-height: 1.4rem;
    /* background-color: aliceblue; */
    padding: 3px;
    border-radius: 5px;
}
.contact_box .each_contact span{
  
}

.contact_box img {
    width: 1.4rem;
    height: 1.4rem;
}
.myname {
    background: #020024;
    background: linear-gradient(90deg, rgb(68, 59, 255) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.position{
    color: slategrey;
}
.left_container .img_me{
    max-width: 50%;
    border-radius: 4px;
    border: 1px solid blanchedalmond;
    
}
.contact{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 5px;
}
.contact button {
    background-color: transparent;
    border: none;
    transition: all .2s;
    border-radius: 5px;
}
.contact button:hover{
    background-color: cadetblue;
}

.contact img {
    width: 2rem;
}

@media (max-width: 600px) {
    .left_container{

    max-width: 40%;
    padding: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
    
}
    .contact_way span{
        font-size: 10.5px;
    }
    .cv{
      font-size: 12px;
}
    

  
}
</style>