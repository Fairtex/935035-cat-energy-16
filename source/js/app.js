var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".page-header__toggle");
  var header = document.querySelector(".page-header");
  var contactsMap = document.querySelector(".contacts__map");

  contactsMap.classList.remove("contacts__map--no-js");
  header.classList.remove("page-header--nojs");
  navMain.classList.add("main-nav--closed");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navToggle.classList.remove("page-header__toggle--closed");
      navToggle.classList.add("page-header__toggle--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navToggle.classList.add("page-header__toggle--closed");
      navToggle.classList.remove("page-header__toggle--opened");
    }
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
          center: [59.938791, 30.322560],
          zoom: 18
        }, {
          searchControlProvider: "yandex#search"
        }),

        myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
          hintContent: "Cat-energy"
        }, {
          iconLayout: "default#image",
          iconImageHref: "../img/map-pin.png",
          iconImageSize: [124, 106],
          iconImageOffset: [-50, -100]
        });

        myMap.geoObjects.add(myPlacemark)
});
