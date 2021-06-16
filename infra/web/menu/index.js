const  menuControllerBuilder = require('./controller-menu');
const menuRoutesBuilder = require('./routes');
const menuRepository = require('../../db/menu/repository-menu');
const permissionRepository = require('../../db/permission/repository-persionssions');
const MenuService = require('../../../app/domain/menu/service-menu')
const PermissionService = require('../../../app/domain/permission/service-permission')

const menuService = new MenuService(menuRepository);
const permissionService = new PermissionService(permissionRepository);
const controller = menuControllerBuilder.build(permissionService,menuService);
const routes = menuRoutesBuilder.build(controller);

module.exports = {
    routes
}