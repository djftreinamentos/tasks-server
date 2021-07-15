const Task = require('../../domain/task/task');
class CreateTaskUseCase{
    constructor({permissionService, taskService}){
        this.permissionService = permissionService;
        this.taskService = taskService;
        this.tokenService = tokenService;
        this.execute = this.execute.bind(this);
        this.createTask = this.createTask.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        let task = await this.createTask(context);
         task = await this.taskService.insert(task);
        return task;
    }
    async createTask({title,description,priority,planningType,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type}){
        return new Task({title,description,priority,planningType,createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type})

    }
}

module.exports = CreateTaskUseCase;