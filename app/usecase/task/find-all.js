class FindAllTaskUseCase{
    constructor({permissionService, taskService}){
        this.permissionService = permissionService;
        this.taskService = taskService;
        this.execute = this.execute.bind(this);
        this.permissionType = 'ACTION';
    }

    async execute(context){
        let tasks = await this.taskService.findAll();
        return tasks;
    }
}

module.exports = FindAllTaskUseCase;