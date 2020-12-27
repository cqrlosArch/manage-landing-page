export default function slider() {
  const $slider = document.getElementById('slider');
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heightViewport =
      window.innerHeight || document.documentElement.clientHeight;
    if (isElementVisible($slider)) {
      $slider.classList.toggle('slider');
    } else if (scrollTop < 100) {
      $slider.classList.remove('slider');
    }
  });
}

function isElementVisible(elemento) {
  const heightViewport =
    window.innerHeight || document.documentElement.clientHeight;
  const position = elemento.getBoundingClientRect();
  return position.top >= 0 && position.bottom <= heightViewport;
}
