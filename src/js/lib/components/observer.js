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
