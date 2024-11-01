import CarouselExperience from '../components/carousel-experience-class';
import carouselKnowHow from '../components/carousel-know-how-class';
import carouselKeyPlayersLogo from '../components/carousel-key-players-logo-class';
import carouselKeyPlayersSay from '../components/carousel-key-players-say-class';
import scrolling from '../components/scrolling';
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
                $('body').addClass('none-scroll');
            } else {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeInRight");
                $(`[data-toggle-id="${id}"]`).addClass("fadeOutRight");
                $(`[data-toggle-id="${id}"]`).fadeOut(500, toggleIsClick);
                $('.language').removeClass('language-show');
                $('body').removeClass('none-scroll');
            }
        });
    }
};
$('.navbar-toggle').dropdownFadeLeft();
// удаляем меню после нажатия
$('.collapse').on('click', function() {
    if (window.getComputedStyle(document.querySelector('.navbar-toggle')).display != 'none') {
        let item= document.querySelectorAll('.collapse');
        item.forEach((item) => item.style.display = 'none');
        $('.burger').toggleClass('active');
        isClick ?  isClick = false : isClick = true;
    }
});

// для experience
let isMake = true;
$.prototype.showPicture = function() {

    for (let i = 0; i < this.length; i++) {
        const howNum = this[i].querySelectorAll('.experience__number');
        $(this[i]).click(() => {
            if (isMake) {
                isMake = false;
                // $(this[i]).find('.experience__picture').fadeToggle(100, ,isFun());
                $(this[i]).find('.experience__picture').fadeToggle(800, 'block', function(){isMake = true});
                // $(this[i]).find('.experience__picture').fadeToggle(800);
                $(this[i]).find('.experience__number').toggleClass('experience__color-white');
                $(this[i]).find('.experience__number').toggleClass('experience__number-active');
                $(this[i]).find('.experience__subtitle').toggleClass('experience__color-white');
                $(this[i]).toggleClass('experience__item-shadow');
            }
        });
    }
};
// работа с навигацией якорей

$('.experience__item').showPicture();

let widthWidow = 0;
const cKnowHow = new carouselKnowHow();
const cKeyPlayersLogo= new carouselKeyPlayersLogo();
const cKeyPlayersSay = new carouselKeyPlayersSay();
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

    const cExperience = new CarouselExperience();
    cExperience.render();
    cKnowHow.render();
    cKeyPlayersLogo.render();
    cKeyPlayersSay.render();
});

window.addEventListener('resize', (e) => {
    if (widthWidow !== e.target.outerWidth) {
        // делаем актуальный размер фона
        elementHaight();
        widthWidow = e.currentTarget.innerWidth;
        cKnowHow.reset();
        cKeyPlayersLogo.reset();
        cKeyPlayersSay.reset();
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
let isBlock = false;
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
