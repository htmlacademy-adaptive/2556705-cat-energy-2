/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.header');
let navToggle = document.querySelector('.header__menu-button');

navMain.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header--closed')) {
    navMain.classList.remove('header--closed')
    navMain.classList.add('header--opened');
  } else {
    navMain.classList.add('header--closed');
    navMain.classList.remove('header--opened');
  }
});
