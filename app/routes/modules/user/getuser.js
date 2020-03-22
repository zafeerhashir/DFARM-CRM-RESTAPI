const userModel = require('../../../models/user')




module.exports = async (req, res, next )  =>
{
    try 
    {
        const user  = await userModel.find({})
        res.send(user)
      
    } 
    catch (err) 
    {
        res.status(500).send(err)
    }
}
