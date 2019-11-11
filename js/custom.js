$(document).ready(function () {
    
    $("#menu-icon").click(function () {
        $("#nav-bar").fadeToggle('fast');
    });

    
});

function animateMenu(menu){
    menu.classList.toggle('change')
}


