const utils = require('./infra/utils');

async function teste(){
    const hash = await utils.generateHash("123456");
    console.log(hash);
}

teste();