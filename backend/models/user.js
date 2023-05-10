const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name:       { type: String, required: true, min: 5,max: 100 },
        email:      { type: String, required: true, min: 6, max: 100 },
        pass:       { type: String, required: true, min: 6, max: 50 },
        date:       { type: Date, default: Date.now },
        userLevel:  { type: String, default: 'user' },
    }
);

module.exports = mongoose.model("user", userSchema);