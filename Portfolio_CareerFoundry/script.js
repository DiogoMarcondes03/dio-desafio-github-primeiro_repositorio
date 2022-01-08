let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	/*console.log('Email: ',emailValue);
	console.log('Message: ', messageValue);
	Informaçao que será apresentada no log da página*/

	if (emailValue.includes('@')) {
		//all good
		alert('Thank you for your message')
	} else{
		alert('Oh no, that`s not a valid email address! Please, try again.')
	}
})

