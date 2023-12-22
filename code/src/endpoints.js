const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let tasks = [
    {"id": 1 , "titel": "Einkaufsliste", "autor": "Barbara Baerfuss", "erstellungsdatum": "","erfüllungsdatum": "" },
    {"id": 2 , "titel": "Aufgaben", "autor": "Max Muster", "erstellungsdatum": "","erfüllungsdatum": "" }
];

// Endpunkte
app.get('/tasks', (request,response)=>{
    response.status(200).send(tasks);
});

app.post('/tasks', (request,response)=>{
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

app.get('/tasks/:id', (request,response)=>{
    response.send(tasks.find((task)=> task.id === request.params.id));
});



app.listen(port, ()=>{
    console.log(`server runs on port: 3000 ${port}`);
});