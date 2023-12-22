const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let tasks = [
    {"id": 1 , "titel": "Einkaufsliste", "autor": "Barbara Baerfuss", "erstellungsdatum": null,"erfüllungsdatum": null },
    {"id": 2 , "titel": "Aufgaben", "autor": "Max Muster", "erstellungsdatum": "","erfüllungsdatum": "" }
];

// Endpunkte
app.get('/tasks', (request, response) => {
    response.status(200).send(tasks);
});

app.post('/tasks', (request, response) => {
    const newTask = request.body;
    const newID = request.body;
    while(newID !== tasks.params.id){
        newID['id'] = new Number();
    }
    newTask['erstellungsdatum'] = new Date().toISOString();
    tasks = [...tasks, request.body];

    tasks.push(request.body);
    response.status(201).send(tasks);
})
// Todo Logik status 404 wenn es id nicht gibt
app.get('/tasks/:id', (request, response) => {
    response.status(200).send(tasks.filter((task) => task.id === request.params.id));
});

// Todo Logik status 404 wenn es id nicht gibt
app.patch('/tasks/:id', (request, response) => {
    const keys = Object.keys(request.body);
    const oldTask = tasks.find((task) => task.id === task.params.id);
    keys.forEach((key) => oldTask[key] = request.body [key]);
    tasks = tasks.map((task) => task.id === request.params.id ? oldTask : task);
    response.status(201).send(tasks);
});

// Todo Logik status 404 wenn es id nicht gibt
app.delete('/tasks/:id',(request, respones) => {
    tasks = tasks.filter((task) => task.id !== request.params.id);
    respones.status(200).send(tasks);
})

app.listen(port, ()=>{
    console.log(`server runs on port: 3000 ${port}`);
});