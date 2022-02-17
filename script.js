const input = document.querySelector('#texto-tarefa'); // recuperei a tag input

function criarTarefa() {
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.innerText = input.value;
  item.className = 'itemTarefa';
  lista.appendChild(item);
  input.value = '';
}

function mudarCorFundo(event) {
  const alvoDoClick = event.target;
  alvoDoClick.style.backgroundColor = 'gray';
  console.log(alvoDoClick);
}

function eventController(event) {
  if (event.target.id === 'criar-tarefa') {
    criarTarefa();
  }
  if (event.target.className === 'itemTarefa') {
    mudarCorFundo(event);
  }
}

document.body.addEventListener('click', eventController);
