const dotenv = require('dotenv').config() ;
const express = require('express') ;
const database = require('./config/database');
const app = express() ;
const customerRouter = require('./routes/customerRoute') ;
const PORT = process.env.PORT ;

//* Database connection
database() ;

//* Use the routes
app.use(customerRouter) ;

//* Run the server
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})
