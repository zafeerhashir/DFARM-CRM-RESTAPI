
const feedModel = require('../../../models/feed');




module.exports = async (req, res, next )  =>
{
    try {
        const feed  = await feedModel.findByIdAndUpdate(req.params.id, req.body)

        await feed.save()
        
        res.send(feed)
      
    } 
    catch (err) 
    {
        res.status(500).send(err)
    }
}
