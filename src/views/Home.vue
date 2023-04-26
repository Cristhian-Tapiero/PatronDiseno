<script setup>
import { createElementBlock, ref } from 'vue'
let hover = ref(false)
</script>
<template>
    <div class="container">
        <h1 class="title">¡Bienvenido!</h1>
        <p class="text">En esta pagina podras encontrar un patron de diseño desarrollado para la inclusividad. Esta enfocado en mejorar la navegacion en personas con discapacidad visual o para aquellas personas inseguras de utilizar los medios tecnologicos para subir formularios o simplemente pasar un rato en la web.</p>
        <section class="example">
            <router-link to="/boton"><button class="button next" @mouseenter="hover = !hover" @mouseleave="hover = false"><span class="material-symbols-outlined">arrow_forward</span></button></router-link>
            <figcaption :class="[!hover ? 'invisible' : '', 'info']">Click aqui para ir a la siguiente sección</figcaption>
        </section>
    </div>
</template>