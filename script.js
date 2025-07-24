// Initialize AOS
AOS.init();

// Form handler
document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("شكرًا لانضمامك إلى الحملة!");
  this.reset();
});
