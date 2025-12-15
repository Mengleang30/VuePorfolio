<script setup>
import { useStore } from '@/stores/State';
import { useUserStore } from '@/stores/UserState';
import { computed, onMounted, ref } from 'vue';


const userState = useUserStore();

const myEducations = computed(()=>{
    if(!userState.educations.length) return {};

    return userState.educations;
});

const myExperience = computed(()=>{
    if(!userState.experience.length) return {};

    return userState.experience;
});

onMounted (()=>{
  userState.fetchEducation();
  userState.fetchExperience();
})

const store = useStore();



</script>

<template>
  <div class="resume-container" :class="store.dartMode ? 'darkMode' : ''">

    <h2 class="section-title">📘 RESUME</h2>
    <!-- Experience -->
 <h3 class="sub-title">💼 My Experience</h3>
<div class="exp-grid">
  <div class="exp-card" v-for="Data in myExperience" :key="Data.id">
    <h4>{{ Data.position }}</h4>
    <p class="company">{{ Data.work_place }}</p>
    <p class="date">{{ Data.date }}</p>
    <p class="desc">{{ Data.description }}</p>
  </div>
</div>

  <!-- Education -->
    <h3 class="sub-title">🎓 My Education</h3>
    <div class="timeline">
      <div class="timeline-card" v-for="Data in myEducations" :key="Data.id">
        <span class="timeline-year">{{ Data.year }}</span>
        <h4 class="timeline-title">{{ Data.certificate }}</h4>
        <p class="timeline-sub">{{ Data.school_name }}</p>
      </div>
    </div>



  </div>
</template>


<style scoped>
.resume-container {
  min-height: 100vh;
  padding: 1rem;
  color: inherit;
}

/* Main Title */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  background: linear-gradient(90deg, #6e8fff, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Sub Title */
.sub-title {
  margin-top: 1.4rem;
  font-size: 1.35rem;
  font-weight: 600;
  /* color: #3a3a3a; */
}

/* Timeline Container (grid layout) */
.timeline {
  display: grid;
  margin-top: 0.7rem;
  gap: .6rem;
  padding: 0.3rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

/* Each Card */
.timeline-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid rgba(230, 230, 230, 0.6);
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  transition: 0.25s ease;
  position: relative;
}

/* Hover Effect */
.timeline-card:hover {
  transform: translateY(-4px);
  background: #e7f0ff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

/* Year Badge */
.timeline-year {
  display: inline-block;
  padding: 4px 10px;
  background: #007bff;
  color: #fff;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Card Titles */
.timeline-title {
  margin-top: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
}

/* Sub Text */
.timeline-sub {
  margin-top: 3px;
  font-size: 0.9rem;
  font-style: italic;
  /* color: #555; */
}

/* Experience Details */
.details {
  margin-top: 6px;
  font-size: 0.9rem;
  color: #444;
  text-align: start;
  line-height: 1.4rem;
}

/* Dark Mode (if using store.dartMode) */
.darkMode .timeline-card {
  background: #151515;
  background: #1a1a1a;  
  border-color: #333;
  box-shadow: 0 4px 10px rgba(255,255,255,0.05);
  transition: 0.25s ease;
}

.darkMode .timeline-card:hover {
  background: #242424;
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(255,255,255,0.08);
}

.darkMode .timeline-year {
  background: #4d7bff;
}

.darkMode .timeline-title {
  color: #eaeaea;
}

.darkMode .timeline-sub {
  color: #bfbfbf;
}

.darkMode .details {
  color: #d0d0d0;
}
.exp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.exp-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.06);
  transition: 0.25s ease;
}
.darkMode .exp-card {
  background: #1a1a1a;
  box-shadow: 0 4px 16px rgba(255,255,255,0.05);
}

.exp-card:hover {
  transform: translateY(-4px);
  /* background: #ecf4ff; */
}

.company {
  font-weight: 600;
  color: #555;
}

.darkMode .company{
  color: #aaa;
}

.date {
  font-size: 0.85rem;
  color: #777;
  margin-top: 5px;
}

.darkMode .date {
  color: #999;
}

.desc {
  margin-top: 6px;
  color: #444;
  line-height: 1.45rem;
}
.darkMode .desc {
  color: #d0d0d0;
}


</style>