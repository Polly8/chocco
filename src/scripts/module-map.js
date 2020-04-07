
;

let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.753818, 37.595116],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.759135, 37.624644],
        [55.775070, 37.556421],
        [55.747119, 37.608451],
        [55.759307, 37.607297]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./images/icons/marker.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-35, -42]
    });
    

    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }
    
    myMap.geoObjects.add(myCollection);

};


ymaps.ready(init);

