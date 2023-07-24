const  mongoose = require('mongoose')
const schema = mongoose.Schema
const BoutiqueSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type:String,
    require:true,
  },
adresse:{
    type: String,
    require:true,
},
  category: {
    type: String,
    require: true,
  },
  proprietaire: {
    type: String,
    require: true,
  },
 
})
module.exports = mongoose.model('boutique', BoutiqueSchema)