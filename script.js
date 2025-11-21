// script.js - demo interaksi form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const result = document.getElementById('formResult');
  result.textContent = 'Terima kasih! Pesan Anda dicatat (demo).';
  this.reset();
});
