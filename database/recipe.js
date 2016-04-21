var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(mongoose){
    var recipeSchema = new Schema({
        name        :       { type: String, required: true, unique: true },
        //id          :       ObjectId,
        tags        :       [String],
        author      :       String,
        //created   :       { type: Date, default: Date.now },
        //updated   :       { type: Date, default: Date.now },
        ingredients :       [ String ], //store amount and type  //mongoose.Schema.Types.Mixed ],
        steps       :       [ String ],
        timers      :       [ Number ],
        imgurl      :       String,
        origurl     :       String
    
    });
 /*
    recipeSchema.methods.findSimilarTypes = function (cb) {
        return this.model('recipe').find({type: this.type }, cb);
    };
    
    
    recipeSchema.methods.dudify = function() {
        this.name = this.name +'-dude';
        return this.name;
    };
    
*/
    var ingredientSchema = new Schema({
        name: {type: String, required: true, unique: true }
    });
    

    var models = {
        Recipe: mongoose.model('Recipe', recipeSchema),
        Ingredient: mongoose.model('Ingredient', ingredientSchema)
    };
    return models;
};

