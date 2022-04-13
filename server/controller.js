let Houses = require('./db.json')
let globalid = 4
module.exports={
getHouses: function(req,res){
res.status(200).send(Houses)

},
deleteHouse: function(req,res){
let index = Houses.findIndex(elem => elem.id === +req.params.id)
Houses.splice(index, 1)
res.status(200).send(Houses)
},

createHouse: function(req,res){
const {address, price, imageURL} = req.body;
let newHouse = {
id: globalid,
address,
price,
imageURL,
}
Houses.push(newHouse)
globalid++
res.status(200).send(Houses)
},
updateHouse: function(req,res){
let {id} = req.params
let {type} = req.body
let index = Houses.findIndex(elem => +elem.id === +id)

if (type==='minus'&& Houses[index].price<=10000){
    Houses[index].price=0
    res.status(200).send(Houses)
    }
else if(type==='plus'){
Houses[index].price+=10000
res.status(200).send(Houses)
}
else if(type==='minus'){
    Houses[index].price-=10000
    res.status(200).send(Houses)
}

}
}