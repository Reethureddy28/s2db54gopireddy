const mongoose = require("mongoose") 
const popcornSchema = mongoose.Schema({ 
 popcorn_flavour: {
     type: String,
     required: true
 },
 popcorn_quantity: {
     type: Number,
     min: 2,
     max: 1111
 }, 
 popcorn_cost: Number 
}) 
 
module.exports = mongoose.model("popcorn", popcornSchema)