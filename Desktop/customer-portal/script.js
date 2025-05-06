const quoteButtons = document.querySelectorAll('.quote-btn');
const quoteSection = document.getElementById('quote-section');
const quoteForm = document.getElementById('quote-form');
const productNameInput = document.getElementById('product-name');
const confirmationMessage = document.getElementById('confirmation-message');

quoteButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.parentElement.querySelector('h3').innerText;
    productNameInput.value = product;
    quoteSection.style.display = 'block';
    confirmationMessage.textContent = '';
  });
});

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('customer-name').value;
  const email = document.getElementById('customer-email').value;
  const product = productNameInput.value;

  confirmationMessage.textContent = `Thank you, ${name}! We will send a quote for ${product} to ${email}.`;
  quoteForm.reset();
});
