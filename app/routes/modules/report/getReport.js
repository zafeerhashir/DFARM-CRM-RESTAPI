const milkModel = require("../../../models/milk");
const feedModel = require("../../../models/feed");
const animalModel = require("../../../models/animal");
const medicineModel = require("../../../models/medicine");

const getFeedItems = async function (items) {
  if(!items) return null
  const feedItems = [];
  for (let i of items) {
    feedItems.push(...i["feed"]);
  }
  return feedItems;
};

const getMilkPrice = async function (items) {
  if(!items) return null
  var price = 0;
  for (let i of items) {
    price += i.rate * (i.milkProducePM + i.milkProduceAM);
  }
  return price;
};

const getMedicinePrice = async function (items) {
  if(!items) return null
  var price = 0;
  for (let i of items) {
    price += i.price;
  }
  return price;
};

const getAnimalPrice = async function (items) {
  if(!items) return null
  var price = 0;
  console.log(items)
  for (let i of items) {
    if(!i.price === undefined) {
      price += i.price;
    }
  }

  console.log(price)
  return price;
};

async function Report(animalPrice, milkPrice, feedPrice, medicinePrice) {
  this.animal = animalPrice;
  this.milk = milkPrice;
  this.feed = feedPrice;
  this.medicine = medicinePrice;
}

module.exports = async function getReport(req, res, next) {
  try {
    var totalMilk = null;

    const milkArray = await milkModel
      .find({
        animal: null,
        date: { $lte: new Date(2020, 10, 30), $gte: new Date(2010, 1, 1) },
      })
      .select({ rate: 1, milkProducePM: 1, milkProduceAM: 1 });

    const feedDateArray = await feedModel.find({
      date: { $lte: new Date(2020, 10, 30), $gte: new Date(2010, 1, 1) },
    });

    const medicineArray = await medicineModel.find({
      date: { $lte: new Date(2020, 10, 30), $gte: new Date(2010, 1, 1) },
    });

    const animalArray = await animalModel.find({
      purchaseDate: {
        $lte: new Date(2020, 10, 30),
        $gte: new Date(2010, 1, 1),
      },
    });

    const feedPrice = await getFeedItems(feedDateArray);
    const milkPrice = await getMilkPrice(milkArray);
    const medicinePrice = await getMedicinePrice(medicineArray);
    const animalPrice = await getAnimalPrice(animalArray);

    console.log(feedPrice);
    console.log(milkPrice);
    console.log(medicinePrice);
    console.log(animalPrice);

    const report = await Report(
      animalPrice,
      milkPrice,
      feedPrice,
      medicinePrice
    );

    await res.send(report)

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
