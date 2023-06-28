const express = require('express');
const app = express();
const port = 5001;

app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });


  const motos = [
    {
      id: 1,
      model: "R7",
      brand: "YAMAHA",
      speed: "30km/H",
      flams: false,
    },
    {
        id: 2,
        model: "Super Duke 1290",
        brand: "KTM",
        speed: "412km/H",
        flams: true,
    },
    {
        id: 3,
        model: "Super Meteor 650",
        brand: "Royal Enfield",
        speed: "10 000km/H",
        flams: true,
    },
  ];
//-------------------FIXER UNE LIMITE ET DES CATEGORIES  -----------------------



  app.get("/api/motos", (req, res) => {
    console.log(req.query)
    if(req.query.limit) {
        if(req.query.marque) {
            return res.status(200).send(
                motos.filter((moto) => {return moto.marque === req.query.marque})
                    .slice(0, req.query.limit)
            )
        }
        return res.status(200).send(motos.slice(0, req.query.limit))
    }
    if(req.query.marque) {
        return res.status(200).send(
            motos.filter((moto) => {return moto.marque === req.query.marque})
                .slice(0, 10)
        )
    }
    res.status(200).send(motos.slice(0, 10))
})
  //challenege 1-3 -------------------------------

  app.get("/api/motos/:id", (req,res)=>{
    const parsedMotoId = parseInt(req.params.id)
    const moto = motos.find((moto) => moto.id === parsedMotoId);
    if (moto) {
        res.send(moto);
    }
    else {
        res.sendStatus(404);
    }
    });
 