export default function pagination() {
  const icons = [...document.querySelectorAll('.pagination__icon')];
  const pagination = document.getElementById('pagination');
  const slider = document.getElementById('slider');

  pagination.addEventListener('click', (e) => {
    slider.classList.remove(
      'slider',
      'slider--1',
      'slider--2',
      'slider--3',
      'slider--4'
    );
    if (e.target.classList.contains('pagination__icon')) {
      icons.forEach((icon) =>
        icon.classList.remove('pagination__icon--active')
      );
      slider.classList.add(`slider--${e.target.dataset.card}`);
      e.target.classList.add('pagination__icon--active');
    }
  });
}
