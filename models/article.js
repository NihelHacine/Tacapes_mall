const  mongoose = require('mongoose')
const schema = mongoose.Schema
const ArticleSchema = new schema({

  name: {type: String, require: true,},
  description: {type: String, require: true,},
  image: {type: String,require: true},
  quantity: {type: Number, require: true,},
  price: {type: Number, require: true,},
  size: {type: Array, require: true,},
  category: {type: String, require: true,},
  gender: {type: String, require: true,},
  nom_boutique: {type: String, require: true,},
  proprietaire:{type:String, require: true,},
  images:{type:Array,require:true},
 
})

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article 

