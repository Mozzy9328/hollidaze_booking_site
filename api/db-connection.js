require("dotenv").config();
const mongoose = require("mongoose");
const db_str = process.env.DB_CONNECTION_STRING_Y;

mongoose.connect(db_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(DB => console.log('Connection string attached'))
    .catch(error => console.log(`Error ${error} occurred!`));