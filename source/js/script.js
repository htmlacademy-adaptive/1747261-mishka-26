let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let mainContainer = document.querySelector('.main-container');
let productWeekButton = document.querySelector('.product-week__button');
let modal = document.querySelector('.modal');

navMain.classList.remove('main-nav--nojs');
document.querySelector('.contacts__map--nojs').style.display = 'none';

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
