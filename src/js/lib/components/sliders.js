import $ from '../core';

$.prototype.sliders = function(
                    dir = 'horizontal', 
                    slides = '.sliders-item', 
                    prev = '.sliders-prev',
                    next = '.sliders-next', paused = false) {


    let slideInNext = 'slideInLeft';
    let slideInPrev = 'slideInRight';

    let slideIndex = 1;
    // let  paused = false;

    const items = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
         });
        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        if (dir === 'vertical') { 
            slideInNext = 'slideInDown';
            slideInPrev = 'slideInUp';
        } else {
            slideInNext = 'slideInLeft';
            slideInPrev = 'slideInRight';
            //Вар- fadeIn&fadeOut
            // slideInNext = 'fadeOut';
            // slideInPrev = 'fadeIn';
        }

        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove(slideInNext);
            items[slideIndex - 1].classList.add(slideInPrev);
            //Вар-направления 
            // items[slideIndex - 1].classList.remove(slideInPrev);
            // items[slideIndex - 1].classList.add(slideInNext);
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove(slideInPrev);
            items[slideIndex - 1].classList.add(slideInNext);
            //Вар-направления 
            // items[slideIndex - 1].classList.remove(slideInNext);
            // items[slideIndex - 1].classList.add(slideInPrev);
        });

    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 2000);
        } else {

            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove(slideInNext);
                items[slideIndex - 1].classList.add(slideInPrev);

           }, 3000);
        }
    }

    if(paused) {
        activateAnimation();
    }

    
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

// $('.sliders').sliders('horizontal', '.sliders-item', ' ', ' ', true); // $.prototype.sliders = function(dir, slides, prev, next)
// $('.sliders').sliders('horizontal', '.sliders-item-mobile', ' ' , ' ' , true);

