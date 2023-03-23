<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button type="submit" class="button">Enviar</button>
      </div>
    </form>

  </section>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";
import { useProjetoStore } from '../../stores/projetos.js'
import { useNotificacaoStore } from '../../stores/notificacoes.js'

export default defineComponent({
  name: "Formulario",
  data() {
    return {
      nomeDoProjeto: "",
      projetos: useProjetoStore().projetos,
    };
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        // se esse id existe, a aplicação está na rota de edição
        // this.projetos.find(p => p.id === this.id)!.nome = this.nomeDoProjeto
        const editaProjeto = useProjetoStore().editaProjeto()
        editaProjeto(this.nomeDoProjeto, this.id)
      } else {
        const adicionaProjeto = useProjetoStore().adicionaProjeto()
        adicionaProjeto(this.nomeDoProjeto)

        useNotificacaoStore().adicionaNotificacao(
          'Um novo projeto foi salvo!', 
          'Prontinho ;) seu novo projeto já está disponível!'
        )
  
      }
      this.nomeDoProjeto = "";
      this.$router.push('/projetos')
    },
  },
  mounted() {
    this.id && (this.nomeDoProjeto = this.projetos.find(p => p.id === this.id)!.nome)
  }
});
</script>

<style scoped>
 .projetos {
  padding: 1.25rem
 }
</style>
