export default class carouselKeyPlayersLogo {
    constructor() {
        this.parent = document.querySelector('.key-players__logo-inner');
        this.carouselWidth = window.getComputedStyle(this.parent.querySelector('.key-players__logo-carousel')).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.widthWindow = window.getComputedStyle(this.parent.querySelector('.key-players__logo-wap')).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.item = this.parent.querySelectorAll('.key-players__logo-item');
        // this.width = window.getComputedStyle(this.item[0]).width.split('.')[0].replace(/\D/g, '');
        this.slidesField = this.parent.querySelector('.key-players__logo-carousel');
        this.dots = this.parent.querySelectorAll('.carousel__indicators li');
        this.prev = this.parent.querySelector('.key-players__prev');
        this.next = this.parent.querySelector('.key-players__next');

        this.offset = 0 ;
        this.slideIndex = 0;
        // this.quantityInWindow = Number((this.widthWindow / this.width).toFixed());
        this.quantityInWindow = 4;

    }

    clearLinnear() {
        let n = this.offset / this.width;
        this.item.forEach(slide => {
            slide.classList.remove('key-players__logo-item-line-zero');
        });
        if(this.quantityInWindow == 4) {
            this.item[this.quantityInWindow - 1 + n].classList.add('key-players__logo-item-line-zero')
        }
    }

    icoActive () {
        let edge = this.width * (this.item.length - this.quantityInWindow);
        if (+this.offset <= 0) {
            this.prev.classList.remove('key-players__active');
            this.next.classList.add('key-players__active');
        } else if ((this.offset > 0) && (this.offset < edge)) {
            this.prev.classList.add('key-players__active');
            this.next.classList.add('key-players__active')
        } else if (+this.offset >= +edge) {
            this.prev.classList.add('key-players__active');
            this.next.classList.remove('key-players__active');
        }
    }

    clickNext() {
        this.parent.querySelector('[data-slide="next"]').addEventListener('click', (e) => {
            e.preventDefault();
            if (this.offset !== (+this.width * (this.item.length - this.quantityInWindow))) {
                this.offset += +this.width;
                this.slidesField.style.transform = `translateX(-${this.offset}px)`;
            }
            this.icoActive();
            this.clearLinnear();
        })
    }
    clickPrev() {
        this.parent.querySelector('[data-slide="prev"]').addEventListener('click', (e) => {
            e.preventDefault();
            if (this.offset !== 0) {
                this.offset -= +this.width;
                this.slidesField.style.transform = `translateX(-${this.offset}px)`;
            }
            this.icoActive();
            this.clearLinnear();
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
                this.dots.forEach(dot => dot.classList.remove('active'));
                this.dots[this.slideIndex].classList.add('active');

            });
        }
    }
    reset() {
        this.carouselWidth = window.getComputedStyle(this.parent.querySelector('.key-players__logo-carousel')).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.widthWindow = window.getComputedStyle(this.parent.querySelector('.key-players__logo-wap')).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.item = this.parent.querySelectorAll('.key-players__logo-item');

        // this.width = window.getComputedStyle(this.item[0]).width.split('.')[0].replace(/\D/g, '');

        this.slideIndex = 0;
        this.offset = 0;

        this.width = this.widthWindow / this.quantityInWindow;
        this.slidesField.style.transform = '';
        this.item.forEach(slide => {
            slide.style.width = this.width +'px';
        });
        this.icoActive();
        this.clearLinnear();
    }
    render() {
        const screenWidth = window.screen.width;
        if (screenWidth >= 920) {
            this.quantityInWindow = 4;
        } else {
            this.quantityInWindow = 3;
        }
        this.width = this.widthWindow / this.quantityInWindow;
        this.item.forEach(slide => {
            slide.style.width = this.width +'px';
        });
        this.clickNext();
        this.clickPrev();
        this.indicators();
        this.clearLinnear();
    }
}
