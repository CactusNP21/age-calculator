<template>
    <div>
        <p><span class="highlight">{{ year }}</span> years</p>
        <p><span class="highlight">{{ month }}</span> months</p>
        <p><span class="highlight">{{ days }}</span> days</p>
    </div>
</template>

<script setup lang="ts">
import {timeStore} from "../main.js";
import {ref} from "vue";

const year: any = ref('--')
const month: any = ref('--')
const days: any = ref('--')

timeStore.$subscribe((mutation, state) => {
    const currDate = new Date();
    const time: Date = state.time;
    year.value = currDate.getUTCFullYear() - time.getUTCFullYear();
    month.value = currDate.getUTCMonth() - time.getUTCMonth() + 1;
    days.value = currDate.getUTCDate() - time.getUTCDate();
    if (days.value < 0) {
        month.value--;
        const daysInLastMonth = new Date(currDate.getUTCFullYear(), currDate.getUTCMonth(), 0).getUTCDate();
        console.log(daysInLastMonth)
        days.value += daysInLastMonth;
    }

    if (month.value < 0) {
        year.value--;
        month.value += 12;
    }
})

</script>

<style scoped>
p {
    font-size: 56px;
    letter-spacing: 5px;
    font-family: Popins, sans-serif;
    font-weight: 700;
    font-style: italic;
    margin: 0;
}

.highlight {
    color: purple;
}
</style>