import { db } from '@/services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserState', {
    state: () => ({
        user: [],
        isUserLoading: false,
        cv : [],
        contact : [],
        educations: [],
        isEducationLoading: false,
        experience : []
    }),

    actions: {

        async fetchUser() {
            this.isUserLoading = true;  
            try {
                const colRef = collection(db, "users");
                const snap = await getDocs(colRef);

                this.user = snap.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                }));
            } catch (e) {
                console.error("ERROR:", e);
            }
            finally {
                this.isUserLoading = false
            }

        },

        async fetchCVs(){
            try {
                const colRef = collection(db, "cv");
                const snap = await getDocs(colRef);

                this.cv = snap.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                }));
                // console.log("Fetching CV...", this.cv);
                // console.log("Snapshot size:", snap.size);
            }
            catch (e) {
                console.error("ERROR:", e);
            }
        },

        async fetchContact(){
            try {
                const colRef = collection(db, "contacts");
                const snap = await getDocs(colRef);

                this.contact = snap.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                }));
                // console.log("Fetching CV...", this.contact);
                // console.log("Snapshot size:", snap.size);
            }
            catch (e) {
                console.error("ERROR:", e);
            }
        },

        async fetchEducation(){
            this.isEducationLoading = true;  
            try {
                const colRef = collection(db, "educations");
                const snap = await getDocs(colRef);

                this.educations = snap.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                }));
                // console.log("Fetching education...", this.educations);
                // console.log("Snapshot size:", snap.size);
            } catch (e) {
                console.error("ERROR:", e);
            }
            finally {
                this.isEducationLoading = false
            }
        },

        async fetchExperience(){
             try {
                const colRef = collection(db, "experience");
                const snap = await getDocs(colRef);

                this.experience = snap.docs.map(d => ({
                    id: d.id,
                    ...d.data()
                }));
                // console.log("Fetching experience...", this.experience);
                // console.log("Snapshot size:", snap.size);
            } catch (e) {
                console.error("ERROR:", e);
            }
        }
    }
});
