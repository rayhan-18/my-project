// Toggle Dark Mode
const toggle = document.getElementById("toggleDark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Demo Form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const result = document.getElementById('formResult');
  result.textContent = 'Terima kasih! Pesan Anda dicatat (demo).';
  this.reset();
});
