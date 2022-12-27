const express = require('express');
const colors = require('colors')
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));


app.listen(port, () => 
console.log(`☕️ Server is running on port ➔  ${port} 💣`.green.underline.bold))

