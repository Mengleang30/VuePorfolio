import { defineStore } from "pinia";
import { db } from "@/services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const useFeedbackStore = defineStore("FeedbackState", {
  state: () => ({
    loading: false,
    success: false,
  }),

  actions: {
    async submitFeedback(data) {
      this.loading = true;

      try {
        await addDoc(collection(db, "feedback"), {
          ...data,
          createdAt: serverTimestamp()
        });

        this.success = true;

      } catch (err) {
        console.error("Firebase error:", err);
      } finally {
        this.loading = false;
      }
    }
  }
});
