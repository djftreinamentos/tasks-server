/** Import Required modules */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

/** Create express app */
const app = express();

/** Configure app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/** Create express router */
const api = express.Router();
/** Configure routes */
router.config(api);
/**apply routes to express */
app.use('/api/v1', api);


// app.post('/api/v1/authenticate',(req,res)=>{
//     const {login,password} = req.body;

//     if(login === 'bagrinho.teste' && password === '123456'){
//         res.json({
//             userName:"Bagrinho",
//             token:"asdfghjklzxcvbqwerty"
//         })
//     }else{
//         res.sendStatus(401);
//     }
// })


module.exports = app;