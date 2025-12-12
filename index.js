const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

toggleBtn && toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    
    toggleBtn.setAttribute('aria-expanded', isOpen);
    
    toggleBtn.classList.toggle('active', isOpen);
});