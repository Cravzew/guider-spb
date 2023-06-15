const swiper = new Swiper(".swiper", {
  loop: true,
  allowTouchMove: false,
  resistance: false,
  navigation: {
    nextEl: ".about-city__swiper-button-next",
    prevEl: ".about-city__swiper-button-prev",
    disabledClass: ".about-city__swiper-button-disabled",
  },
});

new WOW().init();

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.92909030430601,30.24863889681226],
    zoom: 12,
  });

  myMap.controls.remove("geolocationControl"); // удаляем геолокацию
  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
  myMap.controls.remove("rulerControl"); // удаляем контрол правил

  var myPlacemark = new ymaps.Placemark(
    [59.94287305536336,30.316960124839607],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../images/mark.png",
      iconImageSize: [20, 56],
      iconImageOffset: [-3, -50],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  document.querySelector(".ymaps-2-1-79-copyright__wrap").remove();
  document.querySelector(".ymaps-2-1-79-map-copyrights-promo").remove();
}
