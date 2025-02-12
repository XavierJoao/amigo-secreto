// Array de amigos à serem sorteados
let amigos = [];

// Função para adicionar nomes à lista de amigos
function adicionarAmigo(){
    // Captura o nome escrito no campo de entrada
    const nomeAmigo = document.getElementById('amigo').value.trim();

    // Alerta se o campo estiver vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Alerta se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na tela
    amigos.push(nomeAmigo);
    atualizarLista();

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpa a lista antes de adicionar novos amigos

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
