<script setup>
import { ref } from 'vue'
let selected = ref(false)
let selected2 = ref(false)
let hover1 = ref(false)
let hover2 = ref(false)
let nombre = ref('')
const validarNumeros = (evento) =>{
    let condicion = false
    if(evento.keyCode >= 48 && evento.keyCode <= 57 || evento.keyCode == 8){
        return evento
    }else{
        evento.preventDefault()
    }
}
</script>
<template>
    <div class="container">
        <h1 class="title">Las barras de busqueda</h1>
        <p class="text">Las barras de busqueda son utiles para mandar informacion a una pagina web. Pero te has preguntado ¿Que informacion? ¿Como escribirla? Ese problema es de software de la prehistoria, con este patron de diseño sabras que elementos llevan comas, puntos, mayusculas o minusculas.</p>
        <section class="example">
            <input type="text" class="input" placeholder="Ingresa tu nombre" v-model="nombre" @focus="selected = true" @blur="selected =false">
            <figcaption :class="[!selected ? 'invisible' : '', 'info']">Restricciones: <br/> - Ninguna, solo agrega lo que quieras ver en pantalla 😉</figcaption>
        </section>
        <h2 class="text">{{ nombre }}</h2>
        <section class="example">
            <input type="text" class="input" placeholder="Ingresa tu telefono" @focus="selected2 = true" @blur="selected2 =false" @keydown="evento => validarNumeros(evento)">
            <figcaption :class="[!selected2 ? 'invisible' : '', 'info']">Restricciones: <br/> - Deben ser numeros, sin puntos ni caracteres especiales</figcaption>
        </section>
        <p class="text">Esto es util no solo para el usuario por si este presenta anormalias en el uso, tambien es util para evitar problemas a la hora de subir formularios ya que especifica que informacion debe ir en cada campo y que restricciones tiene. Facilitando el almacenamiento de informacion en las bases de datos.</p>
        <section class="example">
            <router-link to="/boton"><button class="next button" @mouseenter="hover1 = !hover1" @mouseleave="hover1 = false"><span class="material-symbols-outlined">arrow_back</span></button></router-link>
            <router-link to="/links"><button class="next button" @mouseenter="hover2 = !hover2" @mouseleave="hover2 = false"><span class="material-symbols-outlined">arrow_forward</span></button></router-link>
            <figcaption v-if="hover1" class="info"> Sección Anterior </figcaption>
            <figcaption v-if="hover2" class="info"> Siguiente Sección </figcaption>
        </section>
    </div>
</template>