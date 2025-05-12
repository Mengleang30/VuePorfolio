<script setup>
const Data_skills = [
  {
    label: "Front-end",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "VueJs",
      "ReactJs",
      "REST APIs",
      "Responsive WebDesign",
    ],
  },
  {
    label: "Back-end",
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "Authentication",
      "API development",
    ],
  },
  {
    label: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Postman", "VS Code", "Docker", "Laravel Artisan"],
  },
  {
    label: "Soft Skills",
    skills: [
      "Teamwork",
      " Problem-solving",
      "Communication",
      "Eagerness to Learn",
    ],
  },
];
</script>

<template>
  <div class="skill">
    <h4>SPECIAL SKILLS</h4>
    <hr>
    <div class="container" v-for="Data in Data_skills" :key="Data.label">
      <strong>{{ Data.label }}</strong>
      <div class="wrap_skill">
        <div class="eachSkill" v-for="skill in Data.skills" :key="skill.indexOf">
        {{ skill }}
      </div>
      </div>
   
    </div>
  </div>
</template>

<style scoped>
.container {
    line-height: 2rem;
}
.skill{
    min-height: 100vh;
}
.container .wrap_skill{
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));

}
.container .eachSkill{
    background-color: rgb(247, 255, 252);
    padding: 4px;
    border-radius: 5px;
    border: 1px solid rgba(241, 241, 241, .4);
    transition: all .1s;
}

.container .eachSkill:hover {
    scale: 1.05;
    background-color: cornflowerblue;
    color: aliceblue;
}
</style>
