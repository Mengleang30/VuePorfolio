import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';

export const useSkillStore = defineStore('SkillState', {
    state: () => ({
        skills: [],
        isLoading: false,
    }),

    actions: {
        async fetchSkills() {
            this.isLoading = true;
            try {
                const colRef = collection(db, "skills");
                const snap = await getDocs(colRef);

                this.skills = snap.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                }));

                // console.log("Skills fetched:", this.skills);
            } catch (e) {
                console.error("Error fetching skills :", e);
            } finally {
                this.isLoading = false;
            }
        }
    }
});
