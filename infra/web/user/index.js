const  menuControllerBuilder = require('./controller-user');
const userRoutesBuilder = require('./routes');
const userRepository = require('../../db/user/repository-user');
const UserService = require('../../../app/domain/user/service-user')
const permissionRepository = require('../../db/permission/repository-persionssions');
const PermissionService = require('../../../app/domain/permission/service-permission')

const userService = new UserService(userRepository);
const permissionService = new PermissionService(permissionRepository);
const controller = menuControllerBuilder.build(permissionService,userService);
const routes = userRoutesBuilder.build(controller);

module.exports = {
    routes
}