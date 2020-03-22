
const animalModel = require('../../../models/animal');




module.exports = async (req, res, next )  =>
{
    try {
        const animal = await animalModel.findByIdAndDelete(req.params.id)
    
        res.status(200).send()
      } catch (err) {
        res.status(500).send(err)
      }
}
