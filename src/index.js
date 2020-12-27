import './styles/styles.scss';
import './images/logo.svg';
import './images/logo-footer.svg';
import './images/illustration-intro.svg';
import './images/bg-tablet-pattern.svg';
import './images/avatar-ali.png';
import './images/avatar-anisha.png';
import './images/avatar-richard.png';
import './images/avatar-shanai.png';
import './images/icon-facebook.svg';
import './images/icon-twitter.svg';
import './images/icon-pinterest.svg';
import './images/icon-youtube.svg';
import './images/icon-instagram.svg';
import './images/icon-hamburger.svg';
import './images/icon-close.svg';

import slider from './js/slider.js';
import subscriptionFormValidation from './js/form-validator.js';
import toggleMenu from './js/menu-hamburger';
import pagination from './js/pagination';

document.addEventListener('DOMContentLoaded', () => {
  slider();
  subscriptionFormValidation();
  toggleMenu();
  pagination()
});
