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

/***/ "./src/js/lib/components/carousel-experience-class.js":
/*!************************************************************!*\
  !*** ./src/js/lib/components/carousel-experience-class.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselExperience; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



class CarouselExperience {
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


/***/ }),

/***/ "./src/js/lib/components/carousel-key-players-logo-class.js":
/*!******************************************************************!*\
  !*** ./src/js/lib/components/carousel-key-players-logo-class.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return carouselKeyPlayersLogo; });
class carouselKeyPlayersLogo {
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


/***/ }),

/***/ "./src/js/lib/components/carousel-key-players-say-class.js":
/*!*****************************************************************!*\
  !*** ./src/js/lib/components/carousel-key-players-say-class.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return carouselKeyPlayersSay; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



class carouselKeyPlayersSay {
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


/***/ }),

/***/ "./src/js/lib/components/carousel-know-how-class.js":
/*!**********************************************************!*\
  !*** ./src/js/lib/components/carousel-know-how-class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return carouselKnowHow; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");




class carouselKnowHow {
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


/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id'); //вариант урока
        // const id = this[i].getAttribute('id').replace(/(-?(\D+\.\D+)|(\D+))/, ''); //("drop:26.2_d5").replace выдает 26.2_d5
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(800);
        });
    }
};


/***/ }),

/***/ "./src/js/lib/components/observer.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/observer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const options = {
	rootMargin: '-10px'
};
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
		let containerInner = entry.target.querySelectorAll('[data-animated]');
		if (entry.isIntersecting ) {
			containerInner.forEach(function(item) {
				let setaDataAimated = item.dataset.animated;
				item.classList.add(setaDataAimated);
			})
			return; // если класс добавлен, продолжать уже не надо
		}
		containerInner.forEach(function(item) {
			let setaDataAimated = item.dataset.animated;
			item.classList.remove(setaDataAimated);
		});
	});
}, options);

// Сообщить наблюдателю, какие элементы следует отслеживать
try {
	observer.observe(document.querySelector('.observer-title'));
	observer.observe(document.querySelector('.observer-home-advantage'));
	observer.observe(document.querySelector('.observer-leiba'));
	observer.observe(document.querySelector('.observer-home-servise'));
	observer.observe(document.querySelector('.observer-list'));
	observer.observe(document.querySelector('.observer-img'));
} catch (error) {}
try {
	observer.observe(document.querySelector('.observer-about-advantage'));
	observer.observe(document.querySelector('.observer-about-servise'));
	observer.observe(document.querySelector('.observer-about-title'));
} catch (error) {}
try {
	observer.observe(document.querySelector('.observer-servise1'));
	observer.observe(document.querySelector('.observer-servise2'));
	observer.observe(document.querySelector('.observer-servise3'));
	observer.observe(document.querySelector('.observer-servise4'));
} catch (error) {}
try {
	observer.observe(document.querySelector('.observer-teams'));
	observer.observe(document.querySelector('.observer-teams-servise'));
} catch (error) {}
try {
	observer.observe(document.querySelector('.observer-portofolio-leiba1'));
	observer.observe(document.querySelector('.observer-portofolio-leiba2'));
	observer.observe(document.querySelector('.observer-portofolio-leiba3'));
	observer.observe(document.querySelector('.observer-portofolio-leiba4'));
	observer.observe(document.querySelector('.observer-portofolio-servise'));
} catch (error) {}
try {
	observer.observe(document.querySelector('.observer-details-img'));
} catch (error) {}



// Пример записи:
// в html:
//<div class="observer" id="observer">
//    <div class="container-inner" data-animated = "fadeInUp"></div>
//</div>
// в js:
// try {
// 	observer.observe(document.querySelector('.observer'));
// } catch (error) {}
// // или через id
// observer.observe(document.getElementById('observer'));
// observer.observe(document.querySelector('#observer'));


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
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/observer */ "./src/js/lib/components/observer.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_observer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_accordion_triad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accordion-triad */ "./src/js/lib/components/accordion-triad.js");

 //show, hide, toggle
//addClass, removeClass, toggleClass
// on, off, click
//setAttribute, removeAttribute, toggleAttribute
//html, eq, index, find, siblings
//






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
/* harmony import */ var _components_carousel_experience_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/carousel-experience-class */ "./src/js/lib/components/carousel-experience-class.js");
/* harmony import */ var _components_carousel_know_how_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/carousel-know-how-class */ "./src/js/lib/components/carousel-know-how-class.js");
/* harmony import */ var _components_carousel_key_players_logo_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/carousel-key-players-logo-class */ "./src/js/lib/components/carousel-key-players-logo-class.js");
/* harmony import */ var _components_carousel_key_players_say_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel-key-players-say-class */ "./src/js/lib/components/carousel-key-players-say-class.js");
/* harmony import */ var _components_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/scrolling */ "./src/js/lib/components/scrolling.js");





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
const cKnowHow = new _components_carousel_know_how_class__WEBPACK_IMPORTED_MODULE_1__["default"]();
const cKeyPlayersLogo= new _components_carousel_key_players_logo_class__WEBPACK_IMPORTED_MODULE_2__["default"]();
const cKeyPlayersSay = new _components_carousel_key_players_say_class__WEBPACK_IMPORTED_MODULE_3__["default"]();
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

    const cExperience = new _components_carousel_experience_class__WEBPACK_IMPORTED_MODULE_0__["default"]();
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


Object(_components_scrolling__WEBPACK_IMPORTED_MODULE_4__["default"])('.pageup');

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
                item.style.filter = 'grayscale(100%)';
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