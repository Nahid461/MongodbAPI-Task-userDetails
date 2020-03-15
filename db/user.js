let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    firstName: { type:String, min:4, max:100, required:true},
    lastName: { type:String, min:4, max:100, required:true},
    Address:{
    Country:{ type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    },
    Gender: { type:String, required: true },
    UserLogin: {
        emailId: { type: String, required: true },
        passWord: { type: String, required: true },
    }
});

let userModel = mongoose.model("taskUserDetails", userSchema);
module.exports = userModel;