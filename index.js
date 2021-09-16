const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const personagens = [
    {
        imagem: "/img/globin.png",
        nome: "Globin"
    },
    {
        imagem: "/img/orc.png",
        nome: "Orc"
    },
    {
        imagem: "/img/feiticeira.png",
        nome: "Feiticeira"
    }
]

const armas = [
    {
        imagem: "/img/arco.png",
        nome: "Arco"
    },
    {
        imagem: "/img/espada.png",
        nome: "Espada"
    },
    {
        imagem: "/img/soco.png",
        nome: "Soco"
    }
] 



app.get("/", (req, res) => {
  res.render("index", {personagens: personagens, armas: armas});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
