/** Import Required modules */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const {UPLOAD_FOLDER} = require('../utils');

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

app.get('/resources/:resource',(req,res)=>{
    const { resource} = req.params;
    res.sendFile(`${UPLOAD_FOLDER}/${resource}`);
})


module.exports = app;