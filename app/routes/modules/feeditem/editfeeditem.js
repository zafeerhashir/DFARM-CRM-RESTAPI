
const feedModel = require('../../../models/feed');




module.exports = async (req, res, next )  =>
{


        const { unit, price, kilogram, name } = req.body

      
        const document = await feedModel.findOne({ _id: req.params.parentDocumentId })
        
           
        item = await document.feed.id(req.params.childDocumentId)
        
   
        item.unit = unit
        item.price = price
        item.kilogram = kilogram
        item.name = name


        await document.save(async function(err,document) {

          if (err) await res.status(500).send(err)
          
          else  await res.send(document)

        });

       
}
