// Importar pacotes para a aplicação
const express = require('express');
const cors = require('cors');
// Definir a porta do express e instanciar o express
const porta = 3002;
const app = express();
// Habilitar o cors e utilização de JSON
app.use(cors());
app.use(express.json())
// Testar API
app.listen(porta, () => console.log(`Rodando na porta ${porta}`));
// Importar a conexão com o banco
const connection = require('./db_config');
const upload = require('./multer')

// Rotas //

// usuários //

app.post('/usuarios/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha 
    );
    let query = "INSERT INTO usuarios(nome, email, senha) VALUES (?,?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });

});

app.get('/usuario/listar', (request, response) => {
    let query = "SELECT * FROM usuarios";
    connection.query(query, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.delete('/usuario/deletar/:id', (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM usuarios WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
})

app.put('/usuario/editar/:id', (request, response) => {
    let params= Array(
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.params.id
    )

    let query = "UPDATE usuarios SET  nome = (?), email = (?), senha = (?) WHERE id = (?)"
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.post('/login', (request, response) => {
    let params = Array(
        request.body.nome
    )
    let query = "SELECT id,nome,email,senha,perfil FROM usuarios WHERE nome = ?";
 
    connection.query(query, params, (err, results) => {
        if(results.length > 0) {
            let senhaDigita = request.body.senha
            let senhaBanco = results[0].senha
 
            if(senhaBanco === senhaDigita){
 
                response    
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso",
                        data: results[0]
                    })
            } else{
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Verifique sua senha!"
                    })
            }
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Nome não cadastrado!"
                    })
            }
 
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso"
                })
        })
 
    })

// produtos //

app.post('/produto/cadastrar', upload.single('file'), (request, response) => {
    console.log(request.file);
    let params = Array (
        request.body.nome,
        // request.body.quantidade,
        request.body.preco,
        request.file.filename
    )
    const query = "INSERT INTO produtos(nome, preco, imagem) VALUES (?, ?, ?);";
    
    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao inserir produto no banco de dados.",
                error: err
            });
        }

        return response.status(201).json({
            success: true,
            message: "Produto cadastrado com sucesso!",
            data: { id: results.insertId }
        });
    });
});

app.use('/uploads', express.static(__dirname + '\\public'))

app.get('/produtos/listar', (request, response) => {
    let query = "SELECT * FROM produtos"
    console.log(request);
    connection.query(query, (err, results) => {
        if (results) {
            response
             .status(200)
             .json({
                success: true,
                message: "sucesso",
                data: results
             })
        } else {
            response
            .status(500)
            .json({
               success: false,
               message: err,
               data: results
            })
        }
    })

})

app.delete('/produto/deletar/:id', (request, response) => {  
    const id = request.params.id; // Acessando o ID diretamente
    const query = "DELETE FROM produtos WHERE id = ?";

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err); // Adicionando log de erro
            return response.status(500).json({
                success: false,
                message: "Erro ao deletar o produto.",
                error: err
            });
        }

        if (results.affectedRows > 0) {
            return response.status(204).send(); // 204 No Content
        } else {
            return response.status(404).json({
                success: false,
                message: "Produto não encontrado."
            });
        }
    });
});




app.put('/produto/editar/:id', (request, response) => {
    let params= Array(
        request.body.nome,
        request.body.preco,
        // request.file.filename,
        request.params.id
    );

    let query = "UPDATE produtos SET  nome = (?), preco = (?), WHERE id = (?)"
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            })
        }
    });
})







