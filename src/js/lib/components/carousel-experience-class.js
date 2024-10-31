import $ from '../core';


export default class CarouselExperience {
    constructor() {
        this.offset = 0;
        this.slideIndex = 0;
        this.experience = document.querySelector('.experience');
        this.dots = this.experience.querySelectorAll('.carousel__indicators li');
        this.slidesField = this.experience.querySelector('.experience__content');
        this.sliderId = this.experience.getAttribute('id');
        this.indicators = this.experience.querySelectorAll(`#${this.sliderId} .carousel__indicators li`);
    }
    reset() {
        this.slidesField.style.transform = '';
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[0].classList.add('active');
    }
    render() {

        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].addEventListener('click', (e) => {
                this.reset();
                this.whidthItem = window.getComputedStyle(this.experience.querySelector('.experience__item')).width.split('.')[0].replace(/\D/g, '');
                const slideTo = e.target.getAttribute('data-slide-to');
                this.slideIndex = slideTo;
                this.offset = +this.whidthItem * slideTo;

                this.slidesField.style.transform = `translateX(-${this.offset}px)`;
                this.dots.forEach(dot => dot.classList.remove('active'));
                this.dots[this.slideIndex].classList.add('active');
            });
        }
    }
}
