const express = require('express');
const app = express();
const PORT = 3000;

// Middleware de aplicação para registrar acessos
app.use((req, res, next) => {
    console.log(`Acesso à rota: ${req.path} - ${new Date().toISOString()}`);
    next();
});

// Middleware para a rota '/'
const homeMiddleware = (req, res, next) => {
    res.send('Página Home');
};

// Middleware para a rota '/signin'
const signinMiddleware = (req, res, next) => {
    // Verifica se há parâmetro userid na query string
    if (req.query.userid) {
        res.redirect(`/users/${req.query.userid}`);
    } else {
        res.redirect('/signup');
    }
};

// Middleware para a rota '/signup'
const signupMiddleware = (req, res, next) => {
    res.send('Página Signup');
};

// Middleware para a rota '/users/:userid'
const userMiddleware = (req, res, next) => {
    const userId = req.params.userid;
    res.send(`Bem-vindo, usuário ${userId}!`);
};

// Configuração das rotas
app.get('/', homeMiddleware);
app.get('/signin', signinMiddleware);
app.get('/signup', signupMiddleware);
app.get('/users/:userid', userMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});