

const userModel = require('../../../models/user')
const objectId = require("mongodb").ObjectID


module.exports = async (req, res) => {



    try {


        document = await userModel.findOneAndUpdate(req.params.userId, req.body)
        await document.save()
        await res.send(document)

    }
    catch (err) {

        res.status(500).send(err)
    }
}

