const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/v1/authenticate',(req,res)=>{
    const {login,password} = req.body;

    if(login === 'bagrinho.teste' && password === '123456'){
        res.json({
            userName:"Bagrinho",
            token:"asdfghjklzxcvbqwerty"
        })
    }else{
        res.sendStatus(401);
    }
})


module.exports = app;