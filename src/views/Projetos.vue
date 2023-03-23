<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>

    <table class="table" v-if="projetos.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt" />
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="deleta(projeto)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

  </section>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";
import iProjeto from "../interfaces/projeto.js";
import { useProjetoStore } from '../stores/projetos.js'

export default defineComponent({
  name: "Projetos",
  data() {
    return {
      projetos: useProjetoStore().projetos,
    };
  },
  methods: {
    deleta(projeto: iProjeto) {
      if (confirm(`Deletar o projeto ${projeto.nome}?`)) {
        useProjetoStore().deletaProjeto()(projeto.id)
      }
    }
  },
});
</script>

<style scoped>
 .projetos {
  padding: 1.25rem
 }
</style>
