const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(input) {
    const msg = input.parentNode.querySelector('.form__msg');
    if (!input.value) {
      msg.classList.add('show');
    } else {
      msg.classList.remove('show');
    }
  });

  if (form.checkValidity()) {
    form.submit();
  }
});

inputs.forEach(function(input) {
  const msg = input.parentNode.querySelector('.form__msg');
  input.addEventListener('input', function() {
    if (input.value) {
      msg.classList.remove('show');
    }
  });
});
