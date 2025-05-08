const express = require("express")
const app = express()
const port = 3000

app.use((req, res, next) => {
    req.requestTime = new Date().toLocaleString();
    next();
});

app.get("/", (req, res) => {
    res.send("Raiz")
    console.log("Acessou página/rota Raiz ("+req.requestTime+")")
})

app.get("/about", (req, res) => {
    res.send("Sobre")
    console.log("Acessou página/rota Sobre ("+req.requestTime+")")
})

app.post("/data", (req, res) => {
    res.send("Dados")
    console.log("Acessou página/rota Dados ("+req.requestTime+")")
})

app.get("/users", (req, res) => {
    res.send("Usuários")
    console.log("Acessou página/rota Usuários ("+req.requestTime+")")
})

app.get("/users/signin", (req, res) => {
    console.log("Acessou página/rota Usuários-SignIn (" + req.requestTime + ")");
    // Redireciona para a página de cadastro
    res.redirect("http://localhost:3000/users/signup");
});


app.get("/users/signin/:userid", (req, res) => {
    res.send("Seja muito bem-vindo "+req.params.userid+"!")
    console.log("Acessou página/rota Usuários-SignIn ("+req.requestTime+")")
})

app.get("/users/signup", (req, res) => {
    res.send("Usuários-SignUp")
    console.log("Acessou página/rota Usuários-SignUp ("+req.requestTime+")")
})

app.use((req, res) => {
    res.status(404).send(`
        Página não encontrada
        Você acessou a página ${req.originalUrl} às ${req.requestTime}
        <a href="http://localhost:3000/">Voltar para a página inicial</a>
    `)
})

app.listen(port, () => {
    console.log("Escutando na porta " + port)
})