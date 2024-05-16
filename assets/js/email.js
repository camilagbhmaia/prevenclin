(function(){
  emailjs.init("service_n1733oo"); // Substitua YOUR_USER_ID pelo seu ID de usuário do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Mudar o texto de status
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.sent-message').style.display = 'none';
  document.querySelector('.error-message').style.display = 'none';

  // Obter os valores do formulário
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Definir os parâmetros do template
  var templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
  };

  emailjs.send('service_n1733oo', 'template_3m9t63m', templateParams) // Substitua YOUR_TEMPLATE_ID pelo seu ID do template do EmailJS
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('.sent-message').style.display = 'block';
    }, function(error) {
      console.log('FAILED...', error);
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('.error-message').style.display = 'block';
    });
});
