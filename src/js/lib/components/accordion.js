import $ from '../core';

// $.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
$.prototype.accordion = function(headActive = 'faq-active', textActive = 'faq-text-active', titltActive = 'faq-title-active', ) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            // console.log( $(this[i]).find('.questions__faq-text'));
            $(this[i]).find('.questions__faq-text').toggleClass(textActive);
            $(this[i]).find('.questions__faq-title').toggleClass(titltActive);

        });
    }
};



// $('.accordion-head').accordion();
$('.questions__faq').accordion();
