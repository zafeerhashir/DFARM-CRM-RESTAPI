const roleModel = require('../../../models/role')

module.exports = async (req, res, next )  =>
{
    try 
    {
        const role  = await roleModel.find({}).
        select('roleName')
        .exec(async(error, role) => {
            if(error) throw error
          console.log('Populated User' + role);
         await  res.send(role);
        });
      
    } 
    catch (err) 
    {

        console.log('Populated User' + err);

        res.status(500).send(err)
    }
}
