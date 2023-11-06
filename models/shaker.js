const mongoose = require("mongoose")
const shakerSchema = mongoose.Schema({
    shaker_type: String,
    shaker_size: String,
    shaker_cost: Number
})
module.exports = mongoose.model("Shaker", shakerSchema)