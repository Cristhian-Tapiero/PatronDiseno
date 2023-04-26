<script setup>
import { ref } from 'vue'
let hover1 = ref(false)
let hover2 = ref(false)
let hover3 = ref(false)
let hover4 = ref(false)
</script>
<template>
    <div class="container">
        <h1 class="title">Los links...</h1>
        <section class="example">
            <p class="text">Los links resultan ser desafiantes, muchas veces no sabemos a donde nos dirigen, que hacen, que contienen y aun si tienes conocimientos mas avanzados no sabes si son seguros 😲. <br/> Por esta razón, nuestro patron de diseño busca <a class="link" tabindex="1" @click="$swal('Hiciste click sobre un link', 'No todos los links redirigen a un lugar 😲', 'info')" @mouseenter="hover1 = !hover1" @mouseleave=" hover1 = false"> especificar  cada detalle</a> del link donde quieras hacer click</p>
            <figcaption :class="[!hover1 ? 'invisible' : '', 'info']">Al hacer click en este link te brindara algo de información que te puede ser util 😉</figcaption>
        </section>
        <section class="example">
            <a tabindex="2" href="https://pbs.twimg.com/profile_images/815316964818067456/Pgo5JmX0_400x400.jpg" target="_blank" class="link" @mouseenter="hover2 = true" @mouseleave="hover2 = false">¡Has click sobre mi!</a>
            <figcaption :class="[!hover2 ? 'invisible' : '', 'info']"> Cuidado! Este link te llevara a una pagina que tal vez no te guste ❌ <br> Link: https://pbs.twimg.com/profile_images/815316964818067456/Pgo5JmX0_400x400.jpg</figcaption>
        </section>
        <section class="example">
            <router-link to="/barras-busqueda"><button class="button next" @mouseenter=" hover3 = !hover3" @mouseleave="hover3 = false"><span class="material-symbols-outlined">arrow_back</span></button></router-link>
            <router-link to="/"><button class="button next" @mouseenter="hover4 = !hover4" @mouseleave="hover4 = false"> <span class="material-symbols-outlined">home</span></button></router-link>
            <figcaption  v-if="hover3" class="info">Sección Anterior</figcaption>
            <figcaption  v-if="hover4" class="info">Volver al inicio, la explicación ha terminado 😉</figcaption>
        </section>
    </div>
</template>