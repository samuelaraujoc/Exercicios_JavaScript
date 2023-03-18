const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-br', { dateStyle: 'full', timeStyle: 'short' });