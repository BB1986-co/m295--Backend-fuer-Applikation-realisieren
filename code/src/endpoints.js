const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let tasks = [
    {"id": 1 , "titel": "Einkaufsliste", "autor": "Barbara Baerfuss", "erstellungsdatum": "","erfüllungsdatum": "" },
    {"id": 2 , "titel": "Aufgaben", "autor": "Max Muster", "erstellungsdatum": "","erfüllungsdatum": "" }
];

// Endpunkte
app.get('/tasks', (request,response) => {
    response.status(200).send(tasks);
});

app.post('/tasks', (request,response) => {
    const newTask = request.body;
    const newID = request.body;
    while(newID != tasks){
        newID['id'] = new Number();
    }
    newTask['erstellungsdatum'] = new Date().toISOString();
    tasks = [...tasks, request.body];

    tasks.push(request.body);
    response.status(201).send(tasks);
})

app.get('/tasks/:id', (request,response) => {
    response.status(200).send(tasks.filter((task) => task.id === request.params.id));
});

app.patch('/tasks/:id', (request,response) => {
    const keys = Object.keys(request.body);
    const oldTask = tasks.find((task) => task.id === task.params.id);
    keys.forEach((key) => oldTask[key] = request.body [key]);
    tasks = tasks.map((task) => task.id === task.params.id ? oldTask : task);
    response.status(201).send(tasks);
});





app.listen(port, ()=>{
    console.log(`server runs on port: 3000 ${port}`);
});