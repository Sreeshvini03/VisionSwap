if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const flash = require("connect-flash");
const app = express();
const path = require("path");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require("./models/user.js");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LocalMongoose = require('passport-local-mongoose').Mongoose;
const cloudConfig = require('./cloudConfig');

passport.use(new LocalStrategy(User.authenticate()));
let port = 3000;

const dburl = process.env.ATLASDB_URL;

const store = MongoStore.create({
    mongoUrl: dburl,
    crypto: {
        secret:process.env.SECRET,
    },
    touchAfter: 24*3600,
})

store.on("error",()=> {
    console.log("ERROR IN MONGO SESSION STORE",err)
});

app.use(session({ 
    store,
    secret: process.env.SECRET, 
    resave: true, 
    saveUninitialized: true ,
    cookie: {
        expires: Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
}));
app.use(flash());
// const mongourl = 'mongodb://127.0.0.1:27017/visionSwap';

async function main() {
    try {
        await mongoose.connect(dburl);
        console.log("Connection successful");
    } catch (err) {
        console.log(err);
    }
}

main();

app.use(require('express-session')({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.listen(port, () => {
    console.log("app listening to port");
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));


app.get("/homePage", async (req, res) => {
    try {
        const allUsers = await User.find({});
        const searchResults = null;
        const loggedInUser = req.isAuthenticated() ? req.user : null;
        res.render("index.ejs", { allUsers, searchResults, loggedInUser });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/signup", async (req, res) => {
    try {
        const userData = req.body;
        await User.register(new User({
            username:userData.name,
            image: userData.image,
            name: userData.name,
            skills_needed: userData.skills.split(',').map(skill => skill.trim()),
            certified_in: userData.certified.split(',').map(certification => certification.trim()),
            currentJob: userData.currentJob,
            email: userData.email,
        }), userData.password); 
        await cloudConfig.downloadAndUploadToCloudinary(userData.image);
            res.redirect("/homePage");
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/login', passport.authenticate('local', {
    successRedirect: '/homePage',
    failureRedirect: '/login',
    failureFlash: 'Invalid username or password.',
}));



app.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/homePage');
    });
});



app.post("/search", async (req, res) => {
    try {
        const { q } = req.body;
        console.log(q);

        const keywords = q.split(' ').filter(Boolean);

        const regexArray = keywords.map(keyword => ({
            $or: [
                { certified_in: new RegExp(keyword, 'i') },
                { skills_needed: new RegExp(keyword, 'i') }
            ]
        }));

        const query = { $and: regexArray };

        console.log("MongoDB Query:", query);

        const searchResults = await User.find(query);
        const loggedInUser = req.isAuthenticated() ? req.user : null;
        const allUsers = await User.find({});
        res.render("index.ejs", { searchResults, loggedInUser, allUsers,q });
    } catch (error) {
        console.error(error);
        const searchResults = null;
        const loggedInUser = req.isAuthenticated() ? req.user : null;
        const allUsers = await User.find({});
        res.render("index.ejs", { searchResults, loggedInUser, allUsers });
    }
});



app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});



app.get("/login", (req, res) => {
    res.render('login.ejs', { messages: req.flash('err') });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    const isSub = null;
    res.render("contactUs.ejs",{isSub});
});

app.post("/contact",(req,res) => {
    const isSub = "Review successfully submitted";
    res.render("contactUs.ejs",{isSub});

})

app.use((req, res) => {
    console.log("Got a request");
    res.send("Hello");
});
