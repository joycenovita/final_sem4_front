import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        accessToken: null,
    }),
    getters: {
        isLoggedIn() {
            return this.accessToken !==null;
        },
    },
    actions: {
        setAccessToken(token) {
            this.accessToken = token;
        },
        removeAccessToken(token) {
            this.accessToken = null;
        },
        logout() {
            try {
                route.push("/sign-in");
                this.removeAccessToken();
                console.log("Signed out successfully")
            } catch (error) {

            }
        },
    },
});