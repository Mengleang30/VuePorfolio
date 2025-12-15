import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';

export const useSectionStore = defineStore('SectionState', {
  state: () => ({
    sections: [],
    isLoading: false,
  }),

  actions: {
    async fetchSections() {
      this.isLoading = true;
      try {
        const colRef = collection(db, "sections");
        const snap = await getDocs(colRef);

        this.sections = snap.docs.map(d => ({
          id: d.id,
          ...d.data()
        }));
      } catch (e) {
        console.error("Error fetching sections:", e);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
