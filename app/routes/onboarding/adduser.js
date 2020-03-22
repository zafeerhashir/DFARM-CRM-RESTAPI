
const userModel = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    // Create a new user
    try 
    {

        const user =  new userModel(req.body)

        

        await user.save()
        
        res.send(user);
        


    } 
    catch (error) 
    {
        res.status(500).send(error)
    }
}


