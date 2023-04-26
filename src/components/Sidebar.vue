<script setup>
import { ref } from 'vue'
const expanded = ref(false)
const ToggleMenu = () =>{
    expanded.value = !expanded.value
}
</script>
<template>
    <aside :class="[expanded ? 'expanded' : '']">
        <div class="logo">
            <img src="../assets/logo.png" alt="Logo de la app" class="logo">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>
        </div>
        <div class="menu">
            <router-link class="menu-button" to="/">
                <span class="material-symbols-outlined">Home</span>
                <span class="menu-text">Inicio</span>      
            </router-link>
            <router-link class="menu-button" to="/boton">
                <span class="material-symbols-outlined">toggle_on</span>
                <span class="menu-text">Botones</span>      
            </router-link>
            <router-link class="menu-button" to="/barras-busqueda">
                <span class="material-symbols-outlined">format_size</span>
                <span class="menu-text">Formularios</span>      
            </router-link>
            <router-link class="menu-button" to="/links">
                <span class="material-symbols-outlined">Link</span>
                <span class="menu-text">Enlaces</span>      
            </router-link>
        </div>
    </aside>
</template>
<style lang="scss" scoped>
aside{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--light-black);
    color: var(--white);
    transition: 0.2s;
    .logo{
        margin-bottom: .5rem;
        img{
            width: 2rem;
        }
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: .2s;
        .menu-toggle{
            transition: .2s;
            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--white);
                transition: .5s;
            }
            &:hover{
                .material-symbols-outlined{
                    color: var(--light-stetic-green);
                    transform: translateX(.3rem);
                }
            }
        }
    }

    .menu-button .menu-text{
        opacity: 0;
        transition: .3s;
    }
    .menu{
        margin: 0 -1rem;
        .menu-button{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: .5rem 1rem;
            transition: .2s;
            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--white);
                transition: .2s;
            }
            .menu-text{
                color: var(--white);
                transition: .2s;
            }
            &:hover, &.router-link-exact-active{
                background-color: var(--light-black-alternative);
                .material-symbols-outlined, .menu-text{
                    color: var(--light-stetic-green);
                    transform: translateX(.2rem);
                }
            }
            &.router-link-exact-active{
                border-right: 5px solid var(--light-stetic-green);
            }
        }
    }

    &.expanded{
        width: 300px;
        .menu-toggle-wrap{
            top: -4rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }
        .menu-button .menu-text{
        opacity: 1;
        }
        .menu-button{
            .material-symbols-outlined{
                margin-right: 1rem;
            }
        }
    }
}
</style>