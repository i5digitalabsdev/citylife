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

$('.owl-one').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})

$('.owl-three').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})

$('.owl-four').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})

$('.owl-five').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})

$('.owl-six').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})

$('.owl-seven').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})


$('.owl-eight').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true,
})



var owl = $('.owl-one');
owl.owlCarousel();
$('.cust-next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.cust-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

var owl1 = $('.owl-three');
owl1.owlCarousel();
$('.cust-next1').click(function() {
    owl1.trigger('next.owl.carousel');
})
$('.cust-prev1').click(function() {
    owl1.trigger('prev.owl.carousel', [300]);
})


var owl2 = $('.owl-four');
owl2.owlCarousel();
$('.cust-next2').click(function() {
    owl2.trigger('next.owl.carousel');
})
$('.cust-prev2').click(function() {
    owl2.trigger('prev.owl.carousel', [300]);
})

var owl3 = $('.owl-five');
owl3.owlCarousel();
$('.cust-next3').click(function() {
    owl3.trigger('next.owl.carousel');
})
$('.cust-prev3').click(function() {
    owl3.trigger('prev.owl.carousel', [300]);
})

var owl4 = $('.owl-six');
owl4.owlCarousel();
$('.cust-next4').click(function() {
    owl4.trigger('next.owl.carousel');
})
$('.cust-prev4').click(function() {
    owl4.trigger('prev.owl.carousel', [300]);
})

var owl5 = $('.owl-seven');
owl5.owlCarousel();
$('.cust-next5').click(function() {
    owl5.trigger('next.owl.carousel');
})
$('.cust-prev5').click(function() {
    owl5.trigger('prev.owl.carousel', [300]);
})



