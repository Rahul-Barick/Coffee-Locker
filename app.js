var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var coffeeController = require('./controllers/coffee');

mongoose.connect('mongodb://localhost:27017/coffeedb')

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended : true}));
 
router.route('/')
	.get(coffeeController.emptyCoffee);
	
router.route('/coffee')
    .post(coffeeController.postCoffees)
    .get(coffeeController.getCoffees);

router.route("/coffee/:coffee_id")
    .get(coffeeController.getCoffee)
    .put(coffeeController.putCoffee)
    .delete(coffeeController.deleteCoffee);

app.use('/api',router);

app.listen(3000,function(){
    console.log("Hi i am up! ");    
});

