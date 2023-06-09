import { createRouter, createWebHashHistory } from 'vue-router'
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'

const routes = [
  {
    path: '/',
    name: 'Tarefa',
    component: Tarefas,
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos,
  },
  {
    path: '/projetos/novo',
    name: 'Novo Projetos',
    component: Formulario,
  },
  {
    path: '/projetos/:id',
    name: 'Editar Projetos',
    component: Formulario,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router