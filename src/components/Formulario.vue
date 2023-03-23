<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de nova tarefa!"
      >
        <input
          v-model="input"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>

      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option v-for="projeto in projetos" :key="projeto.id" :value="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="column">
      <Temporizador @temporizador-finalizado="finalizarTarefa"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import { useProjetoStore } from '../stores/projetos.js'

export default defineComponent({
  name: "Formulario",

  components: {
    Temporizador
  },

  emits: ['salvaTarefa'],

  data() {
    return {
      input: '',
      idProjeto: '',
      projetos: useProjetoStore().projetos
    }
  },

  methods: {
    finalizarTarefa(tempoDecorrido: number) {
      this.$emit('salvaTarefa', { 
        duracaoEmSegundos: tempoDecorrido,
        tarefa: this.input,
        projeto: this.projetos.find(p => p.id === this.idProjeto)
      })

      this.input = ''
    }
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>