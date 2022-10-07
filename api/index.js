require('./db-connection');
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3030;

const hotelsRouter = require('./routes/hotels');
const enquiriesRouter = require('./routes/enquiries');
const contactMessagesRouter = require('./routes/contactsMessages');

app.use(bodyParser.json());
app.use(cors());

app.use('/hotels', hotelsRouter);
app.use('/enquiries', enquiriesRouter);
app.use('/contactMessages', contactMessagesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
