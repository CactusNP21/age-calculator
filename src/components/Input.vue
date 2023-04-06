<template>
    <div class="inputs">
        <label class="cell">
            <span class="data">DAY</span>
            <input v-model="day" @blur="validate(day, this.$refs.dayHint)" type="number" min="1"/>
            <span :style="{visibility: 'hidden'}" ref="dayHint">Required</span>
        </label>

        <label class="cell">
            <span class="data">MONTH</span>
            <input v-model="month" @blur="validate(month, this.$refs.dayHint)" type="number" min="1"/>
        </label>
        <label class="cell">
            <span class="data">YEAR</span>
            <input v-model="year" @blur="validate(year, this.$refs.dayHint)" type="number"/>
        </label>
    </div>
    <div class="res-controls">
        <hr class="abs">
        <button class="res-btn" :disabled="!validated" @click="log"><img src="../../assets/images/icon-arrow.svg" alt=""></button>
    </div>

</template>

<script lang="ts" setup>

import {timeStore} from "../main.js";
import {ref} from "vue";
let validated = ref(false)
function validate(val: unknown, ref: HTMLInputElement) {
    if (val) {
        ref.style.visibility = "hidden"
        if (day && month && year) {
            validated.value = true
        }
        return
    }
    validated.value = false
    ref.style.visibility = "visible";

}


let day = null;
let month = null;
let year = null;

function log() {
    timeStore.changeTime(new Date(year, month, day))
}
</script>

<style scoped>
.abs {
    position: absolute;
    width: 100%;
    top: 45%;
    z-index: 0;
}

.res-controls {
    position: relative;
    display: flex;
    justify-content: flex-end;
}

.res-btn {
    z-index: 1;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: black;
    border-color: transparent;
    transition: .3s;
}

.res-btn:hover {
    transition: .3s;
    background-color: purple;
}

.res-btn:disabled {
    background-color: gray;
}

.data {
    color: gray;
    font-family: Popins, sans-serif;
    letter-spacing: 4px;
}

.cell {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 32%;
}

.inputs {
    display: flex;
    gap: 20px;
    width: 80%;
}

input {
    font-size: 36px;
    padding: 10px 20px;
    background: transparent;
    border-radius: 7%;
}

input:focus {
    outline-color: purple;
}
</style>