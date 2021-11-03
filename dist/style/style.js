
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('nav-sticky')
    if(window.scrollY > 50) {
        navbar.classList.add('navbar-scroll')
    }
    if(window.scrollY <= 40) {
        navbar.classList.remove('navbar-scroll')
    }
})