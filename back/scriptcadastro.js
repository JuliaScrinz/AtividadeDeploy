// cadastrar usuarios

async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome,
        email,
        senha
    }

    // console.log(data);
    try {
        const response = await fetch('http://localhost:3002/usuarios/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const results = await response.json();

        if (results.success) {
            console.log(results)
            alert(results.message)
        } else {
            alert(results.message)
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function logar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome_login').value;
    const senha = document.getElementById('senha_login').value;

    const data = { nome, senha };
    // console.log(data);

    try {
        const response = await fetch('http://localhost:3002/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        let results = await response.json();

        if (results.success) {
            let usuarioData = results;

            localStorage.setItem('informacoes', JSON.stringify(usuarioData));

            let html = document.getElementById('informacoes');
            let dados = JSON.parse(localStorage.getItem('informacoes'));
            // console.log(dados);
            let perfil = dados.data.perfil;

            html.innerHTML = `<div style="display: block; flex-direction: column; align-items:end">
            id: ${dados.data.id}, nome: ${dados.data.nome}, email: ${dados.data.email}, perfil: ${dados.data.perfil}
            </div>`;
            html.style.display = "block";

        } else {
            alert(results.message);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao se conectar ao servidor.");
    }
}

// verificar se o usuário está logado ao carregar a página
window.addEventListener("load", () => {
    listarProdutos()

    if (localStorage.getItem("informacoes")) {
        let html = document.getElementById('informacoes');
        let dados = JSON.parse(localStorage.getItem('informacoes'));

        if (dados.data.perfil === "admin") {
            document.getElementById('informacoes').style.display = 'block';
            document.getElementById('adminfuncao').style.display = 'block';
        } else {
            document.getElementById('informacoes').style.display = 'none';
            document.getElementById('adminfuncao').style.display = 'block';
        }

        html.innerHTML = `<div style="display: block; flex-direction: column; align-items:end">
            id: ${dados.data.id}, nome: ${dados.data.nome}, email: ${dados.data.email}, perfil: ${dados.data.perfil}
            </div>`;
            html.style.display = "block";
    }
})

// função de logout (descomentada para uso)

function sairdaconta(event) {
    // console.log(informacoes)
    localStorage.removeItem('informacoes');
    window.location.href = "indexformulario.html";
};

// editar usuarios 

async function editar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome,
        email,
        senha
    }

    // console.log(data);

    const response = await fetch('http://localhost:3002/usuario/editar/:id', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results)
        alert(results.message)
    } else {
        alert(results.message)
    }
}

// deletar usuarios

async function deletar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome,
        email,
        senha
    }

    // console.log(data);

    const response = await fetch('http://localhost:3002/usuario/deletar/:id', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results)
        alert(results.message)
    } else {
        alert(results.message)
    }
}

// para os produtos 

async function cadastrarProduto(event) {
    event.preventDefault();

    const nome = document.getElementById('nome_produto').value;
    const preco = Number(document.getElementById('preco').value);
    const file = document.getElementById('file').files[0];

    let formData = new FormData();
    formData.append('nome', nome);
    formData.append('preco', preco);
    formData.append('file', file);
    try {
        const response = await fetch('http://localhost:3002/produto/cadastrar', {
            method: "POST",
            body: formData 
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erro ao cadastrar produto.");
        }

        const results = await response.json();

        if (results.success) {
            console.log(results);
            alert(results.message);
        } else {
            alert(results.message);
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Ocorreu um erro: " + error.message);
    }
}

// listar os produtos 

async function listarProdutos() {
    const response = await fetch('http://localhost:3002/produtos/listar', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        } 
    });

    const results = await response.json();
    console.log(results);

    if (results.success) {
        let produtoData = results.data;
        // console.log(produtoData);
        const images = 'http://localhost:3002/uploads/';
        let html = document.getElementById('catalago-linhas');
        html.innerHTML = ''; // Limpa o conteúdo existente

        produtoData.forEach(produto => {
            // console.log(produto);
            let card = `
            <div class="produtos-catalago" id="card_produto">
                <div class="produtos-catalago-adm">
                    <button onclick="deletarProduto(event, ${produto.id})"><img src="./assets/lixeira (1).png" alt="" class="lixeira"></button>
                    <img src="./assets/lapis.png" alt="" class="lapis"> 
                </div> 
                <a href="./produto2.html">
                    <div class="produtos-catalago-imagem">
                        <img src="${images + produto.imagem}" alt="${produto.nome}" class="imgs-catalago-principal">
                    </div>
                </a>
                <div class="produtos-catalago-texto">   
                    <h3>${produto.nome}</h3>
                    <h3>Valor: ${produto.preco}</h3>
                </div>
                <button onclick='formEditarProduto(${JSON.stringify(produto)})'>Editar</button>
            </div>
            `;
            html.innerHTML += card;
        });
    } else {
        alert(results.message);
    }
}

async function formEditarProduto(produto) {
    console.log(produto);
    let images = "http://localhost:3002/uploads/";
    let modal = document.getElementById('editar_produto');

    document.getElementById('id_produto').value = produto.id;
    document.getElementById('editar_nome').value = produto.nome;  
    document.getElementById('editar_preco').value = produto.preco;

    modal.style.display = "block";
}

let p = '';
async function atualizarProduto(event) {
    event.preventDefault();

    let id = document.getElementById('id_produto').value;
    let nome = document.getElementById('editar_nome').value;  
    let preco = document.getElementById('editar_preco').value; 
    
    let formData = new FormData();
    formData.append('nome', nome);  
    formData.append('preco', preco);
   
    try {
        const response = await fetch(`http://localhost:3002/produto/editar/${id}`, {
            method: "PUT",
            body: formData
        });

        const results = await response.json();

        if (results.success) {  
            alert(results.message);
            listarProdutos(); 
        } else {
            alert(results.message);
        }
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        alert('Erro ao atualizar o produto.');
    }
}

async function carregarProdutos() {
    const listar = document.getElementById('produtos-catalago');

    const response = await fetch('/produto/listar');
    const result = await response.json();

    if (result.success) {
        const produtos = result.data;
        listar.innerHTML = ''; // Limpa o conteúdo existente
        produtos.forEach(produto => {
            const productDiv = document.createElement('div');
            productDiv.className = 'produtos-catalago';
            productDiv.dataset.productId = produto.id_produtos; 

            productDiv.innerHTML = `
                <img src="${produto.imagem_link}" alt="${produto.produtos_nome}">
                <div class="produtos-nome">${produto.produtos_nome}</div>
                <div class="produtos-preco">R$ ${produto.preco}</div>
            `;

            productDiv.addEventListener('click', () => {
                window.location.href = `produtos-details.html?id=${produto.id_produtos}`; 
            });

            listar.appendChild(productDiv);
        });
    }
}

async function deletarProduto(event, id) {
    event.preventDefault();

    const confirmacao = confirm("Tem certeza que deseja excluir o produto?");
    if (!confirmacao) {
        return; 
    }

    try {
        const response = await fetch(`http://localhost:3002/produto/deletar/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log('Response:', response); // Adicionado para depuração

        if (response.ok) {
            alert("Produto deletado com sucesso!");
            listarProdutos(); // Atualiza a lista de produtos
        } else if (response.status === 404) {
            alert("Produto não encontrado.");
        } else {
            const results = await response.json();
            alert("Erro ao deletar o produto: " + results.message);
        }
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        alert('Erro ao deletar o produto.');
    }
}

// Chama a função para carregar produtos ao inicializar
document.addEventListener('DOMContentLoaded', () => {
    listarProdutos();
});
