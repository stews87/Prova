// === ANNO AUTOMATICO NEL FOOTER ===
document.getElementById('year').textContent = new Date().getFullYear();

// === FORM VELOCE ===
document.getElementById('quickForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Richiesta inviata! (qui puoi collegare il form al tuo backend)');
  this.reset();
});

// === FORM CONTATTI ===
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Messaggio inviato! (inserisci la logica per l\'invio e-mail o API)');
  this.reset();
});