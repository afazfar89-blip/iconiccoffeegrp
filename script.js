// ===== Hamburger Menu =====
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// ===== Hero Typing Effect =====
const text = ["Learn Coffee Art", "Master Baking", "Become Certified"];
let count = 0, index = 0, currentText = "", letter = "";
(function type(){
  if(count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typed-text').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
    setTimeout(type,1500);
  } else {
    setTimeout(type,150);
  }
})();