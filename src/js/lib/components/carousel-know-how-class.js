import SliderClass,  {CLASS_INDICATOR_ACTIVE} from './slider-class';

const CLASS_CONTROL_DISABLED = 'know-how__control-disabled';

export default class CarouselKnowHow extends SliderClass {
	constructor(selector, inner, slides, items, btnsNext, btnsPrev, indicators ) {
        super(selector, inner, slides, items, btnsNext, btnsPrev, indicators);
        this.iconNext = this.carousel.querySelector('.know-how__next-icon');
        this.iconPrev = this.carousel.querySelector('.know-how__prev-icon');
        this.knowHow = this.carousel.querySelectorAll('.know-how__item');
        this.howNum = this.carousel.querySelectorAll('.know-how__number');
        this.howSubtitle = this.carousel.querySelectorAll('.know-how__subtitle');
	}
	reset() {
		this.offset = 0;
		this.slideIndex = 0;
		this.direction = 'next';
		this.quantityInWindow = Math.round(this.inner.offsetWidth / this.items[0].offsetWidth);
		this.widthWindow = window.getComputedStyle(this.inner).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
		this.width = this.widthWindow / this.quantityInWindow;
		this.slides.style.transform = '';
		this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
		try {
			this.indicators[0].classList.add(CLASS_INDICATOR_ACTIVE);
		} catch (error) {}

		this.endIndex = this.items.length - this.quantityInWindow;
		// сделаем невидимой левую кнопку
		if (this.btnsPrev) {
			this.iconPrev.classList.add(CLASS_CONTROL_DISABLED);
		}
	}
    swipe() {
		let shiftX = 0;
		this.slides.addEventListener('mousedown', (event) => {
			shiftX = event.clientX;
		});
		this.slides.addEventListener('mouseup', (event) => {
			this.direction = (event.clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(shiftX - event.clientX);
			if (diffPos > this.width/3) {
				this.move();
			}
		});
		this.inner.addEventListener('touchstart', (event) => {
			shiftX = event.touches[0].clientX;
        }, {
            passive: true
        });

		this.inner.addEventListener('touchmove', (event) => {
			this.slides.style.transform = `translateX(${event.touches[0].clientX - shiftX + this.offset}px)`;
		}, {
			passive: true
		});

		this.inner.addEventListener('touchend', (event) => {
			this.direction = (event.changedTouches[0].clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(event.changedTouches[0].clientX - shiftX);
			this.slides.style.transform =  `translateX(${this.offset}px)`;
			if (diffPos > this.width/3) {
				this.move();
			}
		}, {
			passive: true
		});
	}
	move() {
		if (this.direction === 'next') {
			this.slideIndex++;
		} else {
			this.slideIndex--;
		}

		if (this.slideIndex > this.endIndex) {
			this.slideIndex = this.endIndex;
			return
		} if (this.slideIndex < 0) {
			this.slideIndex = 0;
			return
		}
		if(this.btnsPrev) {
			this.iconPrev.classList.remove(CLASS_CONTROL_DISABLED);
		}
		if(this.btnsNext) {
			this.iconNext.classList.remove(CLASS_CONTROL_DISABLED);
		}

		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;
		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.updateControl();
	    this.updateIndicators();
        this.remove();
        this.funAddClass(this.slideIndex);
	}
    updateControl() {
		if(this.btnsPrev) {
			this.iconPrev.classList.remove(CLASS_CONTROL_DISABLED);
  		}
		if(this.btnsNext) {
			this.iconNext.classList.remove(CLASS_CONTROL_DISABLED);
		}
		if (this.slideIndex >= this.endIndex) {
			if(this.btnsNext) {
				this.iconNext.classList.add(CLASS_CONTROL_DISABLED);
			}
		}
		if (this.slideIndex <= 0) {
			if(this.btnsPrev) {
				this.iconPrev.classList.add(CLASS_CONTROL_DISABLED);
			}
		}
	}

    funAddClass(i=0) {
        this.knowHow[i].classList.add('know-how__width');
        this.howNum[i].classList.add('know-how__active');
        this.howNum[i].classList.add('know-how__number-active');
        this.howSubtitle[i].classList.add('know-how__active');
    }
    remove() {
        //для know-how__item
        this.knowHow.forEach(item => item.classList.remove('know-how__width'));
        this.howNum.forEach(item => item.classList.remove('know-how__active'));
        this.howNum.forEach(item => item.classList.remove('know-how__number-active'));
        this.howSubtitle.forEach(item => item.classList.remove('know-how__active'));
    }
    frame() {
        for (let i = 0; i < this.knowHow.length; i++) {
            this.knowHow[i].addEventListener('click', (e) => {
                const slideTo = this.knowHow[i].getAttribute('data-tap');
                this.moveTo(slideTo);
                this.remove();
                this.funAddClass(slideTo);
            })
        }
    }

    render() {
		this.reset();
		this.clickIndicators();
		this.clickNext();
		this.clickPrev();
		this.swipe();
        this.frame();
	}
}
