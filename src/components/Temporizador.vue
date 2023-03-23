<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempo" />
    <button class="button iniciar" @click="iniciar" :disabled="cronometroRodando">
      <i class="fas fa-play"></i>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",
  data() {
    return {
      tempo: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  emits: ['temporizadorFinalizado'],
  components: {
    Cronometro
  },
  computed: {
    tempoAtualizado() {
      return new Date(this.tempo * 1000).toISOString().substring(11, 19)
    }
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempo += 1
      }, 1000)
    },
    finalizar() {
      this.cronometroRodando = false
      clearInterval(this.cronometro)
      this.$emit('temporizadorFinalizado', this.tempo)
      this.tempo = 0
    },
  },
});
</script>