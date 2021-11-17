const hamburgerButton = document.getElementById('hamburger')
const NavList = document.getElementById('nav-list')

function toggleButton() {
    NavList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)