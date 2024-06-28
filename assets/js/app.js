const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { /* Agregué el "async" del principio */
  $n.textContent = 'cargando...';
  const response = await fetch(`${baseEndpoint}/users`); /* Cambié a "${baseEndpoint}/users" */
  const data = await response.json(); /* Agregué "await response.json();" */
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` /* Le agregué "$" antes de "n.textContent" */
}

displayUser('stolinski').catch(handleError);
