const input = document.querySelector('#texto-tarefa'); // recuperei a tag input

function criarTarefa() {
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.innerText = input.value;
  lista.appendChild(item);
  input.value = '';
}

function eventController(event) {
  if (event.target.id === 'criar-tarefa') {
    criarTarefa();
  }
}

document.body.addEventListener('click', eventController);
