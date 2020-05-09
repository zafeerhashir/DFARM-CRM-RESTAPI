const userModel = require('../../../models/user')

module.exports = async (req, res) => {
  
    try {


        document = await userModel.findOneAndUpdate(req.params.userId, req.body)
        await document.save()
        await res.send(document)

    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)
    }

}