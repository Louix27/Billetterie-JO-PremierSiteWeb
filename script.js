// `script.js` — add this file and include it in each HTML just before </body>
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => navbar.classList.toggle('active'));
    // close menu when a link is clicked (mobile)
    navbar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navbar.classList.remove('active')));
}