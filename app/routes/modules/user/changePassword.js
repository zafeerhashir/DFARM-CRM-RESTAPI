const userModel = require('../../../models/user')

module.exports = async (req, res) => {
  
    try {


        document = await userModel.findOne({_id:req.params.userId})
        document.password = req.body.password
      
        await document.save(async(error,doc)=>
        {
            if(error) throw error
            await res.send(doc)

        })

    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)
    }

}