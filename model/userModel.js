// it is storing of user data 
// this is schema

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, "Name is essential"],
        trim : true,
        maxlength: [30,"Name not more than 30 chratcter"],
    },
    email: {
        type: String,
        require:[true, "Email is essentil"],
        unique:true,
    }
});

module.exports = mongoose.model("User", userSchema);