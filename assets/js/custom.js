/**
 * UI variables
 */
var changeTestemonialLeft = document.querySelector('#arrow-left');
var changeTestemonialRight = document.querySelector('#arrow-right');

changeTestemonialLeft.addEventListener('click', changeLeft);
changeTestemonialRight.addEventListener('click', changeRight);

function changeLeft(e) {
    var active = document.querySelector('.show');
    var passive = document.querySelector('.no-show');

    // Clear the classes
    active.classList.remove('slideOutRight', 'slideInLeft', 'slideInRight', 'slideOutLeft');
    passive.classList.remove('slideOutRight', 'slideInLeft', 'slideInRight', 'slideOutLeft');

    // Starts the animation
    active.classList.add('slideOutLeft');
    setTimeout(function () {

        // Animates after the initial
        active.classList.remove('show');
        active.classList.add('no-show');
        passive.classList.add('slideInRight');
        passive.classList.remove('no-show');
        passive.classList.add('show');
        
    }, 500);
    

}

function changeRight(e) {
    var active = document.querySelector('.show');
    var passive = document.querySelector('.no-show');

    // Clear the classes
    active.classList.remove('slideOutRight', 'slideInLeft', 'slideInRight', 'slideOutLeft');
    passive.classList.remove('slideOutRight', 'slideInLeft', 'slideInRight', 'slideOutLeft');

    // Starts the animation
    active.classList.add('slideOutRight');
    setTimeout(function () {

        // Animates after the initial
        active.classList.remove('slideOutRight');
        active.classList.remove('show');
        active.classList.add('no-show');
        passive.classList.add('slideInLeft');
        passive.classList.remove('no-show');
        passive.classList.add('show');

    }, 500);


}

$(function ($) {

    // Call function each time the window is scrolled
    $(window).scroll(function () {

        // Look for the object
        $('.products-large-left').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // If it is in viewport add the classes
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('animated slideInLeft opacity-full');
            };

        });

        // Look for the object
        $('.products-large-right').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // If it is in viewport add the classes
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('animated slideInRight opacity-full');
            };

        });

    });
});
