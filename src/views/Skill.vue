<script setup>
import { useSkillStore } from '@/stores/Skills';
import { computed, onMounted } from 'vue';
const useSkill = useSkillStore();
const Data_skills = computed(()=>{
  return useSkill.skills;
});

onMounted(()=>{
  useSkill.fetchSkills();
})
</script>

<template>
  <div class="skills-section">
    <h2 class="skills-title">✨ SPECIAL SKILLS</h2>

    <div class="wrapping">
      <div
        class="skill-group"
        v-for="Data in Data_skills"
        :key="Data.id"
      >
        <!-- Category Title -->
        <h3 class="skill-label">
          {{ Data.skill_name}}
        </h3>

        <!-- Skill Chips -->
        <div class="skill-chips">
          <span
            class="skill-chip"
            v-for="(skill, index) in Data.skills"
            :key="index"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.skills-section {
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
}

/* Main Title */
.skills-title {
  text-align: left;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #6e8fff, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Category Title */
.skill-label {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  /* color: #222; */
  position: relative;
  padding-left: 12px;
}

.skill-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 6px;
  height: 18px;
  border-radius: 6px;
  background: #007bff;
}

.wrapping {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  /* background-color: #00ccff; */
}

/* Skill chips grid */
.skill-chips {
  margin-top: 10px;
  display: grid;
  padding: 8px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 6px;
  border: #e3e3e3 .3px solid;
  border-radius: 10px;
  /* background: rgba(240, 248, 255, 0.6); */
}

/* Chip style */
.skill-chip {
  padding: 6px 12px;
  /* background: #f5faff; */
  border-radius: 12px;
  font-size: 0.9rem;
  /* color: #333; */
  font-weight: 500;
  border: 1px solid rgba(0, 123, 255, 0.15);
  transition: 0.25s ease;
  cursor: default;
}

.skill-chip:hover {
  /* background: #dbe9ff; */
  color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0, 123, 255, 0.25);
}

/* Dark Mode Support */
.darkMode .skill-label {
  /* color: #efefef; */
}

.darkMode .skill-label::before {
  background: #4d7bff;
}

.darkMode .skill-chip {
  background: #1b1b1b;
  border-color: rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
}


</style>
