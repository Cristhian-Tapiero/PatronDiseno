<script setup>
import { ref } from 'vue'
let hover = ref(false)
let hoverNext = ref(false)
let hoverBack = ref(false)
let intro = 'Ves un boton... Lo quieres oprimir cierto? Pero que hace esto? Es seguro? Que consecuencias trae? No tienes ni idea ¿cierto?, ahora imagina a tu abuela usando esto, se volvera loca! Pero que pasa si te paras encima?'
let hover1 = 'Cuando oprimas el boton saltará un mensaje de saludo 😉'
let conclusion = 'Muchas veces un boton pequeño no nos proporciona suficiente informacion, un simple signo debe ser capaz de expresar una idea, como un + o un -... Con este patron de diseño se idea permitir que aquellas personas novatas no teman de "romper algo"'
</script>
<template>
    <div class="container">
        <h2 class="title">Botones que si informan</h2>
        <p class="text">{{ intro }}</p>
        <section class="example">
            <button class="button" @mouseenter="hover = !hover" @mouseleave="hover = false" @click="$swal('Hola!!!', 'Has oprimido un boton 😎', 'success')">Oprimeme!!!</button>
            <figcaption :class="[hover ? 'info' : 'invisible']">{{ hover1 }}</figcaption>
        </section>
        <p class="text">{{ conclusion }}</p>
        <section class="example">
            <router-link to="/"><button class="button next" @mouseenter="hoverBack = !hoverBack" @mouseleave="hoverBack = false"><span class="material-symbols-outlined">arrow_back</span></button></router-link>
            <figcaption :class="{invisible: !hoverBack}" class="info"> Pagina anterior </figcaption>
            <router-link to="/barras-busqueda"><button class="button next" @mouseenter="hoverNext = !hoverNext" @mouseleave="hoverNext = false"><span class="material-symbols-outlined">arrow_forward</span></button></router-link>
            <figcaption :class="{invisible: !hoverNext}" class="info"> Siguiente pagina </figcaption>
        </section>
    </div>
</template>