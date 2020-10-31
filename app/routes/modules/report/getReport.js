const milkModel = require("../../../models/milk");
const feedModel = require("../../../models/feed");
const animalModel = require("../../../models/animal");
const medicineModel = require("../../../models/medicine");

const getFeedItemsPrice = async function (items) {
  if (!items || items.length === 0) return null;
  const feedItems = [];
  for (let i of items) {
    feedItems.push(...i["feed"]);
  }
  var price = 0;
  for (let f of feedItems) {
    price += f.price;
  }
  return price;
};

const getMilkPrice = async function (items) {
  if (!items || items.length === 0) return null;
  var price = 0;
  for (let i of items) {
    price += i.rate * (i.milkProducePM + i.milkProduceAM);
  }
  return price;
};

const getMedicinePrice = async function (items) {
  if (!items || items.length === 0) return null;
  var price = 0;
  for (let i of items) {
    price += i.price;
  }
  return price;
};

const getAnimalPrice = async function (items) {
  if (!items || items.length === 0) return null;
  var price = 0;
  for (let i of items) {
    if (i.price != undefined) {
      price += i.price;
    }
  }
  return price;
};

async function report(animalPrice, milkPrice, feedPrice, medicinePrice) {
  return { animalPrice, milkPrice, feedPrice, medicinePrice}
}

module.exports = async function getReport(req, res, next) {
  try {


    const toDate = new Date(req.query.todate)
    const fromDate = new Date(req.query.fromdate)

    const milkArray = await milkModel
      .find({
        animal: null,
        date: { $lte: toDate, $gte: fromDate },
      })

    const feedDateArray = await feedModel.find({
      date: { $lte: toDate, $gte: fromDate },
    });

    const medicineArray = await medicineModel.find({
      date: { $lte: toDate, $gte: fromDate },
    });

    const animalArray = await animalModel.find({
      purchaseDate: {
        $lte: toDate,
        $gte: fromDate,
      },
    });

    const feedPrice = await getFeedItemsPrice(feedDateArray);
    const milkPrice = await getMilkPrice(milkArray);
    const medicinePrice = await getMedicinePrice(medicineArray);
    const animalPrice = await getAnimalPrice(animalArray);


    const reporti = await report(
      animalPrice,
      milkPrice,
      feedPrice,
      medicinePrice
    );

    await res.send(reporti);

    // console.log(milkPrice)
    // const report = {
    //   price: milkPrice,
    //   medicine: medicineArray,
    //   animal: animalArray,
    //   feed: feedItem,
    // };
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
