<script setup>
import Input from "@/components/Input.vue";
import Output from "@/components/Output.vue";
</script>

<template>
    <div class="container">
        <Input/>
        <Output/>
    </div>

</template>

<style>
@font-face {
    font-family: "Popins";
    src: local("Popins"),
    url("../assets/fonts/Poppins-Regular.ttf") format("truetype");
}

* {
    box-sizing: border-box;
}

body {
    background: gray;
    display: grid;
    place-content: center;
}

.container {
    width: 700px;
    min-height: 500px;
    background: aliceblue;
    border-radius: 5% 5% 30% 5%;
    padding: 50px;
}
</style>