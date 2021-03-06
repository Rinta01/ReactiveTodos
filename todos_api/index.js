var express = require("express"),
    app = express(),
    port = process.env.PORT||3001,
    todoRoutes = require('./routes/todos'),
    bodyParser = require("body-parser");
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/views'));
    app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile("index.html");
});

app.use('/api/todos',todoRoutes);

app.listen(port, function(){
    console.log("App is running on port "+ port);
});