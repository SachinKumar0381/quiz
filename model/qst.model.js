const mongoose = require("mongoose");

const qstSchema = mongoose.Schema({
    "level" : String,
    "category" : String,
    "question" : String,
    "option" : Array,
    "answer" : Number
});

const QstModel = new mongoose.model("question",qstSchema);

module.exports = QstModel;