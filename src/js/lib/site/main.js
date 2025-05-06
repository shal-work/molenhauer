import scrolling from '../components/scrolling';
import SliderClass from '../components/slider-class';
import CarouselKnowHow from '../components/carousel-know-how-class';
import CarouselKeyPlayersLogo from '../components/carousel-key-players-logo-class';
import tnAtom from '../components/tn-atom';

// работа с бургером
// Добавляем класс active, для замены бургера на крестик (это в css)
$('.navbar-toggle').on('click', function() {
    $('.burger').toggleClass('active');
});


let isClick = true;
$.prototype.dropdownFadeLeft = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            let toggleIsClick = () => {
                isClick ?  isClick = false : isClick = true;
            }
            if (isClick) {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeOutRight");
                $(`[data-toggle-id="${id}"]`).addClass("fadeInRight");
                $(`[data-toggle-id="${id}"]`).fadeIn(5, 'flex' , toggleIsClick);
                $('.language').addClass('language-show');
                $('body').addClass('none-scroll'); //чтобы не прокручивалась страница пока открыто меню
            } else {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeInRight");
                $(`[data-toggle-id="${id}"]`).addClass("fadeOutRight");
                $(`[data-toggle-id="${id}"]`).fadeOut(500, toggleIsClick);
                $('.language').removeClass('language-show');
                $('body').removeClass('none-scroll');//чтобы не прокручивалась страница пока открыто меню
            }
        });
    }
};
$('.navbar-toggle').dropdownFadeLeft();
// удаляем меню после click
$('.collapse').on('click', function() {
    if (window.getComputedStyle(document.querySelector('.navbar-toggle')).display != 'none') {
        let item= document.querySelectorAll('.collapse');
        item.forEach((item) => item.style.display = 'none');
        $('.burger').toggleClass('active');
        isClick ?  isClick = false : isClick = true;
        $('body').removeClass('none-scroll');
    }
});

// для experience
let isMake = true;
$.prototype.showPicture = function() {
    for (let i = 0; i < this.length; i++) {
        const howNum = this[i].querySelectorAll('.experience__number');
        $(this[i]).click((e) => {
            e.preventDefault();
            if (isMake) {
                isMake = false;
                // $(this[i]).find('.experience__picture').fadeToggle(100, ,isFun());
                $(this[i]).find('.experience__picture').fadeToggle(400, 'block', function(){isMake = true});
                // $(this[i]).find('.experience__picture').fadeToggle(800);
                $(this[i]).find('.experience__number').toggleClass('experience__color-white');
                $(this[i]).find('.experience__number').toggleClass('experience__number-active');
                $(this[i]).find('.experience__subtitle').toggleClass('experience__color-white');
                $(this[i]).toggleClass('experience__item-shadow');
            }
        });
    }
};
$('.experience__item').showPicture();

// Carousel
const cExperience = new SliderClass ({
    selector: '.experience',
    inner: '.experience__inner',
    slides: '.experience__content',
    items: '.experience__item',
    btnsNext: '',
    btnsPrev: '',
    indicators: '.carousel__indicators li'
  }
);
const cKeyPlayersSay = new SliderClass (
    {
        selector: '.key-players__clients-say',
        inner: '.key-players__content-say',
        slides: '.key-players__content-slides',
        items: '.key-players__content-item',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]',
        indicators: '.carousel__indicators li'
    }
);
const cKnowHow = new CarouselKnowHow ( //extends SliderClass
    {
        selector: '.know-how',
        inner: '.know-how__exhibition',
        slides: '.know-how__exhibition-slides',
        items: '.know-how__exhibition-item',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]',
        indicators: '.carousel__indicators li'
    }
);
const cKeyPlayersLogo = new CarouselKeyPlayersLogo ( //extends SliderClass
    {
        selector: '.key-players__logo-inner',
        inner: '.key-players__logo-wap',
        slides: '.key-players__logo-carousel',
        items: '.key-players__logo-item',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]',
        indicators: '.carousel__indicators li'
    }
);



window.addEventListener('DOMContentLoaded', (e) => {
    //делаем актуальный размер фона для правильной работа с навигацией якорей
    elementHaight();
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            if(anchor.hash){
                e.preventDefault()
                const blockID = anchor.getAttribute('href').substring(1);
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }
    widthWidow = e.currentTarget.innerWidth;

    cExperience.render();
    cKeyPlayersSay.render();
    cKnowHow.render();
    cKeyPlayersLogo.render();
    //добавляю tn-atom
    //определяю высоту сайта
    tnAtom();



    const ymapLink = document.querySelectorAll('.ymaps-2-1-79-copyright__link');
    for (let i = 0; i < ymapLink.length; i++) {
        debugger
        ymapLink[i].setAttribute("data-filter", "pillows");
    }
});

let widthWidow = 0;
window.addEventListener('resize', (e) => {
    if (widthWidow !== e.target.outerWidth) {
        // делаем актуальный размер фона
        elementHaight();
        widthWidow = e.currentTarget.innerWidth;
        cExperience.reset();
        cKeyPlayersSay.reset();
        cKnowHow.reset();
        cKeyPlayersLogo.reset();
        tnAtom();
    }
    
});

// работа с навигацией якорей
function elementHaight() {
    let height = document.querySelector('.supportive').clientHeight;
    document.querySelector('.element').style.height = height + 'px';
}

//обработка scroll plan
$('.up-ico').on('click', function() {
    const elem = document.querySelector('.experience');
    // window.scrollBy(0, window.innerHeight);
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
scrolling('.pageup');

$('.pageup .up-ico').on('click', function() {
    const elem = document.querySelector('.header');
    // window.scrollBy(0, window.innerHeight);
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

let isModal = false;
$.prototype.showPerson = function() {
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia sequi impedit obcaecati ad! Quis assumenda itaque, eligendi, optio rerum cumque ipsum, nam eum veniam incidunt vero consequuntur iste blanditiis!"

    for (let i = 0; i < this.length; i++) {
        const contentModal =
        `<div class='modal'>
            <div class="modal__person">
                ${$(this[i]).html()}
            </div>
            <div class="modal__text">${text}</div>
        </div>`;

        $(this[i]).click((e) => {
            e.preventDefault();
            const content = $(this[i]).find('.modal__person').html();
            if (!isModal) {
                $(this[i]).html(contentModal);
                $(this[i]).addClass('person__item-modal');
                $(this[i]).find('.person__photo').addClass('modal__photo');
                isModal = true;
            } else {
                if ($(this[i]).find('.modal').length) {
                    isModal = false;
                    $(this[i]).html(content);
                    $(this[i]).removeClass('person__item-modal');
                    $(this[i]).find('.person__photo').removeClass('modal__photo');
                }
                }
        });
    }
};
$('.person__item').showPerson();


//запрет для переход по <a href="#" class="plane__text">
$('.plane__text').on('click', function(e) {
    e.preventDefault();
});
$('.person__describe').on('click', function(e) {
    
});
$('.leader__action').on('click', function(e) {
    e.preventDefault();
});

