$(document).ready(function () {
    
    $("#menu-icon").click(function () {
        $("#nav-bar").fadeToggle('fast');
    });

    
});

function animateMenu(menu){
    menu.classList.toggle('change')
}

$('.owl-two').owlCarousel({
    loop:true,
    items:2,
    margin:5,
    nav:false,
    dots:true,
    center:true
})


