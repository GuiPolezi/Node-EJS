const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D:",
            message: "Desenvolver aplicações/serviços de forma fácil",
        },
        {
            title: "E:",
            message: "EJS usa script para renderizar HTML",
        },
        {
            title: "M:",
            message: "Muito fácil de usar",
        },
        {
            title: "A:",
            message: "Alguma coisa",
        },
        {
            title: "I:",
            message: "Install EJS",
        },
        {
            title: "S:",
            message: "Sintaxe simples",
        },
    ];

    const subTitle = "Uma línguagem de modelagem para criação de página HTML utilizando JS (JavaScript)"
    res.render("pages/index", {
        qualitys: items,
        subTitle: subTitle,
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando");