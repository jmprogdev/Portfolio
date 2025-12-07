document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const navbar = document.querySelector('.navbar');
    if (body.classList.contains('dark-mode')) {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    }
});