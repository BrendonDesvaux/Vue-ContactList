// src/models/contact.js

export function createContact({ nom, prenom, telephone, email }) {
    return {
        id: Date.now(),
        nom: nom.trim(),
        prenom: prenom.trim(),
        telephone: telephone.trim(),
        email: email.trim(),
    }
}

export function isValidContact(contact) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const telRegex = /^[0-9]{10}$/

    return (
        contact.nom &&
        contact.prenom &&
        telRegex.test(contact.telephone) &&
        emailRegex.test(contact.email)
    )
}
