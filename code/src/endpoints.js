const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let tasks = [
    {"id": 1 , "titel": "Einkaufsliste", "autor": "Barbara Baerfuss", "Erstellungsdatum": "","Erfüllungsdatum": "" },
    {"id": 2 , "titel": "Aufgaben", "autor": "Max Muster", "Erstellungsdatum": "","Erfüllungsdatum": "" }
];

// Endpunkte
app.get('/tasks', (request,response)=>{
    response.status(200).send(tasks);
});




app.listen(port, ()=>{
    console.log(`server runs on port 3000 ${port}`);
});