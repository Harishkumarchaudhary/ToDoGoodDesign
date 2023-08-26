const express = require('express');
const port = 8000;
const path = require('path');

const ToDoTask = require('./models/toDoTask');
const db = require('./config/mongoose');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //It will looks for views under __dirname
app.use(express.urlencoded());

app.use(express.static('assets'));

app.get('/', function(req, res){
    //Fetch from db
    ToDoTask.find({}).then((toDoTasks)=>{
        return res.render('home', {
            title: "TODO App",
            todo_list: toDoTasks
        });
    }).catch((err)=>{
        console.log('error in fetching toDoTasks from db');
        return;
    });
});

//Now through query params
app.get('/delete-task/', function(req, res){
    console.log(req.query);
    //Get objectId from db (_id)
    let id = req.query.id;

    //find task in db using id and delete it 
    ToDoTask.findByIdAndDelete(id)
    .then(()=>{
        console.log('Task deleted successfully');
        return res.redirect('back');
    }).catch((err)=>{
        console.log('Error in deleting the object from db', err);
    });
    
});

app.post('/create-task', function(req, res){
    console.log('req body is', req.body);
   ToDoTask.create({
    description: req.body.description,
    category: req.body.category,
    completion_date: req.body.completion_date
   }).then((newTask)=>{
       console.log('****', newTask);
       return res.redirect('/')
   }).catch((err)=>{
       console.log('Error in creating contact in Db', err);
       return;
   });
})

app.listen(port, function(err){
    if (err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port:', port);
});