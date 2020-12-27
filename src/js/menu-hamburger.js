export default function toggleMenu() {
  const icon = document.getElementById('hamburger');
  const menu = document.querySelector('.nav-main');
  const wrapper = document.querySelector('.wrapper');

  icon.addEventListener('click', (e) => {
    console.log('h');
    if (e.target.dataset.mode === 'close') {
      icon.setAttribute('src', 'images/icon-close.svg');
      icon.dataset.mode = 'open';
      menu.classList.remove('hiddenModal');
      wrapper.classList.add('openModalbg');
    } else {
      icon.setAttribute('src', 'images/icon-hamburger.svg');
      icon.dataset.mode = 'close';
      menu.classList.add('hiddenModal');
      wrapper.classList.remove('openModalbg');
    }
  });
}
