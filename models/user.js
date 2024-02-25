const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) =>
            v === "" ? "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    skills_needed: {
        type: Array,
        default: [],
    },
    certified_in: {
        type: Array,
        required: true,
    },
    currentJob: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
