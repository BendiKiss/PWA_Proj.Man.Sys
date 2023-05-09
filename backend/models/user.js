// What the Task can send to the db
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
let UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 5,
            max: 255
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        pass: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        date: {
            type: Date,
            default: Date.now
        },
        userLevel: {
            type: String,
            default: 'user'
        },
    }
);

module.exports = Mongoose.model("User", UserSchema);