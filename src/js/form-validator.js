export default function subscriptionFormValidation() {
  const $form = document.getElementById('form');

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.email;
    let pattern =
      e.target.email.pattern ||
      '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$';
    let regex = new RegExp(pattern);

    if (regex.exec(input.value) && input.value !== '') {
      $form.reset();
      console.log('Send subscription');
      const span = document.createElement('SPAN');
      span.classList.add('tooltip', 'tooltip--active');
      span.textContent = 'Subscription Sent';
      input.insertAdjacentElement('beforebegin', span);
      setTimeout(() => {
        span.classList.remove('tooltip--active');
      }, 1500);
    }
  });
}
