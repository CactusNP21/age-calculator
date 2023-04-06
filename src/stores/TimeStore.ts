import {defineStore} from "pinia";

export const useTimeStore = defineStore("time", {
    state: () => ({
        time: new Date()
    }),
    getters: {
        currentTime(state) {
            return state.time
        }
    },
    actions: {
        changeTime(newTime: Date) {
            this.time = newTime
        }
    }
})