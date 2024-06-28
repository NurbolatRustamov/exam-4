const menu = document.querySelector('menuToggle')
const navBar = document.getElementById('navMenu')


menu.addEventListener('click', () => {
    navBar.classList.toggle('active')
})