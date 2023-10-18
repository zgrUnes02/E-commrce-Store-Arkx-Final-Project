const dotenv = require('dotenv').config() ;
const express = require('express') ;
const database = require('./config/database');
const app = express() ;
const customerRouter = require('./routes/customerRoute') ;
const userRouter = require('./routes/userRoute');
const cookieParser = require('cookie-parser');
const categoryRouter = require('./routes/categoryRoute');
const productRouter = require('./routes/productRoute');
const subcategoryRouter = require('./routes/subcategoryRoute');
const companyRouter = require('./routes/companyRoute');
const orderRouter = require('./routes/orderRoute');
const PORT = process.env.PORT ;

//! Database connection
database() ;

//! Use middlewares
app.use(express.json()) ;
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//! Use the routes
app.use('/v1' , customerRouter) ;
app.use('/v1',categoryRouter)
app.use('/v1', productRouter);
app.use('/v1' , subcategoryRouter) ;
app.use('/v1' , companyRouter) ;
app.use('/v1' , orderRouter);
app.use('/v1',userRouter);

//! Run the server
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})
