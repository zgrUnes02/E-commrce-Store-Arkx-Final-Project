const dotenv = require('dotenv').config() ;
const express = require('express') ;
const database = require('./config/database');
const server = require('./server');
const app = express() ;

//* Server and Database connection
server() ;
database() ;
