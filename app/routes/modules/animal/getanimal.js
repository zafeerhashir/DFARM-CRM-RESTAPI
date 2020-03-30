const animalModel = require('../../../models/animal');


module.exports = async function getAnimals (req, res, next ) 

{


      try
        {
            animal = await animalModel.find({});

            if (!animal) res.status(404).send("No item found")


            res.send(animal); 
        }

        catch (err) 
        {
          res.status(500).send(err);
        } 

        
         
  }

