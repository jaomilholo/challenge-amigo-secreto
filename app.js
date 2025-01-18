let amigos = [];
let amigo;

function adicionarAmigo() { // <- Função para adicionar um amigo
  let novoAmigo = document.getElementById('amigo').value;
  if (novoAmigo == '') {
    alert('Digite o nome para adicionar um amigo.');
  } else {
    amigos.push(novoAmigo);
    console.log(amigos)
  }
  limparInput();
  atualizarLista();
}

function limparInput() { // <- Função para limpar o input
  novoAmigo = document.getElementById('amigo').value = '';
}

function atualizarLista() { // <- Função para atualizar a lista de amigos
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (let amigoNaLista of amigos) {
    let listaAmigos = `<li>${amigoNaLista}</li>`;
    lista.innerHTML += listaAmigos;
  }
}

function sortearAmigo() { // <- Função para sortear um amigos
  if (amigos.length == 0) {
    alert('Adicione amigos para sortear.');
  } else {
    let sorteio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[sorteio];
    amigos.splice(sorteio, 1);
    atualizarLista();
    document.getElementById('resultado').innerHTML = nomeSorteado;
  }
}
