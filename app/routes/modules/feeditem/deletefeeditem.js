const feedModel = require("../../../models/feed");

module.exports = async function deleteFeedItem(req, res, next) {
    try {
        const document = await feedModel.findOne({
            _id: req.params.parentDocumentId
        });

        await document.feed.pull({ _id: req.params.childDocumentId }).remove();

        await document.save(async function(error) {
            if (error) throw error;

            await res.status(200).send();
        });
    } catch (error) {


        res.status(500).send(error);
    }
};