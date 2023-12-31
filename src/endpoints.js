const express = require('express');
const app = express();
const port = 3000;

// Json middleware Zugriff
app.use(express.json());

//externe endpunkte
const router = express.Router();
router.get('/', (req, res) => {
  res.send('login home page')
})
router.get('/about', (req, res) => {
  res.send('About login')
})

module.exports = router

// json mit Daten
let tasks = [
    {id : 1, titel : "Einkaufsliste", autor : "Barbara Baerfuss", erstellungsdatum : Date(), erfüllungsdatum : null },
    {id : 2, titel : "Aufgaben", autor : "Max Muster", erstellungsdatum : Date(), erfüllungsdatum : null}
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
    
    app.get('/tasks/:id', (request, response) => {
        if(id !== tasks.params.id){
            response.status(404).send("id nicht vorhanden!");
        }else{
            response.status(200).send(tasks.filter((task) => task.id === request.params.id));
        }   
    });
    
    app.patch('/tasks/:id', (request, response) => {
        const keys = Object.keys(request.body);
        const oldTask = tasks.find((task) => task.id === task.params.id);
        if(oldTask !== tasks.params.id){
            response.status(404).send("id nicht vorhanden!");
        }else{
            keys.forEach((key) => oldTask[key] = request.body [key]);
            tasks = tasks.map((task) => task.id === request.params.id ? oldTask : task);
            response.status(201).send(tasks);
        } 
    });
    
    app.delete('/tasks/:id',(request, respones) => {
        if(id !== tasks.params.id){
            response.status(404).send("id nicht vorhanden!");
        }else{
            tasks = tasks.filter((task) => task.id !== request.params.id);
            respones.status(200).send(tasks);
        } 
    })
    
app.listen(port, ()=>{
    console.log(`server runs on port: 3000 ${port}`);
});

