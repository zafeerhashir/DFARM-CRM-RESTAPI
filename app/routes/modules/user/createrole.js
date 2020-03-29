const roleModel = require('../../../models/role')

module.exports = async (req, res) => {
    try {
 
        const role = new roleModel(req.body)

        await role.save()
        
        res.send(role)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).send(error)
    }
}

