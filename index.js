const express = require('express');
const app = express();
const port =  3000;
const TodoController = require('./controllers/todo.controller')
const UserController = require('./controllers/user.controller')
const cors = require('cors');
const auth = require('./middleware/isAuthenticate')

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    headers: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE'
}))
/*
app.use(function(req, res, next) {
    console.log('-- set cors')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});
*/
app.get('/', (req, res) => {
    res.json({message : "Hello from Todo API ! It's working well"})
});

/*** Authentication Requests ***/
app.post('/register', UserController.register);
app.post('/login', UserController.login);

/** Auth middleware **/
app.use(auth);

/** Todos routes **/
app.get('/todo/count', TodoController.count);
app.get('/todo/by/:id', TodoController.getByTable);
app.get('/todo/:id', TodoController.getOne);
app.get('/todo', TodoController.getAll );
app.post('/todo', TodoController.create);
app.put('/todo/:id', TodoController.update);
app.delete('/todo/:id', TodoController.delete);

/** Table routes **/


app.listen(port,  () => {
    console.log('Server is running on port ', port);
})

