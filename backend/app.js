const dotenv = require('dotenv').config() ;
const express = require('express') ;
const database = require('./config/database');
const app = express() ;
const customerRouter = require('./routes/customerRoute') ;
const categoryRouter = require('./routes/categoryRoute');
const PORT = process.env.PORT ;

//* Database connection
database() ;

//* Use middlewares
app.use(express.json()) ;
app.use(express.urlencoded({ extended: false }))

//* Use the routes
app.use('/v1' , customerRouter) ;
app.use('/v1',categoryRouter)

//* Run the server
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})
