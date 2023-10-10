const express = require('express') ;
const exp = require('node:constants') ;
const app = express() ;
const PORT = process.env.PORT || 4001 ;
const EventEmitter = require('node:events') ;
const event = new EventEmitter() ;

//* Make an event for informing us that the server is running with success
event.on('serverRunningWithSuccess' , ( port ) => {
    console.log(`The server is running on http://localhost:${port}`) ;
})

//* Run the server
const server = () => {
    app.listen(PORT , event.emit('serverRunningWithSuccess' , PORT)) ;
}

module.exports = server ;
