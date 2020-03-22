

const userModel = require('../../../models/user')
const objectId = require("mongodb").ObjectID


module.exports = async (req, res) => {



    try {

        console.log(req.body,'reqbody')

        document = await userModel.findOneAndUpdate(req.params.userId, req.body)
        await document.save()
        await res.send(document)

    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

