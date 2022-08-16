const houses = require('./db.json');
let globalID = 4
module.exports= {
    getHouses: (req, res) =>{
        res.status(200).send(houses);
    },



deleteHouses: (req, res) => {
    const id = Number(req.params.id);
    const index = houses.findIndex(elem => elem.id === id);
    houses.splice(index, 1);
    res.status(200).send(houses);
},
createHouses: (req, res) =>{
   
    let {title,rating,imageURL} = req.body;
    rating = Number (rating);
    const newHouses = {
        id: globalID, title, // same as title: title 
        rating,imageURL
    }
    houses.push(newHouses);
    res.status(200).send(houses);
    globalID++;
},
updateHouses: (req, res) => {
// console.log(req.params);
// console.log(req.body);
// res.status(200).send(movies);
let { id } = req.params;
        id = Number(id);
        const { type } = req.body
        const index = houses.findIndex(elem => elem.id === id);

       
        if (houses[index].price === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0');
        } else if (type === 'plus') {
            houses[index].price+=10000;
            res.status(200).send(houses);
        } else if (type === 'minus') {
            houses[index].price-=10000;
            res.status(200).send(houses);
        } else {
            res.sendStatus(400);
        }
    },
}