const feedModel = require('../../../models/feed');


module.exports = async (req, res, next )  =>
{

      try
        {
            feed = await feedModel.find({}).populate('feed');
            
            res.send(feed); 
         
        }

        catch (err) 
        {
          res.status(500).send(err);
        } 
        
         
  }
