<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import type { iTarefa } from "../interfaces/tarefa";
import { useProjetoStore } from "../stores/projetos";

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as iTarefa[],
    };
  },
  methods: {
    salvaTarefa(tarefa: iTarefa) {
      this.tarefas.push(tarefa);

      // const adicionaProjeto = useProjetoStore().adicionaProjeto()
      // adicionaProjeto(tarefa.tarefa)
    },
  },
});
</script>

<template>
  <Formulario @salvaTarefa="salvaTarefa" />

  <div class="lista">
    <Tarefa v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" />
    <Box v-if="!tarefas.length"> Nenhuma tarefa inserida no momento. </Box>
  </div>
</template>

<!-- <style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.dark {
  --bg-primario: #2d2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style> -->
