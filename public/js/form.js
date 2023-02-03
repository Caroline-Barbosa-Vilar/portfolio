document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  let msg = '';

  if (name == '') {
    msg = 'The name field cannot be empty.';
  } else if (name.length < 10) {
    msg = 'Minimum of 10 characters.';
  } 

  document.getElementById('nameMsg').textContent = msg;

  if (email == '') {
    msg = 'The email field cannot be empty.';
  } else if (email.length < 6) {
    msg = 'Minimum of 6 characters.';
  }

  document.getElementById('emailMsg').textContent = msg;
  
  if (message == '') {
    msg = 'The message field cannot be empty.';
  } else if (message.length < 10) {
    msg = 'Minimum of 10 characters.';
  }

  document.getElementById('messageMsg').textContent = msg;

  if (msg == '') {
		document.getElementById('form').submit();
	}
})