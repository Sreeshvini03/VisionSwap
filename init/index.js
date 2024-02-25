const mongoose = require("mongoose");
const initData = require("./data.js");

const UsersList = require("../models/user.js");

main()
.then(() => {
    console.log("Connection successful");
})
.catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/visionSwap');
}

const initDB = async () => {
    await UsersList.deleteMany({});
    await UsersList.insertMany(initData.data);
    console.log("data was saved successfully");
}
initDB();