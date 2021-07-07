const  taskControllerBuilder = require('./controller-task');
const taskRoutesBuilder = require('./routes');
const taskRepository = require('../../db/task/repository-task');
const TaskService = require('../../../app/domain/task/service-task')
const permissionRepository = require('../../db/permission/repository-persionssions');
const PermissionService = require('../../../app/domain/permission/service-permission')
const taskService = new TaskService(taskRepository);
const permissionService = new PermissionService(permissionRepository);
const controller = taskControllerBuilder.build(permissionService,taskService);
const routes = taskRoutesBuilder.build(controller);

module.exports = {
    routes
}