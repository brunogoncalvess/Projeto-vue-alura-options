<template>
  <div class="notificacoes">
    <article
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
      class="message"
      :class="notificacao.class"
    >
      <div class="message-header">{{ notificacao.header }}</div>
      <div class="message-body">{{ notificacao.body }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNotificacaoStore } from "../stores/notificacoes.js";

export default defineComponent({
  name: "Notificacoes",
  data() {
    return {
      // notificacoes: useNotificacaoStore().notificacoes,
    };
  },
  computed: {
    notificacoes() {
      return useNotificacaoStore().notificacoes
    } 
  }
});
</script>

<style scoped>
.notificacoes {
  padding: 1rem;
  position: absolute;
  right: 0;
  width: 300px;
  z-index: 5;
}
</style>