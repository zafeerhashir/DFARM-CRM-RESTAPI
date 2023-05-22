
const feedModel = require('../../../models/feed');




module.exports = async (req, res, next) => {

  const { _id } = req.body

  const { item } = req.body

  const document = await feedModel.findOne({ _id: req.params.parentDocumentId })


  await item.forEach(element => {
    document.feed.push(element);
  });



  await document.save(async function (err, document) {

    if (err) await res.status(500).send(err)

    else await res.send(document)

  });


}
