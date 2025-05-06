const form = document.getElementById('request-form');
const list = document.getElementById('request-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const amount = document.getElementById('amount').value;
  const reason = document.getElementById('reason').value;

  const li = document.createElement('li');
  li.textContent = `${title} - $${amount} - ${reason}`;
  list.appendChild(li);

  form.reset();
});
