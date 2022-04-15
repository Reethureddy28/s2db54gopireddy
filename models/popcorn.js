const mongoose = require("mongoose") 
const popcornSchema = mongoose.Schema({ 
 popcorn_flavour: String, 
 popcorn_quantity: Number, 
 popcorn_cost: Number 
}) 
 
module.exports = mongoose.model("popcorn", popcornSchema)