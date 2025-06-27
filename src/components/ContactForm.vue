<template>
  <form @submit.prevent="soumettre">
    <input v-model="form.nom" placeholder="Nom" required />
    <input v-model="form.prenom" placeholder="Prénom" required />
    <input v-model="form.telephone" placeholder="Téléphone" required />
    <input v-model="form.email" placeholder="Email" required />
    <button type="submit">Ajouter</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['ajouter'])

const form = ref({
  nom: '',
  prenom: '',
  telephone: '',
  email: ''
})

function soumettre() {
  emit('ajouter', { ...form.value })
  form.value = { nom: '', prenom: '', telephone: '', email: '' }
}
</script>
<style>
form{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
input{
  padding:15px;
}

button{
  padding: 15px;
}
</style>