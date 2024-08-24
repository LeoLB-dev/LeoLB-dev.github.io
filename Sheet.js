const scriptURL = 'https://script.google.com/macros/s/AKfycbzPhB8aK9h3C6mURxihH-6f8QP-Y5G_6jIi2846csje3HpGno6fk6626OSMPcqiQicJog/exec'

const form = document.forms['contact-form']
const submitButton = document.getElementById('submit')
const submitText = document.getElementById('submit-text')
const loader = document.getElementById('loader')

form.addEventListener('submit', e => {
  e.preventDefault()

  // Affiche le loader et masque le texte du bouton
  submitText.style.display = 'none'
  loader.style.display = 'inline-block'
  submitButton.disabled = true

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // Réinitialise le bouton immédiatement après la réponse
    submitText.style.display = 'inline'
    loader.style.display = 'none'
    submitButton.disabled = false

    // Affiche la pop-up
    alert("Merci ! Reviens demain ;)")
    
    // Recharge la page
    window.location.reload()
  })
  .catch(error => {
    console.error('Erreur! Contacte Léo. Plus de détail :', error.message)

    // Réinitialise le bouton en cas d'erreur
    submitText.style.display = 'inline'
    loader.style.display = 'none'
    submitButton.disabled = false
  })
})






/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbzPhB8aK9h3C6mURxihH-6f8QP-Y5G_6jIi2846csje3HpGno6fk6626OSMPcqiQicJog/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Merci ! Reviens demain ;)" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Erreur! Contacte Léo. Plus de détail :', error.message))
})
*/
