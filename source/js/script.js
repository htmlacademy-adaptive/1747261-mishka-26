let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let mainContainer = document.querySelector('.main-container');
let productWeekButton = document.querySelector('.product-week__button');
let cardProductButton = document.querySelector('.card-product__button');
let modal = document.querySelector('.modal');
let body = document.querySelector('.page__body');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainContainer.style.marginTop = '81px';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    mainContainer.style.marginTop = '0';
  }
});

productWeekButton.addEventListener ('click', function () {
  if (modal.classList.contains('visually-hidden')) {
    modal.classList.remove('visually-hidden');
  }
});
