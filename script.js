const toggler = document.querySelector('.nav__toggler');
const list = document.querySelector('.nav__list');

toggler.addEventListener('click', () => {
  list.classList.toggle('nav__list--expand');
});
