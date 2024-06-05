const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const productRoutes = require('./routes/productroutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Use Route
app.use('/api', productRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});