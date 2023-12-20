document.addEventListener('DOMContentLoaded', function () {
    var menuIcono = document.querySelector('.menuicono');
    var menu = document.querySelector('.menu');
    var movilMenu = document.querySelector('.movilmenu');

    menuIcono.addEventListener('click', function () {
        menu.classList.toggle('active');
        movilMenu.classList.toggle('active');
    });
});
