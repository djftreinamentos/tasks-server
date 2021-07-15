class UpdateTaskUseCase{
    constructor({permissionService, taskService,tokenService}){
        this.permissionService = permissionService;
        this.taskService = taskService;
        this.tokenService = tokenService;
        this.execute = this.execute.bind(this);
        this.createtask = this.createtask.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        const id = parseInt(context.id);
        const oldtask = await this.taskService.findById(id)
        if(!oldtask){
            return false;
        }
        let task = await this.createTask(context);
         const result = await this.taskService.update(task);
        return {ok:result};
    }
    async createTask({id,title,description, priority,planningType, createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type}){
        id = parseInt(id);
        return new Task({id,title,description, priority,planningType, createdAt,duration, predictedTime, history, deliveryForecast,deliveredAt,status,user,type})

    }
}

module.exports = UpdateTaskUseCase;