const express = require('express');

const app = express();

app.use(express.json());

/** 
 * GET - Buscar uma informação dentro de servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATH - Alterar uma informação especifica no servidor
 * DELETE - Deletar uma informação no servidor
*/

/** 
 * Tipos de Parametros
 * 
 * Route Params => Indentificar um recurso para editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params  => Os objetos inserção/ alteração de algum recurso (JSON)
*/


// metodo get
app.get("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
    ])
});

// metodo post
app.post("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
});

// metodo put
app.put("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
});

// metodo path
app.patch("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 3",
        "Curso 4"
    ])
});

// metodo delete
app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 4"
    ])
});



// setar a porta ex: locaslhost:3333
app.listen(3333);