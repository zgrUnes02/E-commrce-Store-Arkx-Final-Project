const customerController = {

    //* Function for creating new customer 
    register : (req , res) => {
        try {
            res.send('hello world !'); 
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,

    //* Function for login a customer 
} ;

module.exports = customerController ;
