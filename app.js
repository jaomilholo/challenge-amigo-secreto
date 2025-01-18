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
  for (let amigoNalista of amigos) {
    let listaAmigos = `<li>${amigoNalista}</li>`;
    lista.innerHTML += listaAmigos;
  }
}
