const express = require('express');
const app = express();
const port = 3000;
const TodoController = require('./controllers/todo.controller')


app.use(express.json());

app.get('/', (req, res) => {
    res.json({message : "Hello from Todo API ! It's working well"})
});


// Todo Routes
app.get('/todo/:id', TodoController.getOne);
app.get('/todo', TodoController.getAll );
app.post('/todo', TodoController.create);
app.put('/todo/:id', TodoController.update);
app.delete('/todo/:id', TodoController.delete);


app.listen(port, () => {
    console.log('Server is running on port ', port);
})
