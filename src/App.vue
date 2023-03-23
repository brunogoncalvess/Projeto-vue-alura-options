<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/Barra-Lateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  }
});
</script>

<template>
  <main class="columns is-gapless is-multiline conteudo">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Notificacoes />
      <!-- Aqui vai a view correspondente -->
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
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
  color: var(--texto-primario);
}

</style>
