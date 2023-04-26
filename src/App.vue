<script setup>
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue'
</script>
<template>
  <div class="main-container">
    <Sidebar />
    <router-view />
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

:root{
--light-stetic-green: #4ade80;
--light-grey: #64748b;
--light-black: #1e293b;
--light-black-alternative: #334155;
--white: #f1f5f9;
--dark-green: #308a51;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', monospace;
  scroll-behavior: smooth;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] { appearance:textfield; }

.main-container{
  display: flex;
  main{
    flex: 1 1 0;
    padding: 2rem;
  }
}
button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
body::-webkit-scrollbar{
  -webkit-appearance: none;
}
body::-webkit-scrollbar-thumb{
  background-color: var(--light-stetic-green);
  border-radius: 20px;
  &:hover{
    background-color: var(--dark-green);
  }
}
body::-webkit-scrollbar-track{
  border-radius: 10px;
}
body::-webkit-scrollbar:vertical{
  width: 7px;
}
</style>