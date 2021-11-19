const express = require('express');
const app = express();
const port =  3000;
const TodoController = require('./controllers/todo.controller')
const UserController = require('./controllers/user.controller')
const auth = require('./middleware/isAuthenticate')

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
    next();
});

app.get('/', (req, res) => {
    res.json({message : "Hello from Todo API ! It's working well"})
});

/*** Authentication Requests ***/
app.post('/register', UserController.register);
app.post('/login', UserController.login);

//    app.use(auth);


// Todo Routes
app.get('/todo/count', TodoController.count);
app.get('/todo/:id', TodoController.getOne);
app.get('/todo', TodoController.getAll );
app.post('/todo', TodoController.create);
app.put('/todo/:id', TodoController.update);
app.delete('/todo/:id', TodoController.delete);


app.listen(port,  () => {
    console.log('Server is running on port ', port);
})
