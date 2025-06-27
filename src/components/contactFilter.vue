<template>
    <!-- Liaison en lecture seule avec modelValue (valeur actuelle du parent) -->
    <!-- Déclenche un événement de mise à jour quand l'utilisateur tape -->
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" placeholder="Rechercher..." />
</template>

<script setup>
// Props en lecture seule
defineProps({
    modelValue: String,
})
</script>
