// requisito 8 resolvodo com ajuda do meu marido
const input = document.querySelector('#texto-tarefa'); // recuperei a tag input
const lista = document.querySelector('#lista-tarefas');

function criarTarefa() {
  const item = document.createElement('li');
  item.innerText = input.value;
  item.className = 'itemTarefa';
  lista.appendChild(item);
  input.value = '';
}

function mudarCorFundo(event) {
  const alvoDoClick = event.target; // alvo, elemento que vou clicar
  const corDeFundo = document.querySelector('.colorItem'); // recuperando a classe que n ainda nao existe no HTML

  if (corDeFundo !== null && corDeFundo !== alvoDoClick) {
    // o 1 clique é null, o 2 clique em diante cai nessa condição
    corDeFundo.classList.remove('colorItem');
    alvoDoClick.classList.add('colorItem');
  } else {
    alvoDoClick.classList.add('colorItem'); // o 1 clique ele pinta
  }
}

function eventControllerDblClick(event) {
  console.log(event.target);
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    console.log('caiu aqui');
  } else {
    event.target.classList.add('completed');
    console.log('nao, caiu aqui');
  }
}

function eventControllerClick(event) {
  if (event.target.id === 'criar-tarefa') {
    criarTarefa();
  }
  if (event.target.className === 'itemTarefa') {
    mudarCorFundo(event);
  }
}

lista.addEventListener('dblclick', eventControllerDblClick);
document.body.addEventListener('click', eventControllerClick);
