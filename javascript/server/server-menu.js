const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/menuDB',{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('connected to db'))
    .catch(err => console.error('could not connect to db', err));

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    url: String

});
const dishes = mongoose.model('dishes', menuSchema);

app.get('/menu1', async(req, res)=>{
    try{
        const dish = await dishes.find();
        res.json(dish);
    }
    catch(err){
        res.status(500).send('error retrieving menu items');
    }

});

// async function test(){
//     try{
//         const temp = await dishes.find();
//         console.log(temp);
//     }
//     catch(err){
//         console.log(err,'fail');
//     }
// }
// test()
app.listen(port, () =>{
    console.log(`server is running on htpps://localhost: ${port}`);
})