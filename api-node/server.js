var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser'),
  cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.options('*', cors())
app.use(cors());

var routes = require('./api/routes/productRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

//swa start http://localhost:3000 --api ./api-node