const mongoose = require('mongoose') ;
const EventEmitter = require('node:events') ;
const event = new EventEmitter() ;
const dotenv = require('dotenv').config() ;
const PORT = process.env.PORT ;

//* Make an event for informing us that the connection has been approved
event.on('connectionApprovedWithSuccess' , () => {
    console.log(`The connection with atlas database has been approved with success`) ;
}) ;

//* Connect our app with atlas database
const database = () => {
    mongoose.connect(process.env.MONGO_URL) 
    .then(event.emit('connectionApprovedWithSuccess'))
    .catch(error => console.log(error)) ;
}

module.exports = database ;
