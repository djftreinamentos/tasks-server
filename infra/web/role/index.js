const  menuControllerBuilder = require('./controller-roles');
const rolesRoutesBuilder = require('./routes');
const rolesRepository = require('../../db/role/repository-role');
const RolesService = require('../../../app/domain/role/service-role')
const permissionRepository = require('../../db/permission/repository-persionssions');
const PermissionService = require('../../../app/domain/permission/service-permission')
const rolesService = new RolesService(rolesRepository);
const permissionService = new PermissionService(permissionRepository);
const controller = menuControllerBuilder.build(permissionService,rolesService);
const routes = rolesRoutesBuilder.build(controller);

module.exports = {
    routes
}