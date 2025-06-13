/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion-triad.js":
/*!**************************************************!*\
  !*** ./src/js/lib/components/accordion-triad.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordionTriad = function(
                            head = '.accordion__head',
                            action = '.accordion__action',
                            content = '.accordion__content',
                            headActive = 'accordion__head-active',
                            actionActive = 'accordion__action-active',
                            contentActive = 'accordion__content-active'
                        ) {
    for (let i = 0; i < this.length; i++) {

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find(action).click(()=> {
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find(head).toggleClass(headActive);
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find(content).toggleClass(contentActive);
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find(content).toggleClass('fadeIn');
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find(action).toggleClass(actionActive);
        })
    }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.triad__grid.accordion').accordionTriad();


/***/ }),

/***/ "./src/js/lib/components/carousel-key-players-logo-class.js":
/*!******************************************************************!*\
  !*** ./src/js/lib/components/carousel-key-players-logo-class.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselKeyPlayersLogo; });
/* harmony import */ var _slider_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-class */ "./src/js/lib/components/slider-class.js");


// const CLASS_CONTROL_DISABLED  = 'key-players__control-disabled';

class CarouselKeyPlayersLogo extends _slider_class__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
            this.indicators.forEach(dot => dot.classList.remove(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_INDICATOR_ACTIVE"]));
			this.indicators[0].classList.add(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_INDICATOR_ACTIVE"]);
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
			this.btnsPrev.classList.remove(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_CONTROL_DISABLED"] );
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_CONTROL_DISABLED"] );
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
			this.btnsPrev.classList.remove(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_CONTROL_DISABLED"] );
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_CONTROL_DISABLED"] );
		}
		if (this.slideIndex >= this.endIndex) {
			if(this.btnsNext) {
				this.btnsNext.classList.add(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_CONTROL_DISABLED"] );
			}
		}
		if (this.slideIndex <= 0) {
			if(this.btnsPrev) {
				this.btnsPrev.classList.add(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_CONTROL_DISABLED"] );
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


/***/ }),

/***/ "./src/js/lib/components/carousel-know-how-class.js":
/*!**********************************************************!*\
  !*** ./src/js/lib/components/carousel-know-how-class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselKnowHow; });
/* harmony import */ var _slider_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-class */ "./src/js/lib/components/slider-class.js");



class CarouselKnowHow extends _slider_class__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(selector, inner, slides, items, btnsNext, btnsPrev, indicators ) {
        super(selector, inner, slides, items, btnsNext, btnsPrev, indicators);

        this.knowHow = this.carousel.querySelectorAll('.know-how__item');
        this.howNum = this.carousel.querySelectorAll('.know-how__number');
        this.howSubtitle = this.carousel.querySelectorAll('.know-how__subtitle');
	}
	reset() {
		this.offset = 0;
		this.slideIndex = 0;
		this.direction = 'next';
		this.quantityInWindow = Math.round(this.inner.offsetWidth / this.items[0].offsetWidth);
		// debugger
		// this.widthWindow = window.getComputedStyle(this.inner).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
		this.widthWindow = this.inner.getBoundingClientRect().width;
		this.width = this.widthWindow / this.quantityInWindow;
		this.slides.style.transform = '';
		this.indicators.forEach(dot => dot.classList.remove(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_INDICATOR_ACTIVE"]));
		try {
			this.indicators[0].classList.add(_slider_class__WEBPACK_IMPORTED_MODULE_0__["CLASS_INDICATOR_ACTIVE"]);
		} catch (error) {}

		this.endIndex = this.items.length - this.quantityInWindow;
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

		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;
		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.updateControl();
	    this.updateIndicators();
        this.remove();
        this.funAddClass(this.slideIndex);
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
				e.preventDefault();
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


/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import $ from '../core';

// $.prototype.dropdown = function() {
//     for (let i = 0; i < this.length; i++) {
//         const id = this[i].getAttribute('id'); //вариант урока
//         // const id = this[i].getAttribute('id').replace(/(-?(\D+\.\D+)|(\D+))/, ''); //("drop:26.2_d5").replace выдает 26.2_d5
//         $(this[i]).click(() => {
//             $(`[data-toggle-id="${id}"]`).fadeToggle(800);
//         });
//     }
// };


/***/ }),

/***/ "./src/js/lib/components/scrolling.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/scrolling.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 2000) {

            if ( document.querySelector('.pageup').hasAttribute('data-show')) {
                upElem.classList.add('fadeIn');
                upElem.classList.remove('fadeOut');
            }

        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);


/***/ }),

/***/ "./src/js/lib/components/slider-class.js":
/*!***********************************************!*\
  !*** ./src/js/lib/components/slider-class.js ***!
  \***********************************************/
/*! exports provided: CLASS_INDICATOR_ACTIVE, CLASS_CONTROL_DISABLED, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_INDICATOR_ACTIVE", function() { return CLASS_INDICATOR_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_CONTROL_DISABLED", function() { return CLASS_CONTROL_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderClass; });


const CLASS_INDICATOR_ACTIVE = 'active';
const CLASS_CONTROL_DISABLED = 'disabled';

class SliderClass {
	constructor({ selector = '', inner = '', slides = '', items = '', btnsNext = '', btnsPrev = '', indicators = '' } = {}) {

		this.carousel = document.querySelector(selector);
		this.inner = this.carousel.querySelector(inner); //experience__content
		this.slides = this.carousel.querySelector(slides); //experience__content
		if (items !== '') this.items = this.carousel.querySelectorAll(items);//experience__item
		if (btnsNext !== '') this.btnsNext = this.carousel.querySelector(btnsNext);
		if (btnsPrev !== '') this.btnsPrev = this.carousel.querySelector(btnsPrev);
		if (indicators !== '') this.indicators = this.carousel.querySelectorAll(indicators); //dot и .carousel__indicators li`

		this.offset = 0;
		this.slideIndex = 0;
		this.quantityInWindow = 0;
		this.widthWindow = 0;
		this.width = 0;
		this.endIndex = 0;
		this.direction = 'next';
	}

	reset() {

		this.offset = 0;
		this.slideIndex = 0;
		this.direction = 'next';
		this.quantityInWindow = Math.round(this.inner.offsetWidth / this.items[0].offsetWidth);
		// debugger
		this.widthWindow = window.getComputedStyle(this.inner).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
		this.width = this.widthWindow / this.quantityInWindow;
		this.slides.style.transform = '';

		try {
			this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
			this.indicators[0].classList.add(CLASS_INDICATOR_ACTIVE);
		} catch (error) {}

		this.endIndex = this.items.length - this.quantityInWindow;
		// сделаем невидимой левую кнопку
		if (this.btnsPrev) {
			this.btnsPrev.classList.add(CLASS_CONTROL_DISABLED );
			// this.spanIcoPrev.classList.add(CLASS_CONTROL_DISABLED );
		}
	}
	swipe() {
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
	moveTo(index) {
		this.slideIndex = index;
		this.offset = -(+this.width) * index;
		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
		this.indicators[this.slideIndex].classList.add(CLASS_INDICATOR_ACTIVE);
		this.updateControl();
		this.updateIndicators();
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
			this.btnsPrev.classList.remove(CLASS_CONTROL_DISABLED );
			// this.spanIcoPrev.classList.remove(CLASS_CONTROL_DISABLED );
			// this.spanIcoNext.classList.remove(CLASS_CONTROL_DISABLED );
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(CLASS_CONTROL_DISABLED );
			// this.spanIcoNext.classList.remove(CLASS_CONTROL_DISABLED );
		}

		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;

		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.updateControl();
	    this.updateIndicators();
	}
	clickIndicators() {
		for (let i = 0; i < this.indicators.length; i++) {
			this.indicators[i].addEventListener('click', (e) => {
				e.preventDefault();
				const slideTo = e.target.getAttribute('data-slide-to');
				this.moveTo(slideTo);
			});
		}
	}
	updateIndicators() {
		if (!this.indicators.length) {
			return;
		}
		this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
		this.indicators[this.slideIndex].classList.add(CLASS_INDICATOR_ACTIVE);
	}
	updateControl() {
		if(this.btnsPrev) {
			this.btnsPrev.classList.remove(CLASS_CONTROL_DISABLED );
			// this.spanIcoPrev.classList.remove(CLASS_CONTROL_DISABLED );
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(CLASS_CONTROL_DISABLED );
			// this.spanIcoNext.classList.remove(CLASS_CONTROL_DISABLED );
		}
		if (this.slideIndex >= this.endIndex) {
			// this.btnsNext.classList.add(CLASS_CONTROL_DISABLED );
			if(this.btnsNext) {
				this.btnsNext.classList.add(CLASS_CONTROL_DISABLED );
				// this.spanIcoNext.classList.add(CLASS_CONTROL_DISABLED );
			}
		}
		if (this.slideIndex <= 0) {
			if(this.btnsPrev) {
				this.btnsPrev.classList.add(CLASS_CONTROL_DISABLED );
				// this.spanIcoPrev.classList.add(CLASS_CONTROL_DISABLED );
			}
		}
	}
	clickNext() {
		if(this.btnsNext) {
			this.btnsNext.addEventListener('click', (e) => {
				e.preventDefault();
				this.direction = e.target.dataset.slide; //если data-slide
				this.move();
			})
		}
	}
	clickPrev() {
		if(this.btnsPrev){
			this.btnsPrev.addEventListener('click', (e) => {
				e.preventDefault();
				this.direction = e.target.dataset.slide; //если data-slide
				this.move();
			});
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


/***/ }),

/***/ "./src/js/lib/components/tn-atom.js":
/*!******************************************!*\
  !*** ./src/js/lib/components/tn-atom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tnAtom = () => {
    const atom = document.querySelector('.tn-atom');
    const height = window.getComputedStyle(document.querySelector('body')).height;
    if (window.getComputedStyle(atom, null).display !== 'none') atom.style.height = height;
    else atom.style.height = 0;

};

/* harmony default export */ __webpack_exports__["default"] = (tnAtom);


/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_hendlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hendlers */ "./src/js/lib/modules/hendlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_accordion_triad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion-triad */ "./src/js/lib/components/accordion-triad.js");

 //show, hide, toggle
//addClass, removeClass, toggleClass
// on, off, click
//setAttribute, removeAttribute, toggleAttribute
//html, eq, index, find, siblings
//

// import './components/observer';




/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/*
    $.prototype.html-
    Метод для замены, полученной HTML
    структуры внутри элемента.
    Если контента передан, то заменяем контент,
    если аргументов нет, то получаем контент
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

/*
    $.prototype.eq -
    Получаем объект по номеру,
    т.е. получаем один элемент как самостоятельный объект,
    а не  элемент часть объекта
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

/*
    $.prototype.index-
    Получение номера элемента по порядку среди элементов
    у одного родителя
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    // function findMyIndex (item) {
    //     return item == this[0];
    // };

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

/*
    Найти элементы по селектору внутри уже найденных.
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// X.losest(Y) возвращает элементы X с ближайшим общим родительским элементом (Y) (или сам элемент)
// console.log($('.some').closest('.findme')); - найти все .some с родителем .findme, если не найдено вернуть сам элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        let this1 = this[i].closest(selector);
        if(!this1) { //мое условие
            // this[i] = 'classNull';
            return this;
        }
        this[i] = this1;
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};


/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        
        if (!this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].removeAttribute(attributeName);
        }
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function(classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};


/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function(dur, display, fin) { //Д.З.4-8

    for (let i = 0; i < this.length; i++) {
        this.fadeInBody(dur, display, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function(dur, fin) { //Д.З.4-8

    for (let i = 0; i < this.length; i++) {
        this.fadeOutBody(dur, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function(dur, display, fin) { //Д.З.4-8

    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this.fadeInBody(dur, display, fin, i);
        } else {
            this.fadeOutBody(dur, fin, i);
        }
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInBody = function(dur, display, fin, i) { //Д.З.4-8
    this[i].style.display = display || 'block';
    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);

    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOutBody = function(dur, fin, i) { //Д.З.4-8
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
            this[i].style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);

    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};


/***/ }),

/***/ "./src/js/lib/modules/hendlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/hendlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Реазизация
// $('.food-2 a').on('click',() => {
//     $('.modal-dialog').fadeIn(180);
// });
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');  
// });

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};






/***/ }),

/***/ "./src/js/lib/site/main.js":
/*!*********************************!*\
  !*** ./src/js/lib/site/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/scrolling */ "./src/js/lib/components/scrolling.js");
/* harmony import */ var _components_slider_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/slider-class */ "./src/js/lib/components/slider-class.js");
/* harmony import */ var _components_carousel_know_how_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/carousel-know-how-class */ "./src/js/lib/components/carousel-know-how-class.js");
/* harmony import */ var _components_carousel_key_players_logo_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel-key-players-logo-class */ "./src/js/lib/components/carousel-key-players-logo-class.js");
/* harmony import */ var _components_tn_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tn-atom */ "./src/js/lib/components/tn-atom.js");






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
const cExperience = new _components_slider_class__WEBPACK_IMPORTED_MODULE_1__["default"] ({
    selector: '.experience',
    inner: '.experience__inner',
    slides: '.experience__content',
    items: '.experience__item',
    btnsNext: '',
    btnsPrev: '',
    indicators: '.carousel__indicators li'
  }
);
const cKeyPlayersSay = new _components_slider_class__WEBPACK_IMPORTED_MODULE_1__["default"] (
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
const cKnowHow = new _components_carousel_know_how_class__WEBPACK_IMPORTED_MODULE_2__["default"] ( //extends SliderClass
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
const cKeyPlayersLogo = new _components_carousel_key_players_logo_class__WEBPACK_IMPORTED_MODULE_3__["default"] ( //extends SliderClass
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
    Object(_components_tn_atom__WEBPACK_IMPORTED_MODULE_4__["default"])();



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
        Object(_components_tn_atom__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
Object(_components_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup');

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



/***/ }),

/***/ "./src/js/lib/site/map.js":
/*!********************************!*\
  !*** ./src/js/lib/site/map.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.prototype.map = function () {
    function initMap() {
        let myMap = new ymaps.Map("map-gazprom", {
            center: [59.985871, 30.178170],
            zoom: 16,
            controls: []
        }, {
            suppressMapOpenBlock: true
        });
        let kurasan = new ymaps.Placemark([59.987111, 30.178101], {}, {
            preset: 'islands#circleIcon',
            iconColor: '#0095b6',
        });
        myMap.geoObjects.add(kurasan);

        let hov = document.querySelectorAll("ymaps[class|='ymaps-2-1']:first-child");
        kurasan.events.add('hover', function () {
            hov.forEach(function(item) {
                item.style.filter = 'grayscale(0)';
            });
        });
        myMap.events.add('mouseenter', function () {
            hov.forEach(function(item) {
                // item.style.filter = 'grayscale(100%)';
            });
        });
    }
    ymaps.ready(initMap);
};



try {
    $('.map').map();

} catch (error) {}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
/* harmony import */ var _lib_site_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/site/main.js */ "./src/js/lib/site/main.js");
/* harmony import */ var _lib_site_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/site/map.js */ "./src/js/lib/site/map.js");
/* harmony import */ var _lib_site_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_site_map_js__WEBPACK_IMPORTED_MODULE_2__);





console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map