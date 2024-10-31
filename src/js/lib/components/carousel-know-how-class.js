import $ from '../core';



export default class carouselKnowHow {
    constructor() {
        this.parent = document.querySelector('.know-how');
        this.width = window.getComputedStyle(this.parent.querySelector('.carousel-inner')).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.slidesField = this.parent.querySelector('.carousel-slides');
        this.slides = this.parent.querySelectorAll('.carousel-item');
        this.dots = this.parent.querySelectorAll('.carousel__indicators li');
        this.knowHow = this.parent.querySelectorAll('.know-how__item');
        this.howNum = this.parent.querySelectorAll('.know-how__number');
        this.howSubtitle = this.parent.querySelectorAll('.know-how__subtitle');

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
        //для know-how__item
        this.knowHow.forEach(item => item.classList.remove('know-how__width'));
        this.howNum.forEach(item => item.classList.remove('know-how__active'));
        this.howNum.forEach(item => item.classList.remove('know-how__number-active'));
        this.howSubtitle.forEach(item => item.classList.remove('know-how__active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
    }
    funAddClass(i=0) {
        this.knowHow[i].classList.add('know-how__width');
        this.howNum[i].classList.add('know-how__active');
        this.howNum[i].classList.add('know-how__number-active');
        this.howSubtitle[i].classList.add('know-how__active');
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
    frame() {
        for (let i = 0; i < this.knowHow.length; i++) {
            this.knowHow[i].addEventListener('click', (e) => {
                const slideTo = this.knowHow[i].getAttribute('data-tap');
                this.slideIndex = slideTo;
                this.offset = +this.width * slideTo;

                this.slidesField.style.transform = `translateX(-${this.offset}px)`;
                //для know-how__item
                this.remove();
                // this.parent.querySelector(`[data-tap="${+this.slideIndex}"]`).classList.add('know-how__width');
                // this.dots[this.slideIndex].classList.add('active');
                this.funAddClass(+this.slideIndex);
            })
        }
    }
    reset() {
        //чистим временные данные у слайдера
        // carousel-slides width: 500%; transform: translateX(-1440px);
        // carousel-item width: 1440px;
        // this.width = window.getComputedStyle(this.parent.querySelector('.carousel-inner')).width.split('.')[0].replace(/\D/g, '');
        this.slidesField.style.width = '';
        this.slidesField.style.transform = '';
        this.slides.forEach(slide => {
            slide.style.width = '';
        });
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[0].classList.add('active');
        this.offset = 0;
        this.slideIndex = 0;
        this.remove();
        this.funAddClass()
    }
    render() {
        this.slidesField.style.width = 100 * this.slides.length + '%';
        this.slides.forEach(slide => {
            slide.style.width = this.width + 'px';
        });
        this.clickNext();
        this.clickPrev();
        this.indicators();
        this.frame();
    }
}
