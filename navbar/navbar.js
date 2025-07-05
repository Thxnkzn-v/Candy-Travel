// navbar

document.addEventListener('DOMContentLoaded', () => {
  fetch('navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      setupMobileMenuToggle();
    })
    .catch(err => console.error('โหลด navbar.html ล้มเหลว:', err));
});

// mobile menu

function setupMobileMenuToggle() {
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.onclick = function () {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };
}