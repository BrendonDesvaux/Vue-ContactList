<template>
  <ul>
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
      @supprimer="emit('supprimer', contact.id)"
    />
  </ul>
</template>

<script setup>
import ContactItem from './ContactItem.vue'

defineProps({ contacts: Array })
const emit = defineEmits(['supprimer'])
</script>

