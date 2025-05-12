<script setup>

const data = [
    {
        year: "2020-2021",
        certificate: "Grade C Student of academic",
        school: "Hun Sen Chamkar lue High School​"
    },
    {
        year: "2021-current",
        certificate: "Information Technology and community",
        school: "Institute of Technology of Cambodia​"
    },
    
]

const experience = [
    {
        work : "Academic Project-Bookstore Web App",
        details : `Developed a responsive bookstore management web app
         using Vue.js and Laravel. Built dynamic UI components for book 
         browsing and filtering, integrated RESTful APIs and user authentication
          with Laravel Sanctum, and used Docker for containerization. Connected MySQL
           via Eloquent ORM, handled API requests with Axios, and maintained version control with Git.` 
    },
    {
        work: "Personal Portfolio",
        details: "Build 2 personal portfolios using ReactJs and VueJs"
    }
]


</script>

<template>
    <div class="resume">
    <h3>Resume</h3>
    <hr>
    <h4>My Education</h4>
    <div class="experience">
        <div class="box" v-for="Data in data" :key="Data.school">
         <span>{{ Data.year }}</span>
         <p><strong>{{ Data.certificate }}</strong></p>
         <p>{{ Data.school }}</p>
    </div>
    </div>
    <h4>My Experience</h4>
    <div class="experience">
        <div class="box" v-for="Data in experience" :key="Data.work">
         <strong> {{ Data.work }}</strong>
         <p class="details">{{ Data.details }}</p>
    </div>
    </div>
    </div>
</template>

<style scoped>
.resume{
    min-height: 100vh;
}
.details{
    text-align: start;
}

.experience{
    display: grid;
    padding: 5px;
    height: auto;
    place-content: center;
    text-align: center;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
.box{
    background-color: rgb(247, 255, 252);
    padding: 4px;
    border-radius: 5px;
    width: 98%;
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