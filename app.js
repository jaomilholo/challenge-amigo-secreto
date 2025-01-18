let amigos = [];

function adicionarAmigo() { // <- Função para adicionar um amigo
  let novoAmigo = document.getElementById('amigo').value;
  if (novoAmigo == '') {
    alert('Digite o nome para adicionar um amigo.');
  } else {
    amigos.push(novoAmigo);
    console.log(amigos)
  }
}