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
