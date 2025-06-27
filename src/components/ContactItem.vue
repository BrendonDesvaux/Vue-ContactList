<template>
  <li>
    {{ contact.nom }} {{ contact.prenom }} — {{ contact.telephone }} — {{ contact.email }}
    <button @click="emit('supprimer')">Supprimer</button>
  </li>
</template>

<script setup>
defineProps({ contact: Object })
const emit = defineEmits(['supprimer'])
</script>
