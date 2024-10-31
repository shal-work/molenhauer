import $ from '../core';


export default class carouselKeyPlayersSay {
    constructor() {
        this.parent = document.querySelector('.key-players__clients-say');
        this.width = window.getComputedStyle(this.parent.querySelector('.carousel-inner')).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.slidesField = this.parent.querySelector('.carousel-slides');
        this.slides = this.parent.querySelectorAll('.carousel-item');
        this.dots = this.parent.querySelectorAll('.carousel__indicators li');

        this.logo = document.querySelectorAll('.key-players__logo-item');

        this.offset = 0;
        this.slideIndex = 0;
    }

    initOfset(ind) {
        switch (ind) {
            case 'next':
                if (this.offset == (+this.width.replace(/\D/g, '') * (this.slides.length - 1))) {
                    this.offset = 0;
                } else {
                    this.offset += +this.width.replace(/\D/g, '');
                }
                break;
            default:
                if (this.offset == 0) {
                    this.offset = +this.width.replace(/\D/g, '') * (this.slides.length - 1);
                } else {
                    this.offset -= +this.width.replace(/\D/g, '');
                }
                break;
        }
    }

    remove() {
        this.dots.forEach(dot => dot.classList.remove('active'));
    }
    funAddClass(i=0) {
        this.dots[i].classList.add('active');
    }

    index(ind) {
        switch (ind) {
            case 'next':
                if (this.slideIndex == this.slides.length - 1) {
                    this.slideIndex = 0;
                } else {
                    this.slideIndex++;
                }
                break;
            default:

                if (this.slideIndex == 0) {
                    this.slideIndex = this.slides.length - 1;
                } else {
                    this.slideIndex--;
                }
                break;
        }
    }
    clickNext() {

        this.parent.querySelector('[data-slide="next"]').addEventListener('click', (e) => {
            e.preventDefault();
            this.initOfset("next");
            this.slidesField.style.transform = `translateX(-${this.offset}px)`;
            this.index("next");
            this.remove();
            this.funAddClass(+this.slideIndex);
        })
    }

    clickPrev() {
        this.parent.querySelector('[data-slide="prev"]').addEventListener('click', (e) => {
            e.preventDefault();
            this.initOfset("prev");
            this.slidesField.style.transform = `translateX(-${this.offset}px)`;
            this.index("prev");
            this.remove();
            this.funAddClass(+this.slideIndex);
        });
    }
    indicators() {
        const li = this.parent.querySelectorAll('.carousel__indicators li');
        for (let i = 0 ; i < li.length; i++) {
            li[i].addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
                this.slideIndex = slideTo;
                this.offset = +this.width * slideTo;
                this.slidesField.style.transform = `translateX(-${this.offset}px)`;
                this.remove();
                this.funAddClass(+this.slideIndex);
            });
        }
    }
    clickLogo() {
        for (let i = 0; i < this.logo.length; i++) {
            this.logo[i].addEventListener('click', (e) => {
                this.reset();
            })
        }
    }
    reset() {
        //чистим временные данные у слайдера
        // carousel-slides width: 500%; transform: translateX(-1440px);
        // carousel-item width: 1440px;
        this.width = window.getComputedStyle(this.parent.querySelector('.carousel-inner')).width.split('.')[0].replace(/\D/g, '');

        this.slidesField.style.transform = '';
        this.slidesField.style.width = 100 * this.slides.length + '%';
        this.slides.forEach(slide => {
            slide.style.width = this.width +'px';
        });

        this.offset = 0;
        this.slideIndex = 0;
        this.remove();
        this.funAddClass();
        this.clickLogo();
    }
    render() {
        this.slidesField.style.width = 100 * this.slides.length + '%';
        this.slides.forEach(slide => {
            slide.style.width = this.width + 'px';
        });
        this.clickNext();
        this.clickPrev();
        this.indicators();
        this.clickLogo();
    }
}
