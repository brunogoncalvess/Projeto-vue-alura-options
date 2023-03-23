<template>
<div class="box has-text-weight-bold lista">
  <slot></slot>
</div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Box'
})
</script>

<style scoped>
.lista {
  background: rgb(255, 202, 112);
}
</style>