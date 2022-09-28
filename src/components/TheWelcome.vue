<script setup lang="ts"></script>

<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Importe seus dados!</template>
    <input type="file" accept=".csv" /><br /><br />
    <button>Importar</button>
  </WelcomeItem>
</template>
<script>
import WelcomeItem from "./WelcomeItem.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>
