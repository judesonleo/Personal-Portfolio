
  document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.first-letter, .second-letter, .third-letter, .fourth-letter, .fifth-letter,.sixth-letter,.seven-letter,.eight,.nine,.ten');
    
    letters.forEach((letter, index) => {
      letter.style.animation = `colorFlow 0.1 linear forwards ${index}s`;
    });
      });
  
  document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.first-letter, .second-letter, .third-letter, .fourth-letter, .fifth-letter,.sixth-letter,.seven-letter,.eight,.nine,.ten');
    
    letters.forEach((letter, index) => {
      letter.style.animation = `colorFlow 4s linear  ${index}s`;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.first-letter, .second-letter, .third-letter, .fourth-letter, .fifth-letter,.sixth-letter,.seven-letter,.eight,.nine,.ten');
    
    letters.forEach((letter, index) => {
      letter.style.animation = `colorFlow 7s linear  ${index}s`;
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.querySelector('.p-letter');
    paragraph.style.animation = 'colorFlow 10s linear forwards';
  });
  