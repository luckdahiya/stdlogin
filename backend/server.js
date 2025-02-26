const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const data = require('./exp');
require('./fetch'); 

app.use(cors());
app.use(express.json());

app.get('/form', async(req,res) => {
    const result = await data.find();
    res.send(result);

})
app.post('/form', async (req, res) => {
    let c = new data(req.body);
        let result = await c.save();
        res.send(result);
});
app.delete('/form/:id', async(req,res)=>{
    const id = req.params.id;
    const result = await data.findByIdAndDelete(id);
    if(result){
        res.send(' Data Deleted');
    }
    else{
        res.send('Data not found');
    }

});

app.listen(7000, () => {
    console.log('Server running');
});