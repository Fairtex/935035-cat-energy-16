var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.page-header__toggle');
  var header = document.querySelector('.page-header');

  header.classList.remove('page-header--nojs');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navToggle.classList.add('page-header__toggle--closed');
      navToggle.classList.remove('page-header__toggle--opened');
    }
  });
