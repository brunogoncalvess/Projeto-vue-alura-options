<template>
  <header>
    <h1>
      <img src="../assets/vue.svg" alt="">
    </h1>

    <button class="button" @click="alterarTema">Trocar Tema</button>

    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link class="link" to="/">
            <i class="fas fa-tasks"></i>
            Home
          </router-link>
        </li>
        <li>
          <router-link class="link" to="/projetos">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BarraLateral',
  methods: {
    alterarTema() {
      document.querySelector('main')!.classList.toggle('dark')
    }
  }
})

</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}

.panel li {
  margin: 8px 0;  
}

.link {
  color: #ffff;
}

.link.router-link-active {
  color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>