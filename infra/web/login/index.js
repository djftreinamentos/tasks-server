const { verifyHash, generateHash,  verifyToken,  generateToken } = require('../../utils');
const  loginControllerBuilder = require('./controller-login');
const loginRoutesBuilder = require('./routes');
const userRepository = require('../../db/user/repository-user');
const UserService = require('../../../app/domain/user/service-user')
const tokenService = {
    verifyHash, generateHash,  verifyToken,  generateToken 
}
const userService = new UserService(userRepository);
const controller = loginControllerBuilder.build(tokenService,userService);
const routes = loginRoutesBuilder.build(controller);

module.exports = {
    routes
}