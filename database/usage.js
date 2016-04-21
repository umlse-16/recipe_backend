var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We\'re connected!')
});
var models = require('./recipe.js')(mongoose);

//var Recipe = require('./recipe.js');
//var Ingredient = require('./ingredient.js');


var ingredient = new models.Ingredient({
    name: 'beef'
});

var recipe = new models.Recipe({
    name: 'Meatloaf,'
    //type: 'loaf',
    //ingredients: { name: 'beef', type: 'meat' }
});

console.log(recipe.name);

//models.Recipe.save();
/*.save(function(err){
    if (err) throw err;

    console.log('recipe saved ');
});

models.Recipe.find({}, function(err, recipes) {
    if (err) throw err;

    console.log(recipes);
});
*/