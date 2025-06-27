<template>
  <main>
    <h1>Annuaire de contacts</h1>
    <ContactForm @ajouter="ajouterContact" />
    <ContactFilter v-if="contacts.length" v-model="filtre" />
    <p v-else>Aucun contact pour l’instant.</p>
    <ContactList :contacts="contactsFiltres" @supprimer="supprimerContact" />
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useLocalStorage } from './composables/useLocalStorage'
import { createContact, isValidContact } from './models/contact'

import ContactForm from './components/ContactForm.vue'
import ContactList from './components/ContactList.vue'
import ContactFilter from './components/ContactFilter.vue'

// Données persistées
const contacts = useLocalStorage('contacts', [])

// Recherche
const filtre = ref('')

// Ajoute un contact validé
function ajouterContact(data) {
  const contact = createContact(data)
  if (isValidContact(contact)) {
    contacts.value.push(contact)
  } else {
    alert('Données invalides.')
  }
}

// Supprime par ID
function supprimerContact(id) {
  contacts.value = contacts.value.filter(c => c.id !== id)
}

// Liste filtrée
const contactsFiltres = computed(() => {
  const val = filtre.value.toLowerCase()
  return contacts.value.filter(c =>
    c.nom.toLowerCase().includes(val) || c.prenom.toLowerCase().includes(val)
  )
})
</script>
