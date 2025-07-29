function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type=\"text\"]').value.trim();
  const email = this.querySelector('input[type=\"email\"]').value.trim();
  const message = this.querySelector('textarea').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thank you for reaching out!';
  formMessage.style.color = 'green';
  this.reset();
});

