import SliderClass, {CLASS_INDICATOR_ACTIVE, CLASS_CONTROL_DISABLED } from './slider-class';

// const CLASS_CONTROL_DISABLED  = 'key-players__control-disabled';

export default class CarouselKeyPlayersLogo extends SliderClass {
	constructor(selector, inner, slides, items, btnsNext, btnsPrev, indicators ) {
        super(selector, inner, slides, items, btnsNext, btnsPrev, indicators);
	}
    reset() {
		const screenWidth = window.screen.width;
        if (screenWidth >= 920) {
            this.quantityInWindow = 4;
        } else {
            this.quantityInWindow = 3;
        }
		this.offset = 0;
		this.slideIndex = 0;
		this.direction = 'next';
		this.widthWindow = window.getComputedStyle(this.inner).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        this.width = this.widthWindow / this.quantityInWindow;
        this.items.forEach(slide => {
            slide.style.width = this.width +'px';
        });

		this.slides.style.transform = '';

		try {
            this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
			this.indicators[0].classList.add(CLASS_INDICATOR_ACTIVE);
		} catch (error) {}

		this.endIndex = this.items.length - this.quantityInWindow;
		this.clearLinnear();
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
			this.btnsPrev.classList.remove(CLASS_CONTROL_DISABLED );
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(CLASS_CONTROL_DISABLED );
		}

		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;

		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.updateControl();
	    this.updateIndicators();
		this.clearLinnear();
	}
	updateControl() {
		if(this.btnsPrev) {
			this.btnsPrev.classList.remove(CLASS_CONTROL_DISABLED );
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(CLASS_CONTROL_DISABLED );
		}
		if (this.slideIndex >= this.endIndex) {
			if(this.btnsNext) {
				this.btnsNext.classList.add(CLASS_CONTROL_DISABLED );
			}
		}
		if (this.slideIndex <= 0) {
			if(this.btnsPrev) {
				this.btnsPrev.classList.add(CLASS_CONTROL_DISABLED );
			}
		}
	}
	swipe() {
		let width = window.innerWidth;

		let shiftX = 0;
		this.inner.addEventListener('mousedown', (event) => {
			shiftX = event.clientX;
		});
		this.inner.addEventListener('mouseup', (event) => {
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
			if (+width > 620) {
				this.slides.style.transform = `translateX(${event.touches[0].clientX - shiftX + this.offset}px)`;
			}
		}, {
			passive: true
		});
		this.inner.addEventListener('touchend', (event) => {
			this.direction = (event.changedTouches[0].clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(event.changedTouches[0].clientX - shiftX);
			this.slides.style.transform =  `translateX(${this.offset}px)`;
			if (diffPos > this.width/3) {
				console.log(this.slideIndex);
				this.move();
			}
		}, {
			passive: true
		});
	}

	clearLinnear() {
        let n = Math.abs(this.offset) / this.width;
        this.items.forEach(slide => {
            slide.classList.remove('key-players__logo-item-line-zero');
        });
        if(this.quantityInWindow == 4) {
            this.items[this.quantityInWindow - 1 + n].classList.add('key-players__logo-item-line-zero')
        }
    }
	render() {
		this.reset();
		this.clickIndicators();
		this.clickNext();
		this.clickPrev();
		this.swipe();
	}
}
