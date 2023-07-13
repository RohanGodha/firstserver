const express = require('express');
const app = express();
app.use(express.json());

const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

app.listen(port, () => {
    console.log(`Node started at ${port}`);
  });

app.get('/todos', (req, res) => {
    res.status(200).send(toDoList);
});

app.post('/todos', (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Item added successfully"
    });
});

app.delete('/todos', (req, res) => {
    const itemToDelete = req.body.item;
    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });
    res.status(202).send({
        message: "Item deleted successfully: ${itemToDelete}"
    });
});

app.all('*', (req, res) => {
    res.status(404).send({
        message: "Invalid route"
    });
});

app.all("/todos", (req, res) => {
    res.status(501).send({
        message: "Method not allowed"
    });
});