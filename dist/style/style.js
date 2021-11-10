
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header-sticky')
    if(window.scrollY > 50) {
        navbar.classList.add('header-scroll')
    }
    if(window.scrollY <= 40) {
        navbar.classList.remove('header-scroll')
    }
})