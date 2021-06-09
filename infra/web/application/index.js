const { verifyHash, generateHash,  verifyToken,  generateToken } = require('../../utils');
const  appControllerBuilder = require('./controller-app');
const appRoutesBuilder = require('./routes');
const tokenService = {
    verifyHash, generateHash,  verifyToken,  generateToken 
}
const controller = appControllerBuilder.build(tokenService);
const routes = appRoutesBuilder.build(controller);

module.exports = {
    routes
}