<script setup>
import { useStore } from '@/stores/State';

const store = useStore();

const mySection = [
    {
        title: "Web Development",
        details: `I build responsive and modern web interfaces using HTML, CSS, JavaScript, 
        and Vue.js. I focus on clean code and performance.`
    },
    {
        title: "Backend with Laravel",
        details: `I use Laravel to develop secure, RESTful APIs and manage server-side logic,
         user authentication, and database operations with MySQL.`
    },
    {
        title: "Team Collaboration",
        details: `I’ve worked on group projects using Git and GitHub, and I enjoy collaborating 
        on systems that combine both front-end and back-end technologies.`
    },

]

</script>

<template>
   
    <div class="home" :class="{ darkMode : store.dartMode}">
        <h2>ABOUT ME</h2> 
        <hr>
        <p>
            <strong>Hello,</strong> <span>My name is Mengleang.</span>
            Hello there! I’m a passionate and motivated fourth-year Information Technology student with a growing interest in full-stack web development. I have hands-on experience in both front-end technologies like Vue.js and back-end frameworks like Laravel.
            Through academic projects and self-learning, I’ve built applications that combine clean UI design with powerful server-side logic. I enjoy working on both sides of development, turning ideas into functional, user-friendly web experiences.
            I'm always eager to learn new tools and contribute to exciting tech projects in real-world settings.
            <a href=" https://my-portfolio-ten-flax-35.vercel.app/ ">First Portfolio</a> and  
            <a href="https://vue-porfolio-eight.vercel.app/">Second Portfolio</a> .
        </p>
        <h3>What I do!</h3>
        <hr>
        <div class="experience">
            <div  :class="{ darkMode : store.dartMode}"  class="box" v-for="section in mySection" :key="section.title">
                <h4>{{ section.title }}</h4>
                <p>{{ section.details }}</p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.home{
    min-height: 100vh;
    padding: 5px;
}
.experience.darkMode{
    background-color: black;
    color: white;
}
.experience{
    display: grid;
    padding: 5px;
    height: auto;
    place-content: center;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
.box{
    background-color: rgb(247, 255, 252);
    padding: 4px;
    border-radius: 5px;
    line-height: 1rem;
    border: 1px solid rgba(241, 241, 241, .4);
    transition: all .1s;
}
.box h4{
    text-align: center;
}
.box:hover {
    scale: 1.05;
    background-color: cornflowerblue;
    color: aliceblue;
}

</style>