import { createRouter, createWebHistory } from "vue-router";
import Boton from '../views/Boton.vue'
import Barra from '../views/Busqueda.vue'
import Link from '../views/Link.vue'
import Home from '../views/Home.vue'
const router = createRouter({
    history: createWebHistory('/PatronDiseno/'),
    routes: [{
        path: '/',
        component: Home
    },{
        path: '/boton',
        component: Boton
    },{
        path: '/barras-busqueda',
        component: Barra
    },{
        path: '/links',
        component: Link
    }]
})

export default router